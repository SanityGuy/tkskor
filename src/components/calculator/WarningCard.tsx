import { AlertTriangle } from "lucide-react";

interface WarningCardProps {
    title: string;
    message: string;
}

export default function WarningCard({
    title,
    message,
}: WarningCardProps) {
    return (
        <div className="
            group
            flex gap-4 
            rounded-2xl 
            border border-amber-200/80 
            bg-amber-50/30
            p-5 
            transition-all duration-300
            shadow-sm

            hover:-translate-y-0.5
            hover:border-amber-500
            hover:shadow-md
            hover:shadow-amber-500/5
            
            dark:border-amber-500/10 
            dark:bg-amber-500/[0.02]
            dark:hover:border-amber-500/40
        ">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 transition-transform duration-300 group-hover:scale-105">
                <AlertTriangle
                    size={18}
                    strokeWidth={2.2}
                />
            </div>
            <div>
                <h3 className="font-bold tracking-tight text-amber-950 dark:text-amber-200">
                    {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed font-medium text-amber-900/70 dark:text-slate-400">
                    {message}
                </p>
            </div>
        </div>
    );
}
