"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Bi, Lang } from "./content";

type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (bi: Bi) => string;
};

const Ctx = createContext<LangCtx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  // Detecta idioma del navegador / preferencia guardada (solo en cliente).
  useEffect(() => {
    const saved = (typeof window !== "undefined" && window.localStorage.getItem("lang")) as Lang | null;
    if (saved === "es" || saved === "en") {
      setLangState(saved);
      return;
    }
    const nav = (navigator.language || "es").slice(0, 2);
    if (nav === "en") setLangState("en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("lang", l);
    } catch {
      /* ignore */
    }
  };

  const t = (bi: Bi) => bi[lang];

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useLang() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
