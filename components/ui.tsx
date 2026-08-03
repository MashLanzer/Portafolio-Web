"use client";

import { motion, type Variants } from "framer-motion";
import { useLang } from "@/lib/lang";
import type { Bi } from "@/lib/content";

// Contenedor con ancho máximo consistente.
export function Wrap({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-13 ${className}`}>
      {children}
    </div>
  );
}

// Animación de aparición al hacer scroll.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </MotionTag>
  );
}

// Encabezado de sección estándar (eyebrow + título + subtítulo).
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: Bi;
  title: Bi;
  subtitle?: Bi;
}) {
  const { t } = useLang();
  return (
    <div className="max-w-2xl">
      <Reveal>
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-flame" />
          <p className="eyebrow">{t(eyebrow)}</p>
        </div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="font-display text-[clamp(28px,4.4vw,44px)] font-extrabold leading-[1.03] tracking-[-0.025em]">
          {t(title)}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={2}>
          <p className="mt-4 text-[17px] text-[#c7ceea]">{t(subtitle)}</p>
        </Reveal>
      )}
    </div>
  );
}
