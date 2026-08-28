import {
    Calculator,
    House,
    Info,
    Moon,
    Sun,
} from "lucide-react";
import React from "react";

import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (
        <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">

            <nav className="
                mx-auto flex max-w-6xl items-center justify-between
                rounded-2xl border border-slate-200/70
                bg-white/80 px-4 py-3
                shadow-lg shadow-slate-200/20
                backdrop-blur-xl
                dark:border-slate-800/70
                dark:bg-slate-950/80
                dark:shadow-black/20
            ">

                {/* Logo */}

                <NavLink
                    to="/"
                    className="flex items-center gap-2"
                >

                    <span className="
                        text-lg font-bold tracking-tight
                        text-slate-900
                        dark:text-white
                    ">
                        TKSkor
                    </span>

                </NavLink>


                {/* Navigation */}

                <div className="
                    hidden items-center gap-1
                    md:flex
                ">

                    <NavItem
                        to="/"
                        icon={<House size={16} />}
                        label="Home"
                    />

                    <NavItem
                        to="/calculator"
                        icon={<Calculator size={16} />}
                        label="Calculator"
                    />

                    <NavItem
                        to="/about"
                        icon={<Info size={16} />}
                        label="About"
                    />

                </div>


                {/* Actions */}

                <div className="flex items-center gap-2">

                    {/* Language */}

                    <button className="
                        rounded-xl px-3 py-2
                        text-xs font-semibold
                        text-slate-500
                        transition
                        hover:bg-slate-100
                        hover:text-slate-900
                        dark:text-slate-400
                        dark:hover:bg-slate-800
                        dark:hover:text-white
                    ">
                        ID
                    </button>


                    {/* Theme */}

                    <button className="
                        flex h-9 w-9 items-center justify-center
                        rounded-xl
                        text-slate-500
                        transition
                        hover:bg-slate-100
                        hover:text-slate-900
                        dark:text-slate-400
                        dark:hover:bg-slate-800
                        dark:hover:text-white
                    ">

                        <Sun
                            size={17}
                            className="hidden dark:block"
                        />

                        <Moon
                            size={17}
                            className="block dark:hidden"
                        />

                    </button>

                </div>

            </nav>

        </header>
    );
}


function NavItem({
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
                rounded-xl px-3 py-2
                text-sm font-medium
                transition-all duration-200

                ${
                    isActive
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400"
                        : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                }
            `}
        >
            {icon}
            {label}
        </NavLink>
    );
}