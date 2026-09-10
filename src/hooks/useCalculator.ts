import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import {
    calculateTKA,
    calculateTKAD,
} from "../lib/calculator";
import { PROVINCE_WEIGHTS } from "../lib/provinceWeights";
import { type CustomWeights } from "../components/calculator/CustomWeightCard";
import {
    type Level,
    type ScoreSubject,
    type CalculationResult,
} from "../types/calculator";

export function useCalculator() {
    const { t } = useLanguage();

    const [level, setLevel] = useState<Level>("smp-sma");
    const [tkadEnabled, setTkadEnabled] = useState(false);
    const [province, setProvince] = useState<string>("");

    const [tkaScores, setTkaScores] = useState<ScoreSubject[]>([
        {
            id: "indonesian",
            label: t.calculator.subjects.indonesian,
            value: "",
        },
        {
            id: "mathematics",
            label: t.calculator.subjects.mathematics,
            value: "",
        },
    ]);

    const [tkadScores, setTkadScores] = useState<ScoreSubject[]>([
        {
            id: "english",
            label: t.calculator.subjects.english,
            value: "",
        },
        {
            id: "science",
            label: t.calculator.subjects.science,
            value: "",
        },
    ]);

    const [rapot, setRapot] = useState("");

    const [customWeights, setCustomWeights] = useState<CustomWeights>({
        tka: 40,
        rapot: 40,
        tkad: 20,
        enableTkad: true,
    });

    const [result, setResult] = useState<CalculationResult | null>(null);
    const [error, setError] = useState(false);

    const activeTkadScores =
        level === "sd-smp"
            ? tkadScores.filter((s) => s.id === "science")
            : tkadScores;

    const handleScoreChange = (
        setScores: React.Dispatch<React.SetStateAction<ScoreSubject[]>>,
        id: string,
        value: string
    ) => {
        setScores((current) =>
            current.map((subject) =>
                subject.id === id
                    ? { ...subject, value }
                    : subject
            )
        );

        setResult(null);
        setError(false);
    };

    const handleLevelChange = (newLevel: Level) => {
        setLevel(newLevel);
        setResult(null);
        setError(false);
    };

    const handleProvinceChange = (selectedProvince: string) => {
        setProvince(selectedProvince);
        setResult(null);
        setError(false);

        if (selectedProvince === "CUSTOM") {
            setTkadEnabled(customWeights.enableTkad);
            return;
        }

        const weights = PROVINCE_WEIGHTS[selectedProvince];

        setTkadEnabled(weights?.enableTkad ?? false);
    };

    const handleCustomWeightChange = (newWeights: CustomWeights) => {
        setCustomWeights(newWeights);

        if (province === "CUSTOM") {
            setTkadEnabled(newWeights.enableTkad);
        }

        setResult(null);
        setError(false);
    };

    const isValidScore = (value: string): boolean => {
        if (value.trim() === "") {
            return false;
        }

        const number = Number(value);

        return !Number.isNaN(number) && number >= 0 && number <= 100;
    };

    const getWeights = () => {
        if (province === "CUSTOM") {
            return {
                tka: customWeights.tka,
                rapot: customWeights.rapot,
                tkad: customWeights.tkad,
                enableTkad: customWeights.enableTkad,
            };
        }

        const weights = PROVINCE_WEIGHTS[province];

        if (!weights) {
            throw new Error(`No weights configured for province: ${province}`);
        }

        return weights;
    };

    const calculateWithoutTkad = (
        tka: number,
        rapotValue: number,
        tkaWeight: number,
        rapotWeight: number
    ) => {
        const tkaAverage = tka / 2;

        return (
            tkaAverage * (tkaWeight / 100) +
            rapotValue * (rapotWeight / 100)
        );
    };

    const calculateWithTkad = (
        tka: number,
        tkad: number,
        rapotValue: number,
        tkaWeight: number,
        tkadWeight: number,
        rapotWeight: number,
        tkadSubjectCount: number
    ) => {
        const tkaAverage = tka / 2;
        const tkadAverage = tkad / tkadSubjectCount;

        return (
            tkaAverage * (tkaWeight / 100) +
            tkadAverage * (tkadWeight / 100) +
            rapotValue * (rapotWeight / 100)
        );
    };

    const handleCalculate = () => {
        if (!province) {
            setError(true);
            setResult(null);
            return;
        }

        const tkaValid = tkaScores.every((score) =>
            isValidScore(score.value)
        );

        const rapotValid = isValidScore(rapot);

        const tkadValid =
            !tkadEnabled ||
            activeTkadScores.every((score) =>
                isValidScore(score.value)
            );

        if (!tkaValid || !rapotValid || !tkadValid) {
            setError(true);
            setResult(null);
            return;
        }

        const tka = calculateTKA({
            indonesian: Number(
                tkaScores.find((score) => score.id === "indonesian")?.value
            ),
            mathematics: Number(
                tkaScores.find((score) => score.id === "mathematics")?.value
            ),
        });

        const rapotValue = Number(rapot);

        let tkadValue: number | undefined;

        if (tkadEnabled) {
            tkadValue = calculateTKAD({
                english:
                    level === "smp-sma"
                        ? Number(
                              tkadScores.find(
                                  (score) => score.id === "english"
                              )?.value
                          )
                        : undefined,
                science: Number(
                    tkadScores.find(
                        (score) => score.id === "science"
                    )?.value
                ),
            });
        }

        const weights = getWeights();
        const tkadSubjectCount = level === "sd-smp" ? 1 : 2;

        const final =
            tkadEnabled && tkadValue !== undefined
                ? calculateWithTkad(
                      tka,
                      tkadValue,
                      rapotValue,
                      weights.tka,
                      weights.tkad,
                      weights.rapot,
                      tkadSubjectCount
                  )
                : calculateWithoutTkad(
                      tka,
                      rapotValue,
                      weights.tka,
                      weights.rapot
                  );

        const tkaAverage = tka / 2;
        const tkaContribution =
            tkaAverage * (weights.tka / 100);

        const rapotContribution =
            rapotValue * (weights.rapot / 100);

        const breakdown: CalculationResult["breakdown"] = {
            tka: {
                raw: tka,
                weight: weights.tka,
                contribution: tkaContribution,
            },
            rapot: {
                raw: rapotValue,
                weight: weights.rapot,
                contribution: rapotContribution,
            },
        };

        if (tkadEnabled && tkadValue !== undefined) {
            const tkadAverage = tkadValue / tkadSubjectCount;

            breakdown.tkad = {
                raw: tkadValue,
                weight: weights.tkad,
                contribution:
                    tkadAverage * (weights.tkad / 100),
            };
        }

        setResult({
            tka,
            tkad: tkadValue,
            rapot: rapotValue,
            final: Math.min(100, Math.max(0, final)),
            breakdown,
        });

        setError(false);
    };

    return {
        level,
        province,
        tkaScores,
        activeTkadScores,
        rapot,
        customWeights,
        tkadEnabled,
        result,
        error,

        setTkaScores,
        setTkadScores,
        setRapot,

        handleScoreChange,
        handleLevelChange,
        handleProvinceChange,
        handleCustomWeightChange,
        handleCalculate,
    };
}