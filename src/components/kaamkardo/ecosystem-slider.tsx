"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ecosystemTools } from "@/lib/ecosystem";

const DURATION = 5000;
const MOBILE_QUERY = "(max-width: 639px)";

function subscribeToMobileQuery(callback: () => void) {
  const mediaQuery = window.matchMedia(MOBILE_QUERY);
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getIsMobileSnapshot() {
  return window.matchMedia(MOBILE_QUERY).matches;
}

export default function EcosystemSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const isMobile = useSyncExternalStore(
    subscribeToMobileQuery,
    getIsMobileSnapshot,
    () => false
  );
  const [isPaused, setIsPaused] = useState(false);
  
  const activeWrappedIndex = ((currentIndex % ecosystemTools.length) + ecosystemTools.length) % ecosystemTools.length;
  const activeTool = ecosystemTools[activeWrappedIndex];

  useEffect(() => {
    if (isPaused) return;
    const start = Date.now();
    let raf: number;
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(elapsed / DURATION, 1);
      setProgress(pct);
      if (pct >= 1) {
        setCurrentIndex((prev) => prev + 1);
        setProgress(0);
      } else {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [currentIndex, isPaused]);

  const goTo = useCallback((diff: number) => {
    setCurrentIndex((prev) => prev + diff);
    setProgress(0);
  }, []);

  return (
    <>
      {/* ── Hero Text (scrollable content area) ──────────────── */}
      <div 
        className="w-full flex flex-col items-center justify-center relative z-10 pb-40 overflow-visible"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex flex-col items-center justify-center text-center w-full max-w-5xl px-4 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTool.id}
              initial={{ opacity: 0.92, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.25, 1, 0.35, 1] }}
              className="flex flex-col items-center w-full"
            >
              {/* Eyebrow badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-foreground/80 text-xs font-medium mb-5 backdrop-blur-md"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 20 }}
              >
                <Sparkles className="w-3.5 h-3.5 text-[var(--glow-blue)]" />
                <span>Micro-SaaS Ecosystem</span>
              </motion.div>

              <motion.div
                className={cn(
                  "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br shadow-2xl relative overflow-hidden",
                  activeTool.accent
                )}
                style={{ boxShadow: `0 8px 40px ${activeTool.glow}` }}
                initial={{ scale: 0.6, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                {activeTool.logoImg ? (
                  <Image
                    src={activeTool.logoImg}
                    alt={activeTool.title}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                ) : (
                  <activeTool.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-lg" />
                )}
              </motion.div>

              <h1 className="text-3xl sm:text-5xl md:text-7xl font-heading font-black tracking-tight text-foreground mb-4 leading-[1.1] md:leading-[1.05] max-w-4xl">
                {activeTool.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-medium text-foreground/55 max-w-2xl mx-auto mb-7 leading-relaxed px-4">
                {activeTool.desc}
              </p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                <Link href={activeTool.url} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full px-8 py-5 sm:px-10 sm:py-6 text-base sm:text-lg font-bold group shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-hover)] transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] bg-foreground text-background">
                    {activeTool.cta}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Fixed Bottom Dock ─────────────────────────────────── */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-[80] flex flex-col items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Fade-up gradient so dock blends into content */}
        <div className="w-full h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />

        {/* Dock container */}
        <div className="w-full bg-background/70 backdrop-blur-2xl border-t border-foreground/[0.06] pb-[env(safe-area-inset-bottom,0px)]">
          <div className="max-w-4xl mx-auto px-4 py-3 flex flex-col items-center gap-2.5">
            
            {/* Icons row with arrows */}
            <div className="w-full flex items-center justify-center relative" style={{ perspective: "500px" }}>
              {/* Arrows */}
              <button
                onClick={() => goTo(-1)}
                className="absolute left-0 sm:left-4 w-11 h-11 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-lg flex items-center justify-center text-foreground/40 hover:text-foreground hover:bg-foreground/10 transition-all duration-300 hover:scale-105 active:scale-95 z-30"
                aria-label="Previous tool"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* 3D Icons Track */}
              <div 
                className="relative h-14 flex items-center justify-center"
                style={{ width: isMobile ? "260px" : "500px" }}
              >
                <div 
                  className="relative w-full h-full flex items-center justify-center"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {ecosystemTools.map((tool, index) => {
                    let diff = index - activeWrappedIndex;
                    if (diff > 3) diff -= ecosystemTools.length;
                    if (diff < -2) diff += ecosystemTools.length;
                    
                    const isActive = diff === 0;
                    const isWrapping = Math.abs(diff) >= 3;
                    const absDiff = Math.abs(diff);
                    
                    const iconSpacing = isMobile ? 56 : 90;
                    const rotateY = diff * -15;
                    const translateZ = isActive ? 20 : -(absDiff * 15);

                    return (
                      <motion.button
                        key={tool.id}
                        onClick={() => goTo(diff)}
                        animate={{
                          x: diff * iconSpacing,
                          scale: isActive ? 1.2 : Math.max(0.8, 0.95 - absDiff * 0.05),
                          opacity: isWrapping ? 0 : (isActive ? 1 : Math.max(0.6, 0.9 - absDiff * 0.1)),
                          y: isActive ? -16 : 0,
                          rotateY: rotateY,
                          zIndex: isActive ? 30 : 20 - absDiff,
                        }}
                        transition={{
                          type: "spring" as const,
                          stiffness: 300,
                          damping: 22,
                          mass: 1,
                        }}
                        className={cn(
                          "absolute flex items-center justify-center rounded-full shrink-0 group cursor-pointer",
                          isActive 
                            ? cn("w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br", tool.accent)
                            : "w-9 h-9 sm:w-10 sm:h-10 bg-foreground/5 border border-foreground/10 hover:border-foreground/20 hover:bg-foreground/10"
                        )}
                        style={{
                          transformStyle: "preserve-3d",
                          transform: `translateZ(${translateZ}px)`,
                          ...(isActive ? { boxShadow: `0 0 20px ${tool.glow}, 0 0 40px ${tool.glow.replace('0.6', '0.12')}` } : {}),
                        }}
                        aria-label={`Select ${tool.title}`}
                      >
                        {tool.logoImg ? (
                          <div className={cn("relative w-full h-full rounded-full overflow-hidden transition-all duration-500", isActive ? "opacity-100" : "opacity-80 group-hover:opacity-100")}>
                            <Image
                              src={tool.logoImg}
                              alt={tool.title}
                              fill
                              sizes="44px"
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <tool.icon 
                            className={cn(
                              "transition-all duration-500",
                              isActive ? "w-4.5 h-4.5 sm:w-5 sm:h-5 text-white drop-shadow-lg" : "w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground/50 group-hover:text-foreground/80"
                            )} 
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Edge fades */}
                <div className="absolute left-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-r from-background/70 to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-l from-background/70 to-transparent z-20 pointer-events-none" />
              </div>

              <button
                onClick={() => goTo(1)}
                className="absolute right-0 sm:right-4 w-11 h-11 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-lg flex items-center justify-center text-foreground/40 hover:text-foreground hover:bg-foreground/10 transition-all duration-300 hover:scale-105 active:scale-95 z-30"
                aria-label="Next tool"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Progress dots */}
            <div className="flex items-center gap-1.5" style={{ perspective: "300px" }}>
              {ecosystemTools.map((tool, index) => {
                const isActive = index === activeWrappedIndex;
                let diff = index - activeWrappedIndex;
                if (diff > 3) diff -= 6;
                if (diff < -3) diff += 6;
                const absDiff = Math.abs(diff);
                const dotRotateY = diff * 10;
                const dotZ = -(absDiff * 6);

                return (
                  <motion.button
                    key={tool.id}
                    onClick={() => goTo(diff)}
                    animate={{
                      rotateY: dotRotateY,
                      opacity: isActive ? 1 : Math.max(0.3, 0.7 - absDiff * 0.12),
                    }}
                    transition={{ 
                      type: "spring" as const,
                      stiffness: 300,
                      damping: 22,
                      mass: 1,
                    }}
                    className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full group"
                    style={{ 
                      transformStyle: "preserve-3d", 
                      transform: `translateZ(${dotZ}px)`,
                    }}
                    aria-label={`Go to ${tool.title}`}
                  >
                    <motion.span
                      animate={{ width: isActive ? 36 : 8 }}
                      className={cn(
                        "relative block h-1 overflow-hidden rounded-full transition-colors duration-500",
                        isActive ? "bg-foreground/20" : "bg-foreground/10 group-hover:bg-foreground/25"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          className={cn("absolute left-0 top-0 h-full rounded-full bg-gradient-to-r", tool.accent)}
                          style={{ width: `${progress * 100}%` }}
                        />
                      )}
                    </motion.span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
