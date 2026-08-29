import { MapPin } from "lucide-react";

interface TkadToggleProps {
    enabled: boolean;
    onChange: (enabled: boolean) => void;
    title: string;
    description: string;
}

export default function TkadToggle({
    enabled,
    onChange,
    title,
    description,
}: TkadToggleProps) {
    return (
        <section className="
            flex items-center justify-between gap-5
            rounded-2xl
            border border-slate-200
            bg-white
            p-5
            shadow-sm
            transition-all duration-300
            hover:border-slate-300/80
            dark:border-slate-800
            dark:bg-slate-900
            dark:hover:border-slate-700/80
        ">
            <div className="flex min-w-0 items-start gap-4">
                <div className="
                    flex h-10 w-10
                    shrink-0 items-center justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                    transition-transform duration-300
                    dark:bg-blue-500/10
                    dark:text-blue-400
                ">
                    <MapPin size={18} strokeWidth={2.2} />
                </div>

                <div className="space-y-0.5">
                    <h3 className="font-bold tracking-tight text-slate-900 dark:text-white">
                        {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                        {description}
                    </p>
                </div>
            </div>

            <button
                type="button"
                role="switch"
                aria-checked={enabled}
                onClick={() => onChange(!enabled)}
                className={`
                    relative h-6 w-11
                    shrink-0 rounded-full
                    transition-colors duration-200 outline-none
                    ${enabled ? "bg-blue-600" : "bg-slate-200 dark:bg-slate-800"}
                `}
            >
                <span className={`
                    absolute top-1
                    h-4 w-4 rounded-full
                    bg-white shadow-sm
                    transition-transform duration-200
                    ${enabled ? "translate-x-1" : "translate-x-[-1rem]"}
                `} />
            </button>
        </section>
    );
}
