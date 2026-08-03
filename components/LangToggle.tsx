"use client";

import { useLang } from "@/lib/lang";

export default function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div
      className="flex overflow-hidden rounded-full border border-line font-mono text-[11px]"
      role="group"
      aria-label="Idioma / Language"
    >
      {(["es", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-3 py-[6px] uppercase tracking-[0.08em] transition-colors ${
            lang === l ? "bg-paper text-ground" : "text-dim hover:text-paper"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
