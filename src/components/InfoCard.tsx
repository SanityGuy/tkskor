import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface InfoCardProps {
    number: string;
    title: string;
    description: string;
    button: boolean;
    buttonlabel?: string;
    link?: string;
}

export default function InfoCard({
    number,
    title,
    description,
    button,
    buttonlabel,
    link,
}: InfoCardProps) {
    const isExternal = link?.startsWith("http") || link?.startsWith("https");
    const targetLink = link || "/";

    const buttonStyles = "mt-auto inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98]";

    return (
        <div
            className="
                group
                flex flex-col h-full
                rounded-2xl
                border border-slate-200
                bg-white p-6
                text-left
                shadow-sm
                transition-all duration-300

                hover:-translate-y-1
                hover:shadow-lg
                hover:shadow-blue-500/5
                hover:border-blue-500
                dark:hover:border-blue-400/50

                dark:border-slate-800
                dark:bg-slate-900
            "
        >
            <span
                className="
                    text-sm font-bold tracking-wider
                    text-blue-600
                    dark:text-blue-400
                "
            >
                {number}
            </span>

            <h3
                className="
                    mt-4 text-xl font-bold tracking-tight
                    text-slate-900
                    dark:text-white
                "
            >
                {title}
            </h3>

            <p
                className="
                    mt-2 mb-6 leading-relaxed text-sm
                    text-slate-500
                    dark:text-slate-400
                "
            >
                {description}
            </p>

            {button && (
                isExternal ? (
                    <a
                        href={targetLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonStyles}
                    >
                        {buttonlabel}
                        <ArrowUpRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                ) : (
                    <Link
                        to={targetLink}
                        className={buttonStyles}
                    >
                        {buttonlabel}
                    </Link>
                )
            )}
        </div>
    );
}
