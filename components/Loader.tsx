"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1150);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ground"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="font-display text-5xl font-extrabold tracking-[-0.04em]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Mash<span className="text-flame">.</span>
            </motion.div>
            <div className="h-[3px] w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-flame"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
