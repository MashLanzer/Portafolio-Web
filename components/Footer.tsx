"use client";

import { useLang } from "@/lib/lang";
import { CONTACT, T } from "@/lib/content";
import { Wrap } from "./ui";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-ground py-8">
      <Wrap className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <span className="font-display text-lg font-extrabold tracking-[-0.03em]">
            Mash<span className="text-flame">.</span>
          </span>
          <span className="font-mono text-[11.5px] text-dim">TAMPA, FL</span>
        </div>

        <div className="flex items-center gap-5 font-mono text-[11.5px] text-dim">
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-paper">
            GITHUB ↗
          </a>
          <a href={CONTACT.phoneHref} className="transition-colors hover:text-paper">
            {CONTACT.phone}
          </a>
        </div>

        <div className="font-mono text-[11.5px] text-dim">
          © {year} — {t(T.footer.rights)}
        </div>
      </Wrap>
    </footer>
  );
}
