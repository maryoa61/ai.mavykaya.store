"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { dict, type Key, type Lang } from "../lib/i18n";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: Key) => string;
  pick: <T>(fa: T, en: T) => T;
};

const LangContext = createContext<LangContextValue | null>(null);
const STORAGE_KEY = "mavy-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fa");

  // خواندن زبان ذخیره‌شده بعد از اولین رندر
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {}
    if (saved === "fa" || saved === "en") setLangState(saved);
  }, []);

  // تنظیم زبان و جهت صفحه
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }, []);

  const t = useCallback((key: Key) => dict[lang][key], [lang]);
  const pick = useCallback(<T,>(fa: T, en: T): T => (lang === "fa" ? fa : en), [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t, pick }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
