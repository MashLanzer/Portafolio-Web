"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          aria-label="Volver arriba"
          className="fixed bottom-6 right-6 z-[90] grid h-11 w-11 place-items-center rounded-full border border-flame bg-ground/80 text-flame backdrop-blur transition-colors hover:bg-flame hover:text-white"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
