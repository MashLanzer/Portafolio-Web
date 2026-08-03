"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import { SERVICES, T } from "@/lib/content";
import { SectionHeading, Wrap } from "./ui";

export default function Services() {
  const { t } = useLang();
  return (
    <section id="servicios" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <Wrap>
        <SectionHeading
          eyebrow={T.services.eyebrow}
          title={T.services.title}
          subtitle={T.services.subtitle}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative overflow-hidden border-t-2 border-flame bg-ground-2/40 p-7 transition-colors hover:bg-ground-2"
            >
              <div className="font-mono text-[11px] tracking-[0.14em] text-flame">
                {t(s.key)}
              </div>
              <h3 className="mt-3 font-display text-[22px] font-semibold tracking-[-0.015em]">
                {t(s.title)}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-[#c7ceea]">
                {t(s.description)}
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-[13.5px] text-dim">
                    <span className="text-flame">▸</span>
                    {t(b)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
