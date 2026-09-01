import { type CalculationResult } from "../../hooks/useCalculator";

interface ResultCardProps {
    result: CalculationResult;
    title: string;
}

export function ResultCard({ result, title }: ResultCardProps) {
    return (
        <div className="rounded-2xl border border-blue-200/80 bg-gradient-to-b from-blue-50/80 to-indigo-50/30 p-5 text-center shadow-sm dark:border-blue-900/50 dark:from-blue-950/30 dark:to-slate-900 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 sm:text-sm">
            {title}
        </p>
        
        <p className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {result.final.toFixed(2)}
        </p>
        
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 border-t border-blue-100 pt-4 text-xs font-medium text-slate-600 dark:border-blue-900/40 dark:text-slate-300 sm:gap-4 sm:text-sm">
            <span className="rounded-md bg-white/80 px-2.5 py-1 shadow-xs dark:bg-slate-800/80">
            TKA: <strong className="text-slate-900 dark:text-white">{result.tka}</strong>
            </span>
            <span className="rounded-md bg-white/80 px-2.5 py-1 shadow-xs dark:bg-slate-800/80">
            Rapor: <strong className="text-slate-900 dark:text-white">{result.rapot}</strong>
            </span>
            {result.tkad !== undefined && (
            <span className="rounded-md bg-white/80 px-2.5 py-1 shadow-xs dark:bg-slate-800/80">
                TKAD: <strong className="text-slate-900 dark:text-white">{result.tkad}</strong>
            </span>
            )}
        </div>
        </div>
    );
}