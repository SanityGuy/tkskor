import {
    createContext,
    useContext,
    useState,
} from "react";

import en from "../translations/en";
import id from "../translations/id";

type Language = "en" | "id";

const translations = {
    en,
    id,
};

interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    t: typeof en;
}

const LanguageContext =
    createContext<LanguageContextType | null>(null);

export function LanguageProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [language, setLanguageState] =
        useState<Language>(() => {
            const saved =
                localStorage.getItem("language");

            return saved === "id" ? "id" : "en";
        });

    function setLanguage(language: Language) {
        setLanguageState(language);

        localStorage.setItem(
            "language",
            language
        );
    }

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                t: translations[language],
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLanguage must be used inside LanguageProvider"
        );
    }

    return context;
}