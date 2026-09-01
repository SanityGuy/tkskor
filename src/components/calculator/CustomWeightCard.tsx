import { Sliders, CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

export interface CustomWeights {
  tka: number;
  rapot: number;
  tkad: number;
  enableTkad: boolean;
}

interface CustomWeightCardProps {
  weights: CustomWeights;
  onChange: (weights: CustomWeights) => void;
}

export default function CustomWeightCard({ weights, onChange }: CustomWeightCardProps) {
  const {t} = useLanguage();
  const totalWeight = weights.enableTkad
    ? weights.tka + weights.rapot + weights.tkad
    : weights.tka + weights.rapot;

  const isValidTotal = totalWeight === 100;

  const handleWeightChange = (field: keyof CustomWeights, value: number | boolean) => {
    onChange({
      ...weights,
      [field]: value,
    });
  };

  return (
    <section className="rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/30 p-5 shadow-sm transition-all duration-300 dark:border-indigo-900/50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/30">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
            <Sliders size={20} strokeWidth={2.2} />
          </div>
          <div>
            <h3 className="font-bold tracking-tight text-slate-900 dark:text-white">
              {t.weights.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                {t.weights.description}
            </p>
          </div>
        </div>

        <div
          className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ring-1 ring-inset ${
            isValidTotal
              ? "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-950/50 dark:text-emerald-400 dark:ring-emerald-500/30"
              : "bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-950/50 dark:text-amber-400 dark:ring-amber-500/30"
          }`}
        >
          {isValidTotal ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
          {t.weights.total.replace("{totalWeight}", totalWeight.toString())}
        </div>
      </div>

      <div className="mt-4 min-h-[44px] w-full flex items-center justify-between rounded-xl bg-slate-50 px-3.5 py-2.5 ring-1 ring-slate-200/60 border border-slate-300 dark:bg-slate-900 dark:ring-slate-700/50 dark:border-slate-700">
        <span className="text-base font-medium sm:text-sm text-slate-700 dark:text-slate-300">
            {t.weights.incltkad}
        </span>
        <button
          type="button"
          onClick={() => handleWeightChange("enableTkad", !weights.enableTkad)}
          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
            weights.enableTkad ? "bg-indigo-600" : "bg-slate-300 dark:bg-slate-700"
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
              weights.enableTkad ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase">
            {t.weights.tka}
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={weights.tka}
            onChange={(e) => handleWeightChange("tka", Number(e.target.value))}
            className="w-full mt-1 rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-800 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase">
            {t.weights.rapot}
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={weights.rapot}
            onChange={(e) => handleWeightChange("rapot", Number(e.target.value))}
            className="w-full mt-1 rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-800 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
          />
        </div>

        {weights.enableTkad && (
          <div className="col-span-2 space-y-1 sm:col-span-1">
            <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase">
              {t.weights.tkad}
            </label>
            <input
              type="number"
              min="0"
              max="100"
              value={weights.tkad}
              onChange={(e) => handleWeightChange("tkad", Number(e.target.value))}
              className="w-full mt-1 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
          </div>
        )}
      </div>

      {!isValidTotal && (
        <p className="mt-3 text-xs font-medium text-amber-600 dark:text-amber-400">
          {t.weights.valid.replace("{totalWeight}", totalWeight.toString())}
        </p>
      )}
    </section>
  );
}