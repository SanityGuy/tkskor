import { Calculator, ChevronDown } from "lucide-react";
import { useState } from "react";
import { type CalculationResult } from "../../types/calculator";
import { useLanguage } from "../../contexts/LanguageContext";

interface ResultCardProps {
    result: CalculationResult;
    level?: "sd-smp" | "smp-sma";
}

export function ResultCard({
    result,
    level = "smp-sma",
}: ResultCardProps) {
    const [showDetails, setShowDetails] = useState(true);
    const { t } = useLanguage();

    const hasTkad = result.tkad !== undefined && result.breakdown.tkad !== undefined;
    const subjectCount = level === "sd-smp" ? hasTkad ? 3 : 2 : hasTkad ? 4 : 2;

    const rawExamTotal = result.tka + (result.tkad ?? 0);
    const rawExamMax = subjectCount * 100;
    const tkaAverage = result.tka / 2;

    const rapotContribution = result.breakdown.rapot.contribution;
    const tkaContribution = result.breakdown.tka.contribution;
    const tkadContribution = result.breakdown.tkad?.contribution ?? 0;

    const withoutTkad =
        tkaAverage * (result.breakdown.tka.weight / 100) +
        result.rapot * (result.breakdown.rapot.weight / 100);

    const totalAllSubjects = rawExamTotal;

    return (
        <div className="overflow-hidden rounded-2xl border border-blue-200/80 bg-gradient-to-b from-blue-50/80 to-indigo-50/30 shadow-sm dark:border-blue-900/50 dark:from-blue-950/30 dark:to-slate-900">
            <div className="p-5 text-center sm:p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 sm:text-sm">
                    {t.result.title}
                </p>

                <p className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                    {result.final.toFixed(2)}
                    <span className="text-sm font-semibold text-slate-400 dark:text-slate-500">
                        {" "} / 100
                    </span>
                </p>

                <p className="mt-4 text-[11px] font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                    {t.result.orTotal}
                </p>

                <p className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                    {totalAllSubjects.toFixed(2)}
                    <span className="text-sm font-semibold text-slate-400 dark:text-slate-500">
                        {" "}
                        / {rawExamMax}
                    </span>
                </p>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    <div className="rounded-xl border border-blue-100 bg-white/70 p-3 dark:border-blue-900/40 dark:bg-slate-800/60">
                        <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                            {hasTkad ? t.result.tkaTkad : t.result.tka}
                        </p>

                        <p className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white">
                            {rawExamTotal}
                            <span className="text-sm font-semibold text-slate-400 dark:text-slate-500">
                                {" "}
                                / {rawExamMax}
                            </span>
                        </p>
                    </div>

                    <div className="rounded-xl border border-blue-100 bg-white/70 p-3 dark:border-blue-900/40 dark:bg-slate-800/60">
                        <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                            {t.result.report}
                        </p>

                        <p className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white">
                            {result.rapot.toFixed(2)}
                            <span className="text-sm font-semibold text-slate-400 dark:text-slate-500">
                                {" "}
                                / 100
                            </span>
                        </p>
                    </div>
                </div>

                {hasTkad && (
                    <div className="mt-3 rounded-xl border border-blue-100 bg-white/70 p-3 dark:border-blue-900/40 dark:bg-slate-800/60">
                        <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                            {t.result.withoutTkad}
                        </p>

                        <p className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white">
                            {withoutTkad.toFixed(2)}
                            <span className="text-sm font-semibold text-slate-400 dark:text-slate-500">
                                {" "}
                                / 100
                            </span>
                        </p>
                    </div>
                )}
            </div>

            <div className="border-t border-blue-100/80 dark:border-blue-900/40">
                <button
                    type="button"
                    onClick={() => setShowDetails((current) => !current)}
                    className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors hover:bg-white/40 dark:hover:bg-slate-800/30 sm:px-6"
                >
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                            <Calculator size={16} strokeWidth={2.2} />
                        </div>

                        <span className="text-sm font-bold text-slate-800 dark:text-slate-100">
                            {t.result.calculation}
                        </span>
                    </div>

                    <ChevronDown
                        size={18}
                        className={`text-slate-400 transition-transform ${
                            showDetails ? "rotate-180" : ""
                        }`}
                    />
                </button>

                {showDetails && (
                    <div className="space-y-4 px-5 pb-5 sm:px-6 sm:pb-6">
                        <div className="grid gap-2">
                            <div className="flex items-center justify-between rounded-lg bg-white/60 px-3 py-2.5 text-sm dark:bg-slate-800/50">
                                <span className="text-slate-500 dark:text-slate-400">
                                    {t.result.tka}
                                </span>

                                <span className="font-bold text-slate-800 dark:text-slate-100">
                                    {result.tka} / 200
                                </span>
                            </div>

                            {hasTkad && (
                                <div className="flex items-center justify-between rounded-lg bg-white/60 px-3 py-2.5 text-sm dark:bg-slate-800/50">
                                    <span className="text-slate-500 dark:text-slate-400">
                                        {t.result.tkad}
                                    </span>

                                    <span className="font-bold text-slate-800 dark:text-slate-100">
                                        {result.tkad} /{" "}
                                        {level === "sd-smp" ? 100 : 200}
                                    </span>
                                </div>
                            )}

                            <div className="flex items-center justify-between rounded-lg bg-white/60 px-3 py-2.5 text-sm dark:bg-slate-800/50">
                                <span className="text-slate-500 dark:text-slate-400">
                                    {t.result.report}
                                </span>

                                <span className="font-bold text-slate-800 dark:text-slate-100">
                                    {result.rapot.toFixed(2)}
                                </span>
                            </div>
                        </div>

                        <div className="rounded-xl border border-blue-100 bg-white/60 p-4 dark:border-blue-900/40 dark:bg-slate-800/40">
                            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                                {t.result.weightedCalculation}
                            </p>

                            <div className="space-y-2 text-sm">
                                <div className="flex items-start justify-between gap-4">
                                    <span className="text-slate-500 dark:text-slate-400">
                                        {t.result.tkaAverage} ×{" "}
                                        {result.breakdown.tka.weight}%
                                    </span>

                                    <span className="text-right font-semibold text-slate-800 dark:text-slate-100">
                                        {tkaAverage.toFixed(2)}{" "}×{" "}
                                        {(result.breakdown.tka.weight / 100).toFixed(2)}{" = "}
                                        {tkaContribution.toFixed(2)}
                                    </span>
                                </div>

                                {hasTkad && (
                                    <div className="flex items-start justify-between gap-4">
                                        <span className="text-slate-500 dark:text-slate-400">
                                            {t.result.tkadAverage} ×{" "}
                                            {result.breakdown.tkad!.weight}%
                                        </span>

                                        <span className="text-right font-semibold text-slate-800 dark:text-slate-100">
                                            {(result.tkad! / (level === "sd-smp" ? 1 : 2)).toFixed(2)}{" "}×{" "}
                                            {(result.breakdown.tkad!.weight / 100).toFixed(2)}{" = "}
                                            {tkadContribution.toFixed(2)}
                                        </span>
                                    </div>
                                )}

                                <div className="flex items-start justify-between gap-4">
                                    <span className="text-slate-500 dark:text-slate-400">
                                        {t.result.report} ×{" "}
                                        {result.breakdown.rapot.weight}%
                                    </span>

                                    <span className="text-right font-semibold text-slate-800 dark:text-slate-100">
                                        {result.rapot.toFixed(2)}{" "}×{" "}
                                        {(result.breakdown.rapot.weight / 100).toFixed(2)}{" = "}
                                        {rapotContribution.toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            <div className="my-3 border-t border-slate-200 dark:border-slate-700" />

                            <div className="flex items-center justify-between gap-4">
                                <span className="font-bold text-slate-700 dark:text-slate-200">
                                    {t.result.finalScore}
                                </span>

                                <span className="text-lg font-extrabold text-blue-600 dark:text-blue-400">
                                    {(tkaContribution + tkadContribution + rapotContribution).toFixed(2)} / 100
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}