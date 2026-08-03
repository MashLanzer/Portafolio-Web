"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import { STEPS, T } from "@/lib/content";
import { SectionHeading, Wrap } from "./ui";

export default function Process() {
  const { t } = useLang();
  return (
    <section id="proceso" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <Wrap>
        <SectionHeading
          eyebrow={T.process.eyebrow}
          title={T.process.title}
          subtitle={T.process.subtitle}
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="font-display text-[44px] font-extrabold leading-none text-flame/25">
                  {step.n}
                </span>
                {i < STEPS.length - 1 && (
                  <span className="hidden h-px flex-1 bg-line lg:block" />
                )}
              </div>
              <div className="border-t-[3px] border-flame pt-4">
                <h3 className="font-display text-[19px] font-semibold tracking-[-0.01em]">
                  {t(step.title)}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-dim">
                  {t(step.description)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
