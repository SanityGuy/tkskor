import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { calculateTKA, calculateTKAD, calculateFinalScore } from "../lib/calculator";
import { type CustomWeights } from "../components/calculator/CustomWeightCard";

export interface ScoreSubject {
    id: string;
    label: string;
    value: string;
}

export interface CalculationResult {
    tka: number;
    tkad?: number;
    rapot: number;
    final: number;
}

export function useCalculator() {
    const { t } = useLanguage();
    const [level, setLevel] = useState<"sd-smp" | "smp-sma">("smp-sma");
    const [tkadEnabled, setTkadEnabled] = useState(false);
    const [province, setProvince] = useState<string>("");

    const [tkaScores, setTkaScores] = useState<ScoreSubject[]>([
        { id: "indonesian", label: t.calculator.subjects.indonesian, value: "" },
        { id: "mathematics", label: t.calculator.subjects.mathematics, value: "" },
    ]);

    const [tkadScores, setTkadScores] = useState<ScoreSubject[]>([
        { id: "english", label: t.calculator.subjects.english, value: "" },
        { id: "science", label: t.calculator.subjects.science, value: "" },
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
        level === "sd-smp" ? tkadScores.filter((s) => s.id === "science") : tkadScores;

    const handleScoreChange = (
        setScores: React.Dispatch<React.SetStateAction<ScoreSubject[]>>,
        id: string,
        value: string
    ) => {
        setScores((current) =>
        current.map((subject) => (subject.id === id ? { ...subject, value } : subject))
        );
        setResult(null);
        setError(false);
    };

    const handleLevelChange = (newLevel: "sd-smp" | "smp-sma") => {
        setLevel(newLevel);
        setResult(null);
        setError(false);
    };

    const handleProvinceChange = (selectedProvince: string) => {
        setProvince(selectedProvince);
        setResult(null);
        setError(false);

        if (selectedProvince === "DIY") {
        setTkadEnabled(true);
        } else if (selectedProvince === "CUSTOM") {
        setTkadEnabled(customWeights.enableTkad);
        } else {
        setTkadEnabled(false);
        }
    };

    const handleCustomWeightChange = (newWeights: CustomWeights) => {
        setCustomWeights(newWeights);
        if (province === "CUSTOM") {
        setTkadEnabled(newWeights.enableTkad);
        }
        setResult(null);
    };

    const isValidScore = (val: string): boolean => {
        if (val.trim() === "") return false;
        const num = Number(val);
        return !Number.isNaN(num) && num >= 0 && num <= 100;
    };

    const handleCalculate = () => {
        const tkaValid = tkaScores.every((s) => isValidScore(s.value));
        const rapotValid = isValidScore(rapot);
        const tkadValid = !tkadEnabled || activeTkadScores.every((s) => isValidScore(s.value));

        if (!tkaValid || !rapotValid || !tkadValid) {
        setError(true);
        setResult(null);
        return;
        }

        const tka = calculateTKA({
        indonesian: Number(tkaScores.find((s) => s.id === "indonesian")?.value),
        mathematics: Number(tkaScores.find((s) => s.id === "mathematics")?.value),
        });

        const rapotValue = Number(rapot);
        let tkadValue: number | undefined;

        if (tkadEnabled) {
        tkadValue = calculateTKAD({
            english: level === "smp-sma" ? Number(tkadScores.find((s) => s.id === "english")?.value) : undefined,
            science: Number(tkadScores.find((s) => s.id === "science")?.value),
        });
        }

        let final: number;
        if (province === "CUSTOM") {
        const tkaWeighted = (tka * customWeights.tka) / 100;
        const rapotWeighted = (rapotValue * customWeights.rapot) / 100;
        const tkadWeighted = tkadEnabled && tkadValue ? (tkadValue * customWeights.tkad) / 100 : 0;
        final = tkaWeighted + rapotWeighted + tkadWeighted;
        } else {
        final = calculateFinalScore(tka, rapotValue, level, tkadValue);
        }

        setResult({ tka, tkad: tkadValue, rapot: rapotValue, final });
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