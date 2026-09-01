interface LevelSelectorProps {
    level: "sd-smp" | "smp-sma";
    onChange: (level: "sd-smp" | "smp-sma") => void;
}

export function LevelSelector({ level, onChange }: LevelSelectorProps) {
    return (
        <div className="mt-6 grid grid-cols-2 gap-1.5 rounded-xl bg-slate-200/70 p-1.5 dark:bg-slate-900/80">
        <button
            type="button"
            onClick={() => onChange("sd-smp")}
            className={`min-h-[44px] rounded-lg py-2.5 text-xs font-bold transition-all sm:text-sm active:scale-[0.98] ${
            level === "sd-smp"
                ? "bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-white"
                : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
        >
            SD → SMP
        </button>
        <button
            type="button"
            onClick={() => onChange("smp-sma")}
            className={`min-h-[44px] rounded-lg py-2.5 text-xs font-bold transition-all sm:text-sm active:scale-[0.98] ${
            level === "smp-sma"
                ? "bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-white"
                : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
        >
            SMP → SMA
        </button>
        </div>
    );
}