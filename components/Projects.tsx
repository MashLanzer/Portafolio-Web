"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import { PROJECTS, T, type Project } from "@/lib/content";
import { SectionHeading, Wrap } from "./ui";

function StatusBadge({ status }: { status: Project["status"] }) {
  const { t } = useLang();
  const live = status === "live";
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap border px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] ${
        live ? "border-live text-live" : "border-dim text-dim"
      }`}
    >
      {live && <span className="h-1.5 w-1.5 rounded-full bg-live" />}
      {t(live ? T.projects.live : T.projects.wip)}
    </span>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const { t } = useLang();
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-ground-2/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-flame/50 hover:bg-ground-2"
    >
      {/* glow on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(400px circle at 50% 0%, rgba(255,92,53,0.10), transparent 60%)" }} />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-lg border border-line bg-ground text-2xl transition-transform duration-300 group-hover:scale-110">
            {p.emoji}
          </span>
          <span className="font-mono text-[12px] text-flame">{p.index}</span>
        </div>
        <StatusBadge status={p.status} />
      </div>

      <h3 className="relative mt-5 font-display text-[22px] font-bold tracking-[-0.02em]">
        {p.name}
      </h3>
      <p className="relative mt-1 text-[14px] text-dim">{t(p.tagline)}</p>
      <p className="relative mt-3 flex-1 text-[14.5px] leading-relaxed text-[#c7ceea]">
        {t(p.description)}
      </p>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {p.tags.map((tag) => (
          <span
            key={tag}
            className="border border-line px-2.5 py-1 font-mono text-[10.5px] tracking-[0.04em] text-dim"
          >
            {tag}
          </span>
        ))}
      </div>

      {p.live && (
        <div className="relative mt-6 flex flex-wrap gap-2.5">
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-paper px-3.5 py-2 font-mono text-[12px] tracking-[0.06em] transition-colors hover:bg-paper hover:text-ground"
          >
            {t(T.projects.openLive)} <span aria-hidden>↗</span>
          </a>
        </div>
      )}
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="registro" className="scroll-mt-20 py-20 sm:py-28">
      <Wrap>
        <SectionHeading
          eyebrow={T.projects.eyebrow}
          title={T.projects.title}
          subtitle={T.projects.subtitle}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} p={p} i={i} />
          ))}
        </div>
      </Wrap>
    </section>
  );
}
