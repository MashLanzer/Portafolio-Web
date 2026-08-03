"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import { T } from "@/lib/content";
import LangToggle from "./LangToggle";
import { Wrap } from "./ui";

const LINKS = [
  { href: "#registro", label: T.nav.projects },
  { href: "#servicios", label: T.nav.services },
  { href: "#stack", label: T.nav.stack },
  { href: "#proceso", label: T.nav.process },
] as const;

export default function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-ground/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Wrap className="flex items-center gap-4 py-3.5">
        <a href="#top" className="mr-auto flex items-baseline gap-2 no-underline">
          <span className="font-display text-xl font-extrabold tracking-[-0.03em]">
            Mash<span className="text-flame">.</span>
          </span>
          <span className="hidden font-mono text-[9.5px] tracking-[0.14em] text-dim sm:inline">
            {t(T.nav.tagline)}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-mono text-[12px] uppercase tracking-[0.08em] text-dim transition-colors hover:text-paper"
            >
              {t(l.label)}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-flame transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <LangToggle />

        <a
          href="#contacto"
          className="hidden items-center gap-2 border-2 border-flame bg-flame px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-transparent hover:text-flame sm:inline-flex"
        >
          {t(T.nav.cta)}
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
          aria-expanded={open}
          className="relative h-9 w-9 md:hidden"
        >
          <span
            className={`absolute left-1.5 h-[2px] w-6 bg-paper transition-all duration-300 ${
              open ? "top-4 rotate-45" : "top-2.5"
            }`}
          />
          <span
            className={`absolute left-1.5 top-4 h-[2px] w-6 bg-paper transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-1.5 h-[2px] w-6 bg-paper transition-all duration-300 ${
              open ? "top-4 -rotate-45" : "top-[22px]"
            }`}
          />
        </button>
      </Wrap>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line bg-ground/95 backdrop-blur-md md:hidden"
          >
            <Wrap className="flex flex-col gap-1 py-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3 font-display text-lg font-semibold"
                >
                  {t(l.label)}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 border-2 border-flame bg-flame px-4 py-3 font-semibold text-white"
              >
                {t(T.nav.cta)}
              </a>
            </Wrap>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
