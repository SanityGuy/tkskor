import { Link } from "react-router-dom";
import { ArrowRight, Info } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import InfoCard from "../components/InfoCard";

export default function Home() {
    const { t } = useLanguage();

    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-50 px-4 pb-20 pt-28 transition-colors duration-300 dark:bg-slate-950 sm:px-6 md:pt-36">
            <div className="absolute top-0 left-1/2 -z-10 h-[350px] w-[600px] -translate-x-1/2 bg-blue-500/10 blur-[120px] dark:bg-blue-500/[0.03]" />

            <div className="mx-auto flex max-w-5xl flex-col items-center">
                <section className="flex max-w-2xl flex-col items-center text-center">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-600 ring-1 ring-inset ring-blue-600/10 dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-400/20">
                        {t.home.label}
                    </span>

                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl md:text-6xl">
                        {t.home.title}
                    </h1>

                    <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-500 dark:text-slate-400 sm:text-lg">
                        {t.home.description}
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center gap-5">
                        <Link
                            to="/calculator"
                            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-md shadow-blue-600/10 transition-all duration-200 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98]"
                        >
                            {t.home.button}
                            <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                        </Link>

                        <Link
                            to="/about"
                            className="
                                inline-flex 
                                w-full sm:w-auto 
                                items-center 
                                justify-center 
                                gap-2 
                                rounded-xl 
                                border-2 border-blue-700
                                bg-white 
                                px-6 py-3.5 
                                font-bold 
                                text-slate-700 
                                shadow-sm 
                                transition-all duration-200 
                                
                                hover:bg-slate-50 
                                hover:text-slate-900 
                                hover:border-blue-500
                                
                                dark:border-blue-600 
                                dark:bg-slate-900 
                                dark:text-slate-300 

                                dark:hover:bg-slate-800 
                                dark:hover:shadow-blue-500/20
                                dark:hover:border-blue-500
                                dark:hover:text-white active:scale-[0.98]
                                "
                        >
                            <Info size={17} />
                            {t.navbar.about}
                        </Link>
                    </div>
                </section>

                <section className="mt-16 w-full">
                    <h2 className="text-center text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-2xl hidden">
                        {t.home.howItWorks}
                    </h2>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <InfoCard
                            number="01"
                            title={t.home.steps.enter.title}
                            description={t.home.steps.enter.description}
                            button={false}
                        />

                        <InfoCard
                            number="02"
                            title={t.home.steps.choose.title}
                            description={t.home.steps.choose.description}
                            button={false}
                        />

                        <InfoCard
                            number="03"
                            title={t.home.steps.calculate.title}
                            description={t.home.steps.calculate.description}
                            button={false}
                        />
                    </div>
                </section>
            </div>
        </main>
    );
}
