import { useState } from "react";
import { Calculator as CalculatorIcon } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import WarningCard from "../components/WarningCard";
import ScoreCard from "../components/ScoreCard";
import TkadToggle from "../components/TkadToggle";
import RapotCard from "../components/RapotCard";
import { calculateTKA, calculateTKAD, calculateFinalScore } from "../lib/calculator";

export default function Calculator() {
    const { t } = useLanguage();
    const [level, setLevel] = useState<"sd-smp" | "smp-sma">("smp-sma");
    const [tkadEnabled, setTkadEnabled] = useState(false);

    const [tkaScores, setTkaScores] = useState([
        { id: "indonesian", label: t.calculator.subjects.indonesian, value: "" },
        { id: "mathematics", label: t.calculator.subjects.mathematics, value: "" },
    ]);

    const [tkadScores, setTkadScores] = useState([
        { id: "english", label: t.calculator.subjects.english, value: "" },
        { id: "science", label: t.calculator.subjects.science, value: "" },
    ]);

    const [rapot, setRapot] = useState("");
    const [result, setResult] = useState<{ tka: number; tkad?: number; rapot: number; final: number; } | null>(null);
    const [error, setError] = useState(false);

    const activeTkadScores = level === "sd-smp" 
        ? tkadScores.filter(s => s.id === "science")
        : tkadScores;

    function handleTkaChange(id: string, value: string) {
        setTkaScores((current) => current.map((subject) => subject.id === id ? { ...subject, value } : subject));
        setResult(null);
        setError(false);
    }

    function handleTkadChange(id: string, value: string) {
        setTkadScores((current) => current.map((subject) => subject.id === id ? { ...subject, value } : subject));
        setResult(null);
        setError(false);
    }

    function handleRapotChange(value: string) {
        setRapot(value);
        setResult(null);
        setError(false);
    }

    function isValidScore(value: string): boolean {
        if (value.trim() === "") return false;
        const number = Number(value);
        return !Number.isNaN(number) && number >= 0 && number <= 100;
    }

    function handleCalculate() {
        const tkaValid = tkaScores.every((subject) => isValidScore(subject.value));
        const rapotValid = isValidScore(rapot);
        const tkadValid = !tkadEnabled || activeTkadScores.every((subject) => isValidScore(subject.value));

        if (!tkaValid || !rapotValid || !tkadValid) {
            setError(true);
            setResult(null);
            return;
        }

        const tka = calculateTKA({
            indonesian: Number(tkaScores.find((s) => s.id === "indonesian")?.value),
            mathematics: Number(tkaScores.find((s) => s.id === "mathematics")?.value),
        });

        const rapotValue = Number(rapot);

        if (!tkadEnabled) {
            const final = calculateFinalScore(tka, rapotValue, level);
            setResult({ tka, rapot: rapotValue, final });
            setError(false);
            return;
        }

        const tkad = calculateTKAD({
            english: level === "smp-sma" ? Number(tkadScores.find((s) => s.id === "english")?.value) : undefined,
            science: Number(tkadScores.find((s) => s.id === "science")?.value),
        });

        const final = calculateFinalScore(tka, rapotValue, level, tkad);
        setResult({ tka, tkad, rapot: rapotValue, final });
        setError(false);
    }

    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-50 px-4 pb-20 pt-28 transition-colors duration-300 dark:bg-slate-950 sm:px-6 md:pt-36">
            <div className="absolute left-1/2 top-0 -z-10 h-[350px] w-[600px] -translate-x-1/2 bg-blue-500/10 blur-[120px] dark:bg-blue-500/[0.03]" />

            <div className="mx-auto max-w-3xl">
                <section className="text-center">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-600 ring-1 ring-inset ring-blue-600/10 dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-400/20">
                        {t.calculator.label}
                    </span>
                    <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
                        {t.calculator.title}
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500 dark:text-slate-400 sm:text-lg">
                        {t.calculator.description}
                    </p>
                </section>

                <section className="mt-10">
                    <WarningCard title={t.warning.title} message={t.warning.message} />
                </section>

                <div className="mt-6 grid grid-cols-2 gap-2 rounded-xl bg-slate-200/60 p-1 dark:bg-slate-900/60">
                    <button
                        type="button"
                        onClick={() => { setLevel("sd-smp"); setResult(null); setTkadEnabled(false); setError(false); }}
                        className={`rounded-lg py-2.5 text-sm font-bold transition-all outline-none ${level === "sd-smp" ? "bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-white" : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"}`}
                    >
                        SD → SMP
                    </button>
                    <button
                        type="button"
                        onClick={() => { setLevel("smp-sma"); setTkadEnabled(true); setResult(null); setError(false); }}
                        className={`rounded-lg py-2.5 text-sm font-bold transition-all outline-none ${level === "smp-sma" ? "bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-white" : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"}`}
                    >
                        SMP → SMA
                    </button>
                </div>

                {error && (
                    <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-600 dark:border-red-950 dark:bg-red-950/30 dark:text-red-400">
                        {t.score.valid}
                    </div>
                )}

                <section className="mt-6 space-y-5">
                    <ScoreCard
                        title="TKA"
                        description={t.calculator.tkaDescription}
                        subjects={tkaScores}
                        onChange={handleTkaChange}
                    />

                    <RapotCard
                        title={t.calculator.rapotTitle}
                        description={t.calculator.rapotDescription}
                        value={rapot}
                        onChange={handleRapotChange}
                    />

                    <TkadToggle
                        enabled={tkadEnabled}
                        onChange={(enabled) => { setTkadEnabled(enabled); setResult(null); }}
                        title={t.calculator.tkadToggle}
                        description={t.calculator.tkadDescription}
                    />

                    {tkadEnabled && (
                        <ScoreCard
                            title="TKAD"
                            description={t.calculator.tkadScoresDescription}
                            subjects={activeTkadScores}
                            onChange={handleTkadChange}
                        />
                    )}

                    <button
                        type="button"
                        onClick={handleCalculate}
                        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-md shadow-blue-600/10 transition-all duration-200 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98]"
                    >
                        <CalculatorIcon className="h-5 w-5" />
                        {t.calculator.calculate}
                    </button>

                    {result !== null && (
                        <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-6 text-center shadow-sm dark:border-blue-950/40 dark:bg-blue-950/10">
                            <p className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                                {t.calculator.result}
                            </p>
                            <p className="mt-2 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                                {result.final.toFixed(2)}
                            </p>
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}
