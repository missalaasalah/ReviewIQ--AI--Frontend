import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  translations,
  type Language,
} from "./translations";

type Direction = "ltr" | "rtl";

interface LanguageContextType {
  language: Language;
  direction: Direction;
  t: (key: keyof typeof translations.en) => string;
  toggleLanguage: () => void;
  formatNumber: (value: number | string) => string;
}

const arabicDigits = [
  "٠",
  "١",
  "٢",
  "٣",
  "٤",
  "٥",
  "٦",
  "٧",
  "٨",
  "٩",
];

function toArabicDigits(value: number | string): string {
  return String(value).replace(
    /[0-9]/g,
    (digit) => arabicDigits[Number(digit)]
  );
}

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem(
      "reviewiq-language"
    ) as Language | null;

    return savedLanguage === "ar" ? "ar" : "en";
  });

  const direction: Direction =
    language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    localStorage.setItem(
      "reviewiq-language",
      language
    );

    document.documentElement.lang = language;
    document.documentElement.dir = direction;

    document.body.dir = direction;
  }, [language, direction]);

  const toggleLanguage = () => {
    setLanguage((current: Language) =>
      current === "en" ? "ar" : "en"
    );
  };

  const t = (
    key: keyof typeof translations.en
  ): string => {
    return translations[language][key];
  };

  const formatNumber = (
    value: number | string
  ): string => {
    return language === "ar"
      ? toArabicDigits(value)
      : String(value);
  };

  const value: LanguageContextType = {
    language,
    direction,
    t,
    toggleLanguage,
    formatNumber,
  };

  return (
    <LanguageContext.Provider value={value}>
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