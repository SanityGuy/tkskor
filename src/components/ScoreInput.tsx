import { useLanguage } from "../contexts/LanguageContext";

interface ScoreInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

export default function ScoreInput({
    label,
    value,
    onChange,
}: ScoreInputProps) {
    const { t } = useLanguage();
    const numericValue = Number(value);

    const isOverLimit =
        value !== "" &&
        !Number.isNaN(numericValue) &&
        numericValue > 100;

    const isBelowZero =
        value !== "" &&
        !Number.isNaN(numericValue) &&
        numericValue < 0;

    const hasError =
        isOverLimit || isBelowZero;

    return (
        <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {label}
            </label>

            <input
                type="number"
                min="0"
                max="100"
                step="0.01"
                value={value}
                onChange={(event) =>
                    onChange(event.target.value)
                }
                placeholder="0.00"
                aria-invalid={hasError}
                className={`
                    w-full rounded-xl
                    border
                    bg-slate-50
                    px-4 py-3
                    text-sm font-semibold
                    text-slate-900
                    outline-none
                    transition-all duration-200

                    placeholder:text-slate-400

                    dark:bg-slate-950
                    dark:text-white
                    dark:placeholder:text-slate-600

                    ${
                        hasError
                            ? `
                                border-red-400
                                focus:border-red-500
                                focus:ring-4
                                focus:ring-red-500/10
                                dark:border-red-500/60
                            `
                            : `
                                border-slate-200
                                focus:border-blue-500
                                focus:bg-white
                                focus:ring-4
                                focus:ring-blue-500/5

                                dark:border-slate-800
                                dark:focus:border-blue-500
                                dark:focus:bg-slate-950
                            `
                    }
                `}
            />

            {isOverLimit && (
                <p className="text-xs font-medium text-red-500 dark:text-red-400">
                    {t.score.overlimit}
                </p>
            )}

            {isBelowZero && (
                <p className="text-xs font-medium text-red-500 dark:text-red-400">
                    {t.score.underlimit}
                </p>
            )}
        </div>
    );
}