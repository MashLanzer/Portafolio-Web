"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import { STACK, T } from "@/lib/content";
import { SectionHeading, Wrap } from "./ui";

export default function Stack() {
  const { t } = useLang();
  return (
    <section id="stack" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <Wrap>
        <SectionHeading
          eyebrow={T.stack.eyebrow}
          title={T.stack.title}
          subtitle={T.stack.subtitle}
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {STACK.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-ground-2/60 p-6"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="font-mono text-[11px] tracking-[0.14em] text-flame">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[17px] font-semibold">{t(group.label)}</h3>
              </div>
              <ul className="flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-[14px] text-[#c7ceea]"
                  >
                    <span className="h-1 w-1 rounded-full bg-flame" />
                    {item}
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
