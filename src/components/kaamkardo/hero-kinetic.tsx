"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroKinetic() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Sequence the text transitions
    const t1 = setTimeout(() => setPhase(1), 1500); // WORK -> DONE.
    const t2 = setTimeout(() => setPhase(2), 3500); // DONE. -> KaamKarDo
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const variants: Variants = {
    enter: { opacity: 0, y: 40, filter: "blur(10px)" },
    center: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -40, filter: "blur(10px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative w-full h-[60vh] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.h1
              key="work"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-7xl md:text-9xl font-heading font-black tracking-tighter text-foreground"
            >
              WORK
            </motion.h1>
          )}
          {phase === 1 && (
            <motion.h1
              key="done"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-7xl md:text-9xl font-heading font-black tracking-tighter text-foreground"
            >
              DONE.
            </motion.h1>
          )}
          {phase === 2 && (
            <motion.div
              key="kaamkardo"
              variants={variants}
              initial="enter"
              animate="center"
              className="flex flex-col items-center"
            >
              <h1 className="text-6xl md:text-8xl font-heading font-black tracking-tighter text-foreground flex items-center gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-foreground flex items-center justify-center">
                  <span className="text-background font-black text-2xl md:text-4xl">K</span>
                </div>
                KaamKarDo
              </h1>
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.6, duration: 1 }}
                className="mt-6 text-xl md:text-2xl text-foreground/50 font-medium tracking-tight"
              >
                The premium digital routing layer.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
