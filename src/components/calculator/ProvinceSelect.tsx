import { Map } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

interface ProvinceSelectProps {
  province: string;
  onChange: (province: string) => void;
  title: string;
  description: string;
  placeholder?: string;
}

export default function ProvinceSelect({
  province,
  onChange,
  title,
  description,
  placeholder,
}: ProvinceSelectProps) {
  const { t } = useLanguage();

  return (
    <section className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs transition-all dark:border-slate-800 dark:bg-slate-900 sm:p-5">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
          <Map size={18} strokeWidth={2.2} />
        </div>
        <div className="space-y-0.5">
          <h3 className="font-bold tracking-tight text-slate-900 dark:text-white text-base">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {description}
          </p>
        </div>
      </div>

      <select
        className="
          min-h-[44px]
          w-full
          rounded-xl
          border border-slate-300 
          bg-slate-50
          px-3.5 
          py-2.5 
          text-base
          font-medium
          text-slate-700
          transition-colors
          hover:border-slate-400 
          focus:border-blue-500 
          focus:outline-none 
          focus:ring-2
          focus:ring-blue-500/20 
          dark:border-slate-700 
          dark:bg-slate-900 
          dark:text-slate-200
          sm:text-sm
        "
        value={province}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{placeholder}</option>
        <option value="DKI">{t.provinces?.dki || "DKI Jakarta"}</option>
        <option value="JBB">{t.provinces?.jabar || "Jawa Barat"}</option>
        <option value="JTG">{t.provinces?.jateng || "Jawa Tengah"}</option>
        <option value="DIY">{t.provinces?.yogyakarta || "D.I. Yogyakarta"}</option>
        <option value="JTT">{t.provinces?.jtt || "Jawa Timur"}</option>
        <option value="BTN">{t.provinces?.btn || "Banten"}</option>
        <option value="CUSTOM">⚡ Custom / Lainnya (Atur Bobot)</option>
      </select>
    </section>
  );
}