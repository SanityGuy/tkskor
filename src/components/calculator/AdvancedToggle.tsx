import { Sparkles } from "lucide-react";

interface AdvancedToggleProps {
    isAdvanced: boolean;
    onChange: (isAdvanced: boolean) => void;
    label?: string;
    simpleLabel?: string;
    advancedLabel?: string;
}

export default function AdvancedToggle({
    isAdvanced,
    onChange,
    label = "Report Input Mode",
    simpleLabel = "Simple Average",
    advancedLabel = "5-Semester Grid",
}: AdvancedToggleProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-xs transition-all dark:border-slate-800 dark:bg-slate-900 sm:p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <Sparkles size={16} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                {label}
            </span>
            </div>

            <div className="relative inline-flex w-full rounded-xl bg-slate-100 p-1 dark:bg-slate-800 sm:w-auto">
            <button
                type="button"
                onClick={() => onChange(false)}
                className={`relative z-10 flex-1 px-3.5 py-1.5 text-center text-xs font-bold transition-colors duration-200 sm:flex-initial ${
                !isAdvanced
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
            >
                {simpleLabel}
            </button>

            <button
                type="button"
                onClick={() => onChange(true)}
                className={`relative z-10 flex-1 px-3.5 py-1.5 text-center text-xs font-bold transition-colors duration-200 sm:flex-initial ${
                isAdvanced
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
            >
                {advancedLabel}
            </button>

            <span
                className={`absolute inset-y-1 w-[calc(50%-4px)] rounded-lg bg-white shadow-xs transition-all duration-300 ease-out dark:bg-slate-900 ${
                isAdvanced ? "left-[calc(50%+2px)]" : "left-1"
                }`}
            />
            </div>
        </div>
        </div>
    );
}