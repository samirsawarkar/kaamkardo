"use client";

import { motion } from "framer-motion";

export function AnimatedGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-background">
      
      {/* The 24px Engineering Grid Overlay - Now sliding continuously */}
      <motion.div 
        animate={{
          backgroundPosition: ["0px 0px", "24px 24px"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"
      />
      
      {/* Sweeping Light Ray over the grid */}
      <motion.div
        animate={{
          x: ["-100vw", "100vw"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 w-[60vw] h-full bg-gradient-to-r from-transparent via-foreground/5 to-transparent skew-x-[-30deg]"
      />

    </div>
  );
}
