"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/lang";
import { T } from "@/lib/content";
import { Wrap } from "./ui";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1200;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useLang();
  return (
    <section className="border-y border-line bg-ground-2/40">
      <Wrap className="py-14">
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {T.stats.items.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center lg:border-l lg:border-line lg:first:border-l-0"
            >
              <div className="font-display text-[clamp(36px,6vw,56px)] font-extrabold leading-none tracking-[-0.03em] text-flame">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mx-auto mt-2 max-w-[18ch] font-mono text-[11px] uppercase tracking-[0.1em] text-dim">
                {t(s.label)}
              </div>
            </motion.div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
