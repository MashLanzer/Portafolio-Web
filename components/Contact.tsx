"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import { CONTACT, T } from "@/lib/content";
import { Wrap } from "./ui";

export default function Contact() {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subj = subject || (name ? `Consulta de ${name}` : "Consulta desde el portafolio");
    const bodyLines = [
      name ? `Nombre: ${name}` : "",
      "",
      message,
    ].filter(Boolean);
    const href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(
      bodyLines.join("\n"),
    )}`;
    window.location.href = href;
  };

  const field =
    "w-full border-b-2 border-[#cdc7ba] bg-transparent px-1 py-3 text-[15px] text-ground outline-none transition-colors placeholder:text-[#8b8578] focus:border-flame";

  return (
    <section id="contacto" className="scroll-mt-20 bg-paper text-ground">
      <Wrap className="py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* left — copy + direct links */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-flame" />
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6b6558]">
                {t(T.contact.eyebrow)}
              </p>
            </div>
            <h2 className="font-display text-[clamp(28px,4.4vw,44px)] font-extrabold leading-[1.03] tracking-[-0.025em]">
              {t(T.contact.title)}
            </h2>
            <p className="mt-4 max-w-[46ch] text-[16px] text-[#4a4740]">
              {t(T.contact.subtitle)}
            </p>

            <div className="mt-10 flex flex-col gap-5">
              <a
                href={CONTACT.phoneHref}
                className="group flex items-center gap-4 no-underline"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-[#d3cdc0] transition-colors group-hover:border-flame group-hover:bg-flame group-hover:text-white">
                  ☎
                </span>
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-[#8a8578]">
                    {t({ es: "Teléfono", en: "Phone" })}
                  </span>
                  <span className="font-display text-[22px] font-bold transition-colors group-hover:text-flame">
                    {CONTACT.phone}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-center gap-4 no-underline"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-[#d3cdc0] transition-colors group-hover:border-flame group-hover:bg-flame group-hover:text-white">
                  ✉
                </span>
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-[#8a8578]">
                    {t({ es: "Correo", en: "Email" })}
                  </span>
                  <span className="font-display text-[18px] font-bold transition-colors group-hover:text-flame">
                    {CONTACT.email}
                  </span>
                </span>
              </a>

              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 no-underline"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-[#d3cdc0] transition-colors group-hover:border-live group-hover:bg-live group-hover:text-white">
                  ⌾
                </span>
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-[#8a8578]">
                    WhatsApp
                  </span>
                  <span className="font-display text-[18px] font-bold transition-colors group-hover:text-live">
                    {CONTACT.phone}
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* right — mailto form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-6 border border-[#d9d3c6] bg-white/50 p-7 sm:p-9"
          >
            <div>
              <label className="mb-1 block font-mono text-[11px] uppercase tracking-[0.12em] text-[#6b6558]">
                {t(T.contact.formName)}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={field}
                placeholder="Brayan Ibarra"
              />
            </div>
            <div>
              <label className="mb-1 block font-mono text-[11px] uppercase tracking-[0.12em] text-[#6b6558]">
                {t(T.contact.formSubject)}
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={field}
                placeholder={t({ es: "Quiero un sitio web / herramienta", en: "I want a website / tool" })}
              />
            </div>
            <div>
              <label className="mb-1 block font-mono text-[11px] uppercase tracking-[0.12em] text-[#6b6558]">
                {t({ es: "Mensaje", en: "Message" })}
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className={`${field} resize-none`}
                placeholder={t(T.contact.formMessage)}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 border-2 border-flame bg-flame px-5 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-transparent hover:text-flame"
            >
              {t(T.contact.formSend)} <span aria-hidden>→</span>
            </button>
            <p className="text-center font-mono text-[11px] text-[#8a8578]">
              {t({
                es: "Se abrirá tu correo con el mensaje listo para enviar.",
                en: "Your email app opens with the message ready to send.",
              })}
            </p>
          </motion.form>
        </div>
      </Wrap>
    </section>
  );
}
