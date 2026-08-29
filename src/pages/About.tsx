import { useLanguage } from "../contexts/LanguageContext";
import { ArrowUpRight } from "lucide-react";

import InfoCard from "../components/InfoCard";

export default function About() {
    const { t } = useLanguage();

    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-50 px-4 pb-20 pt-28 transition-colors duration-300 dark:bg-slate-950 sm:px-6 md:pt-36">
            <div className="absolute top-0 left-1/2 -z-10 h-[350px] w-[600px] -translate-x-1/2 bg-blue-500/10 blur-[120px] dark:bg-blue-500/[0.03]" />

            <div className="mx-auto flex max-w-5xl flex-col items-center">
                <section className="flex max-w-2xl flex-col items-center text-center">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-600 ring-1 ring-inset ring-blue-600/10 dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-400/20">
                        {t.about.label}
                    </span>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl md:text-6xl">
                        {t.about.title}
                    </h1>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-500 dark:text-slate-400 sm:text-lg">
                        {t.about.description}
                    </p>
                </section>

                <section className="mt-16 w-full">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <InfoCard
                            number="01"
                            title={t.about.cards.project.title}
                            description={t.about.cards.project.description}
                            button={false}
                        />

                        <InfoCard
                            number="02"
                            title={t.about.cards.infrastructure.title}
                            description={t.about.cards.infrastructure.description}
                            button={false}
                        />

                        <InfoCard
                            number="03"
                            title={t.about.cards.privacy.title}
                            description={t.about.cards.privacy.description}
                            button={false}
                        />

                        <InfoCard
                            number="04"
                            title={t.about.cards.developers.title}
                            description={t.about.cards.developers.description}
                            button={true}
                            buttonlabel={t.about.cards.developers.button}
                            link="https://github.com/sanityguy/tkskor"
                        />

                        <InfoCard
                            number="05"
                            title={t.about.cards.community.title}
                            description={t.about.cards.community.description}
                            button={true}
                            buttonlabel={t.about.cards.community.button}
                            link="https://discord.com/invite/EZ4XBunzYg"
                        />

                        <InfoCard
                            number="06"
                            title={t.about.cards.support.title}
                            description={t.about.cards.support.description}
                            button={true}
                            buttonlabel={t.about.cards.support.button}
                            link="https://saweria.co/souyandev"
                        />
                    </div>
                </section>

                <section className="mt-16 w-full max-w-5xl px-4 sm:px-6">
                    <div className="group/footer flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200/60 bg-slate-50/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-slate-300 dark:border-slate-800/60 dark:bg-slate-900/40 dark:hover:border-slate-700 sm:flex-row sm:p-6">
                        
                        <p className="text-center text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-400 sm:text-left">
                            {t.about.footer}
                            <a
                                href="https://github.com/sanityguy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-0.5 font-semibold text-slate-900 underline decoration-slate-300 decoration-1 underline-offset-4 transition-colors hover:text-blue-600 hover:decoration-blue-500 dark:text-slate-100 dark:decoration-slate-700 dark:hover:text-blue-400 dark:hover:decoration-blue-400 active:scale-[0.98]"
                            >
                                <span>SanityGuy</span>
                                <ArrowUpRight 
                                    size={14} 
                                    className="transform transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" 
                                    aria-hidden="true"
                                />
                            </a>
                        </p>

                        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98] transition-all duration-200">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                            </span>
                            <span>Open Source</span>
                        </div>

                    </div>
                </section>
            </div>
        </main>
    );
}
