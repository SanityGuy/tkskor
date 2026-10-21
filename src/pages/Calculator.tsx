import { useState, useEffect } from "react";
import { Calculator as CalculatorIcon, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useCalculator } from "../hooks/useCalculator";

import WarningCard from "../components/calculator/WarningCard";
import ScoreCard from "../components/calculator/ScoreCard";
import ProvinceSelect from "../components/calculator/ProvinceSelect";
import RapotCard from "../components/calculator/RapotCard";
import CustomWeightCard from "../components/calculator/CustomWeightCard";
import { LevelSelector } from "../components/calculator/LevelSelector";
import { ResultCard } from "../components/calculator/ResultCard";
import AdvancedToggle from "../components/calculator/AdvancedToggle";
import AdvancedReportCard, { type ReportCardScores } from "../components/calculator/AdvancedRapotCard";

export default function Calculator() {
    const { t } = useLanguage();
    const calc = useCalculator();

    const [isAdvancedMode, setIsAdvancedMode] = useState(false);
    const [isTkadActive, setIsTkadActive] = useState(false);

    const [advancedScores, setAdvancedScores] = useState<ReportCardScores>({
        indonesian: ["", "", "", "", ""],
        mathematics: ["", "", "", "", ""],
        english: ["", "", "", "", ""],
        science: ["", "", "", "", ""],
    });

    const isYogyakarta = calc.province === "DIY";

    useEffect(() => {
        if (isYogyakarta) {
        setIsTkadActive(true);
        }
    }, [isYogyakarta]);

    useEffect(() => {
        if (!isAdvancedMode) return;

        const baseSubjects: (keyof ReportCardScores)[] = ["indonesian", "mathematics"];
        const tkadSubjects: (keyof ReportCardScores)[] = ["english", "science"];
        const activeSubjects = isTkadActive
        ? [...baseSubjects, ...tkadSubjects]
        : baseSubjects;

        let totalSum = 0;
        let count = 0;

        activeSubjects.forEach((subKey) => {
        advancedScores[subKey].forEach((val) => {
            const num = parseFloat(val);
            if (!isNaN(num)) {
            totalSum += num;
            count++;
            }
        });
        });

        if (count > 0) {
        calc.setRapot((totalSum / count).toFixed(2));
        } else {
        calc.setRapot("");
        }
    }, [advancedScores, isTkadActive, isAdvancedMode]);

    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-50 px-3.5 pb-16 pt-20 transition-colors duration-300 dark:bg-slate-950 sm:px-6 sm:pb-20 sm:pt-36">
        <div className="absolute left-1/2 top-0 -z-10 h-[280px] w-[90vw] -translate-x-1/2 bg-blue-500/10 blur-[100px] dark:bg-blue-500/[0.03] sm:h-[350px] sm:w-[600px]" />

        <div className="mx-auto max-w-3xl">
            <section className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-600 ring-1 ring-inset ring-blue-600/10 dark:bg-blue-500/10 dark:text-blue-400">
                <CalculatorIcon size={13} />
                {t.calculator.label}
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:mt-4 sm:text-5xl md:text-6xl">
                {t.calculator.title}
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base">
                {t.calculator.description}
            </p>
            </section>

            <section className="mt-6 sm:mt-8">
            <WarningCard title={t.warning.title} message={t.warning.message} />
            </section>

            <LevelSelector level={calc.level} onChange={calc.handleLevelChange} />

            {calc.error && (
            <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-xs font-medium text-red-600 dark:border-red-950 dark:bg-red-950/30 dark:text-red-400 sm:text-sm">
                {t.score.valid}
            </div>
            )}

            <section className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
            <ScoreCard
                title="TKA"
                description={t.calculator.tkaDescription}
                subjects={calc.tkaScores}
                onChange={(id, val) =>
                calc.handleScoreChange(calc.setTkaScores, id, val)
                }
            />

            <AdvancedToggle
                isAdvanced={isAdvancedMode}
                onChange={setIsAdvancedMode}
            />

            {isAdvancedMode ? (
                <AdvancedReportCard
                title={t.calculator.rapotTitle}
                description={t.calculator.rapotDescription}
                isTkadActive={isTkadActive}
                isTkadForced={isYogyakarta}
                onTkadToggleChange={setIsTkadActive}
                scores={advancedScores}
                onChangeScores={setAdvancedScores}
                dict={t}
                />
            ) : (
                <RapotCard
                title={t.calculator.rapotTitle}
                description={t.calculator.rapotDescription}
                value={calc.rapot}
                onChange={(val) => calc.setRapot(val)}
                />
            )}

            <ProvinceSelect
                province={calc.province}
                onChange={calc.handleProvinceChange}
                title={t.calculator.selectProvince}
                description={t.calculator.selectProvinceDescription}
                placeholder={t.calculator.selectProvincePlaceholder}
            />

            {calc.province === "CUSTOM" && (
                <CustomWeightCard
                weights={calc.customWeights}
                onChange={calc.handleCustomWeightChange}
                />
            )}

            {(calc.tkadEnabled || isTkadActive) && (
                <ScoreCard
                title="TKAD"
                description={t.calculator.tkadScoresDescription}
                subjects={calc.activeTkadScores}
                onChange={(id, val) =>
                    calc.handleScoreChange(calc.setTkadScores, id, val)
                }
                />
            )}

            <div className="relative group pt-2 pb-10">
                <button
                type="button"
                onClick={calc.handleCalculate}
                className="relative flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-2xl bg-blue-500 px-6 py-3.5 font-bold text-white shadow-lg transition-all duration-200 dark:bg-blue-600 active:scale-[0.98]"
                >
                <CalculatorIcon className="h-5 w-5" />
                <span className="text-sm tracking-wide sm:text-base">
                    {t.calculator.calculate}
                </span>
                <ArrowRight className="h-5 w-5" />
                </button>
            </div>

            {calc.result !== null && (
                <ResultCard result={calc.result} level={calc.level} />
            )}
            </section>
        </div>
        </main>
    );
}