import ScoreInput from "./ScoreInput";

interface ScoreCardProps {
    title: string;
    description?: string;
    subjects: {
        id: string;
        label: string;
        value: string;
    }[];
    onChange: (id: string, value: string) => void;
}

export default function ScoreCard({
    title,
    description,
    subjects,
    onChange,
}: ScoreCardProps) {
    return (
        <section className="
            w-full
            rounded-2xl
            border border-slate-200
            bg-white
            p-6
            shadow-sm
            transition-all duration-300
            hover:border-slate-300/80
            dark:border-slate-800
            dark:bg-slate-900
            dark:hover:border-slate-700/80
        ">
            <div className="space-y-0.5">
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {title}
                </h2>
                {description && (
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        {description}
                    </p>
                )}
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {subjects.map((subject) => (
                    <ScoreInput
                        key={subject.id}
                        label={subject.label}
                        value={subject.value}
                        onChange={(value) => onChange(subject.id, value)}
                    />
                ))}
            </div>
        </section>
    );
}
