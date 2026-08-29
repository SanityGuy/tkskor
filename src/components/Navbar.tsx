import { Calculator, House, Info, Moon, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../contexts/LanguageContext";
import { GB, ID } from "country-flag-icons/react/3x2";
import NavItem from "./NavItem";

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 transition-colors duration-200">
                <nav className="
                    mx-auto flex max-w-6xl items-center justify-between
                    rounded-2xl border border-slate-200/70
                    bg-white/80 px-4 py-2.5 md:py-3
                    shadow-lg shadow-slate-200/20
                    backdrop-blur-xl
                    dark:border-slate-800/70
                    dark:bg-slate-950/80
                    dark:shadow-black/20
                ">
                    <NavLink to="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
                        <img src="/android-chrome-192x192.png" alt="TKSkor Logo" className="h-8 w-8 object-contain" />
                        <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">TKSkor</span>
                    </NavLink>

                    <div className="hidden items-center gap-2 md:flex">
                        <NavItem to="/" icon={<House size={16} />} label={t.navbar.home} />
                        <NavItem to="/calculator" icon={<Calculator size={16} />} label={t.navbar.calculator} />
                        <NavItem to="/about" icon={<Info size={16} />} label={t.navbar.about} />
                    </div>

                    <div className="flex items-center gap-1.5">
                        <button 
                            onClick={() => setLanguage(language === "en" ? "id" : "en")}
                            className="
                                flex items-center gap-2
                                rounded-xl px-3 py-2
                                text-xs font-bold tracking-wide
                                text-slate-600
                                transition-all duration-200
                                hover:bg-slate-100
                                hover:text-slate-900
                                dark:text-slate-300
                                dark:hover:bg-slate-800
                                dark:hover:text-white
                                active:scale-95
                        ">
                            {language === "en" ? (
                                <>
                                    <GB title="English" className="h-3.5 w-auto rounded-sm object-cover shadow-sm" />
                                    <span>EN</span>
                                </>
                            ) : (
                                <>
                                    <ID title="Indonesian" className="h-3.5 w-auto rounded-sm object-cover shadow-sm" />
                                    <span>ID</span>
                                </>
                            )}
                        </button>

                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="
                                group
                                flex h-9 w-9 items-center justify-center
                                rounded-xl
                                text-slate-500
                                transition-all duration-200
                                hover:bg-slate-100
                                hover:text-slate-900
                                dark:text-slate-400
                                dark:hover:bg-slate-800
                                dark:hover:text-white
                                active:scale-95
                            "
                        >
                            {theme === "dark" ? (
                                <Sun size={17} className="transition-transform duration-300 group-hover:rotate-45" />
                            ) : (
                                <Moon size={17} className="transition-transform duration-300 group-hover:-rotate-12" />
                            )}
                        </button>
                    </div>
                </nav>
            </header>

            <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/60 bg-white/90 p-2 pb-safe backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/90 md:hidden">
                <div className="mx-auto flex max-w-md items-center justify-around">
                    <MobileLink to="/" icon={<House size={20} />} label={t.navbar.home} />
                    <MobileLink to="/calculator" icon={<Calculator size={20} />} label={t.navbar.calculator} />
                    <MobileLink to="/about" icon={<Info size={20} />} label={t.navbar.about} />
                </div>
            </div>
        </>
    );
}

function MobileLink({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => `
                flex flex-col items-center gap-1 rounded-xl px-4 py-2 text-xxs font-bold tracking-tight transition-all duration-200
                ${isActive 
                    ? "text-blue-600 dark:text-blue-400 scale-105" 
                    : "text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                }
            `}
        >
            {icon}
            <span>{label}</span>
        </NavLink>
    );
}
