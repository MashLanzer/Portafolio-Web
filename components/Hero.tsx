"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import { T } from "@/lib/content";
import { Wrap } from "./ui";

const STACK_STRIP = [
  "NEXT.JS",
  "TYPESCRIPT",
  "SUPABASE",
  "FIREBASE",
  "TAILWIND",
  "CAPACITOR / ANDROID",
  "VERCEL",
];

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* background accents */}
      <div className="absolute inset-0 grid-lines" aria-hidden />
      <motion.div
        className="aurora left-[-10%] top-[-10%] h-[420px] w-[420px] bg-flame/25"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="aurora right-[-8%] top-[10%] h-[380px] w-[380px] bg-[#3b56d6]/30"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <Wrap className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
              </span>
              <span className="font-mono text-[11px] tracking-[0.1em] text-dim">
                {t(T.hero.available)}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="eyebrow mb-5"
            >
              {t(T.hero.eyebrow)}
            </motion.p>

            <h1 className="font-display text-[clamp(38px,7.2vw,74px)] font-extrabold leading-[0.96] tracking-[-0.04em]">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {t(T.hero.titleA)}
              </motion.span>
              <motion.span
                className="block text-flame"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t(T.hero.titleB)}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-[52ch] text-[clamp(16px,2vw,19px)] text-[#c7ceea]"
            >
              {t(T.hero.lede)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 border-2 border-flame bg-flame px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-transparent hover:text-flame"
              >
                {t(T.hero.ctaPrimary)}
                <span aria-hidden>→</span>
              </a>
              <a
                href="#registro"
                className="inline-flex items-center gap-2 border-2 border-paper px-5 py-3 text-[15px] font-semibold transition-colors hover:bg-paper hover:text-ground"
              >
                {t(T.hero.ctaSecondary)}
              </a>
            </motion.div>
          </div>

          {/* right column — code card */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-xl border border-line bg-ground-2/70 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-2 font-mono text-[11px] text-dim">mash.config.ts</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed">
                <code>
                  <span className="text-[#8e97be]">const</span>{" "}
                  <span className="text-live">mash</span>{" "}
                  <span className="text-dim">= {"{"}</span>
                  {"\n  "}
                  <span className="text-[#c7ceea]">rol</span>
                  <span className="text-dim">:</span>{" "}
                  <span className="text-flame">&quot;Desarrollo web + herramientas&quot;</span>
                  <span className="text-dim">,</span>
                  {"\n  "}
                  <span className="text-[#c7ceea]">base</span>
                  <span className="text-dim">:</span>{" "}
                  <span className="text-flame">&quot;Tampa, FL&quot;</span>
                  <span className="text-dim">,</span>
                  {"\n  "}
                  <span className="text-[#c7ceea]">stack</span>
                  <span className="text-dim">: [</span>
                  <span className="text-flame">&quot;Next.js&quot;</span>
                  <span className="text-dim">, </span>
                  <span className="text-flame">&quot;TypeScript&quot;</span>
                  <span className="text-dim">, </span>
                  <span className="text-flame">&quot;Supabase&quot;</span>
                  <span className="text-dim">],</span>
                  {"\n  "}
                  <span className="text-[#c7ceea]">enfoque</span>
                  <span className="text-dim">:</span>{" "}
                  <span className="text-flame">&quot;negocios pequeños&quot;</span>
                  <span className="text-dim">,</span>
                  {"\n  "}
                  <span className="text-[#c7ceea]">disponible</span>
                  <span className="text-dim">:</span>{" "}
                  <span className="text-live">true</span>
                  <span className="text-dim">,</span>
                  {"\n"}
                  <span className="text-dim">{"};"}</span>
                  {"\n\n"}
                  <span className="text-[#5a648f]">// entrega con precio fijo y garantía</span>
                  {"\n"}
                  <span className="text-live">mash</span>
                  <span className="text-dim">.</span>
                  <span className="text-[#c7ceea]">build</span>
                  <span className="text-dim">(</span>
                  <span className="text-flame">tuNegocio</span>
                  <span className="text-dim">);</span>
                  <span className="animate-pulse text-flame">▋</span>
                </code>
              </pre>
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-xl border border-flame/30" aria-hidden />
          </motion.div>
        </div>

        {/* marquee stack strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="marquee mt-16 overflow-hidden border-t border-line pt-5"
        >
          <div className="marquee-track gap-10">
            {[...STACK_STRIP, ...STACK_STRIP].map((s, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-mono text-[11.5px] tracking-[0.1em] text-dim"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </Wrap>
    </section>
  );
}
