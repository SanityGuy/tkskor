import { useRef, type KeyboardEvent } from "react";

export interface ReportCardScores {
    indonesian: string[];
    mathematics: string[];
    english: string[];
    science: string[];
}

interface AdvancedReportCardProps {
    title?: string;
    description?: string;
    isTkadActive: boolean;
    isTkadForced?: boolean;
    onTkadToggleChange?: (active: boolean) => void;
    scores: ReportCardScores;
    onChangeScores: (scores: ReportCardScores) => void;
    dict?: any;
}

export default function AdvancedReportCard({
    title,
    description,
    isTkadActive,
    isTkadForced = false,
    onTkadToggleChange,
    scores,
    onChangeScores,
    dict,
}: AdvancedReportCardProps) {
    const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

    const baseSubjects = [
        { key: "indonesian", label: dict?.calculator?.subjects?.indonesian || "Bahasa Indonesia" },
        { key: "mathematics", label: dict?.calculator?.subjects?.mathematics || "Mathematics" },
    ];

    const tkadSubjects = [
        { key: "english", label: dict?.calculator?.subjects?.english || "English" },
        { key: "science", label: dict?.calculator?.subjects?.science || "Science" },
    ];

    const activeSubjects = isTkadActive
        ? [...baseSubjects, ...tkadSubjects]
        : baseSubjects;

    const semesters = [1, 2, 3, 4, 5];

    const getSubjectAverage = (subjectKey: keyof ReportCardScores): string => {
        const vals = scores[subjectKey]
        .map((v) => parseFloat(v))
        .filter((v) => !isNaN(v));
        if (vals.length === 0) return "-";
        const sum = vals.reduce((a, b) => a + b, 0);
        return (sum / vals.length).toFixed(2);
    };

    const getOverallAverage = (): string => {
        let totalSum = 0;
        let count = 0;

        activeSubjects.forEach((sub) => {
        const subjectKey = sub.key as keyof ReportCardScores;
        scores[subjectKey].forEach((v) => {
            const num = parseFloat(v);
            if (!isNaN(num)) {
            totalSum += num;
            count++;
            }
        });
        });

        if (count === 0) return "0.00";
        return (totalSum / count).toFixed(2);
    };

    const handleInputChange = (
        subjectKey: keyof ReportCardScores,
        semIndex: number,
        value: string
    ) => {
        if (value !== "" && !/^\d*\.?\d*$/.test(value)) return;
        if (parseFloat(value) > 100) return;

        const updated = { ...scores };
        const newArr = [...updated[subjectKey]];
        newArr[semIndex] = value;
        updated[subjectKey] = newArr;

        onChangeScores(updated);
    };

    const handleKeyDown = (
        e: KeyboardEvent<HTMLInputElement>,
        subjectIdx: number,
        semIdx: number
    ) => {
        let targetSubject = subjectIdx;
        let targetSem = semIdx;

        if (e.key === "ArrowRight") {
        if (semIdx < 4) targetSem = semIdx + 1;
        } else if (e.key === "ArrowLeft") {
        if (semIdx > 0) targetSem = semIdx - 1;
        } else if (e.key === "ArrowDown" || e.key === "Enter") {
        if (subjectIdx < activeSubjects.length - 1) {
            targetSubject = subjectIdx + 1;
            e.preventDefault();
        }
        } else if (e.key === "ArrowUp") {
        if (subjectIdx > 0) {
            targetSubject = subjectIdx - 1;
            e.preventDefault();
        }
        } else {
        return;
        }

        const nextKey = `${activeSubjects[targetSubject].key}-${targetSem}`;
        inputRefs.current[nextKey]?.focus();
        inputRefs.current[nextKey]?.select();
    };

    return (
        <section className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-xs transition-all dark:border-slate-800 dark:bg-slate-900 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-0.5">
            <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl">
                {title || dict?.calculator?.advancedReportTitle || "Report Card Scores"}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                {description || dict?.calculator?.advancedReportDescription || "Enter grades for each semester across required subjects."}
            </p>
            </div>

            {onTkadToggleChange && (
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/70 p-2 dark:border-slate-800 dark:bg-slate-800/40 sm:self-auto">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 sm:text-sm">
                {dict?.calculator?.tkadToggle || "Include TKAD"}
                </span>
                <button
                type="button"
                role="switch"
                disabled={isTkadForced}
                aria-checked={isTkadActive}
                onClick={() => !isTkadForced && onTkadToggleChange(!isTkadActive)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    isTkadActive ? "bg-blue-600 dark:bg-blue-500" : "bg-slate-300 dark:bg-slate-700"
                } ${isTkadForced ? "opacity-60 cursor-not-allowed" : ""}`}
                >
                <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-xs transition duration-200 ease-in-out ${
                    isTkadActive ? "translate-x-5" : "translate-x-0"
                    }`}
                />
                </button>
            </div>
            )}
        </div>

        <div className="mt-5 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[500px] text-left text-xs sm:text-sm">
            <thead>
                <tr className="border-b border-slate-200 uppercase tracking-wider text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <th scope="col" className="pb-3 pr-2 font-semibold">
                    {dict?.calculator?.tableHeaders?.subject || "Subject"}
                </th>
                {semesters.map((sem) => (
                    <th key={sem} scope="col" className="px-1.5 pb-3 text-center font-semibold">
                    Sem {sem}
                    </th>
                ))}
                <th scope="col" className="pb-3 pl-2 text-right font-semibold">
                    {dict?.calculator?.tableHeaders?.average || "Avg"}
                </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {activeSubjects.map((subject, subIdx) => {
                const subjectKey = subject.key as keyof ReportCardScores;
                const avg = getSubjectAverage(subjectKey);

                return (
                    <tr key={subject.key} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                    <td className="py-2.5 pr-2 font-medium text-slate-900 whitespace-nowrap dark:text-slate-100">
                        {subject.label}
                    </td>
                    {semesters.map((sem, semIdx) => {
                        const inputId = `${subject.key}-${semIdx}`;
                        return (
                        <td key={sem} className="p-1 text-center">
                            <input
                            ref={(el) => {
                                inputRefs.current[inputId] = el;
                            }}
                            type="text"
                            inputMode="decimal"
                            maxLength={5}
                            placeholder="0"
                            value={scores[subjectKey][semIdx] || ""}
                            onChange={(e) =>
                                handleInputChange(subjectKey, semIdx, e.target.value)
                            }
                            onKeyDown={(e) => handleKeyDown(e, subIdx, semIdx)}
                            className="h-10 w-12 sm:w-14 rounded-lg border border-slate-200 bg-slate-50 text-center text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-300 transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-600 dark:focus:border-blue-400 dark:focus:bg-slate-900"
                            />
                        </td>
                        );
                    })}
                    <td className="py-2.5 pl-2 text-right font-bold text-blue-600 dark:text-blue-400">
                        {avg}
                    </td>
                    </tr>
                );
                })}
            </tbody>
            </table>
        </div>

        <div className="mt-5 flex flex-col justify-between gap-3 border-t border-slate-200 pt-3.5 dark:border-slate-800 sm:flex-row sm:items-center">
            <p className="hidden text-xs text-slate-400 dark:text-slate-500 sm:block">
            💡 <span className="font-semibold">Hotkeys:</span> Use <kbd className="rounded border border-slate-300 bg-slate-100 px-1 py-0.5 text-[10px] dark:border-slate-700 dark:bg-slate-800">↑</kbd> <kbd className="rounded border border-slate-300 bg-slate-100 px-1 py-0.5 text-[10px] dark:border-slate-700 dark:bg-slate-800">↓</kbd> <kbd className="rounded border border-slate-300 bg-slate-100 px-1 py-0.5 text-[10px] dark:border-slate-700 dark:bg-slate-800">←</kbd> <kbd className="rounded border border-slate-300 bg-slate-100 px-1 py-0.5 text-[10px] dark:border-slate-700 dark:bg-slate-800">→</kbd> or <kbd className="rounded border border-slate-300 bg-slate-100 px-1 py-0.5 text-[10px] dark:border-slate-700 dark:bg-slate-800">Enter</kbd>
            </p>
            <div className="flex items-center justify-between gap-2 sm:justify-end">
            <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                {dict?.calculator?.overallAverage || "Overall Average"}:
            </span>
            <span className="rounded-xl bg-blue-50 px-3 py-1 text-sm sm:text-base font-extrabold text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                {getOverallAverage()}
            </span>
            </div>
        </div>
        </section>
    );
}