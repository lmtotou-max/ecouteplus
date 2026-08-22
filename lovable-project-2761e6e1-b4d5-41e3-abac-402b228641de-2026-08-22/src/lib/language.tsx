import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { content, type Content, type Lang } from "./content";

const STORAGE_KEY = "ecoute-plus-lang";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Content;
  chosen: boolean;
  ready: boolean;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");
  const [chosen, setChosen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "fr" || stored === "ar") {
      setLangState(stored);
      setChosen(true);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    root.classList.toggle("font-arabic", lang === "ar");
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    window.localStorage.setItem(STORAGE_KEY, l);
    setLangState(l);
    setChosen(true);
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, t: content[lang] as Content, chosen, ready }),
    [lang, setLang, chosen, ready],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}