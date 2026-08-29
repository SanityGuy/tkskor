import {NavLink} from "react-router-dom";

export default function NavItem({
    to,
    icon,
    label,
}: {
    to: string;
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => `
                flex items-center gap-2
                rounded-xl px-3.5 py-2
                text-sm font-semibold
                transition-all duration-200

                ${
                    isActive
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
                        : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                }
            `}
        >
            {icon}
            {label}
        </NavLink>
    );
}
