"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Globe, FileText, Camera, Compass, Users, PenTool, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ecosystemTools = [
  {
    id: "directory",
    title: "The #1 AI platform for professionals",
    desc: "Streamline your career with our intuitive, scalable ecosystem of micro-SaaS tools.",
    icon: Globe,
    url: "https://kaamkardo.com",
    cta: "Explore Directory",
    accent: "from-sky-400 to-blue-600",
    glow: "rgba(56,189,248,0.6)",
  },
  {
    id: "resume",
    title: "Free ATS Resume Score",
    desc: "Upload your resume and get an instant ATS score (0–100), find out exactly why HR is rejecting you.",
    icon: FileText,
    logoImg: "/resume-logo.png",
    url: "https://resume.kaamkardo.com",
    cta: "Optimize Resume",
    accent: "from-emerald-400 to-teal-600",
    glow: "rgba(52,211,153,0.6)",
  },
  {
    id: "photo",
    title: "India's AI Style Marketplace",
    desc: "Browse creator-made AI prompts, upload your photo, and generate Indian-context images for headshots, weddings, and reels.",
    icon: Camera,
    logoImg: "/photoready-logo.png",
    url: "https://photoready.kaamkardo.com",
    cta: "Generate Headshot",
    accent: "from-violet-400 to-purple-600",
    glow: "rgba(167,139,250,0.6)",
  },
  {
    id: "skill",
    title: "Learn the right skills",
    desc: "Personalized skill roadmaps to accelerate your career growth.",
    icon: Compass,
    url: "https://skillhub.kaamkardo.com",
    cta: "View Roadmap",
    accent: "from-amber-400 to-orange-600",
    glow: "rgba(251,191,36,0.6)",
  },
  {
    id: "linkedin",
    title: "Grow your audience",
    desc: "Generate viral LinkedIn posts that build your personal brand.",
    icon: Users,
    url: "https://social.kaamkardo.com",
    cta: "Create Post",
    accent: "from-rose-400 to-pink-600",
    glow: "rgba(251,113,133,0.6)",
  },
  {
    id: "seo",
    title: "Rank higher on Google",
    desc: "Write SEO optimized articles that drive organic traffic.",
    icon: PenTool,
    url: "https://seo.kaamkardo.com",
    cta: "Start Writing",
    accent: "from-cyan-400 to-indigo-600",
    glow: "rgba(34,211,238,0.6)",
  },
];

const DURATION = 5000;

export default function EcosystemSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const activeWrappedIndex = ((currentIndex % 6) + 6) % 6;
  const activeTool = ecosystemTools[activeWrappedIndex];

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        className="w-full flex flex-col items-center justify-center relative z-10 pb-36 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex flex-col items-center justify-center text-center w-full max-w-5xl px-4 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTool.id}
              initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -28, filter: "blur(12px)" }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.35, 1] }}
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
                  <img src={activeTool.logoImg} alt={activeTool.title} className="w-full h-full object-cover" />
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
        className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center"
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
                className="absolute left-0 sm:left-4 w-8 h-8 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-lg flex items-center justify-center text-foreground/40 hover:text-foreground hover:bg-foreground/10 transition-all duration-300 hover:scale-110 active:scale-95 z-30"
                aria-label="Previous tool"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
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
                    if (diff > 3) diff -= 6;
                    if (diff < -2) diff += 6;
                    
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
                          filter: isActive ? "blur(0px)" : `blur(${absDiff * 1}px)`,
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
                          <div className={cn("w-full h-full rounded-full overflow-hidden transition-all duration-500", isActive ? "opacity-100" : "opacity-80 group-hover:opacity-100")}>
                            <img src={tool.logoImg} alt={tool.title} className="w-full h-full object-cover" />
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
                className="absolute right-0 sm:right-4 w-8 h-8 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-lg flex items-center justify-center text-foreground/40 hover:text-foreground hover:bg-foreground/10 transition-all duration-300 hover:scale-110 active:scale-95 z-30"
                aria-label="Next tool"
              >
                <ChevronRight className="w-3.5 h-3.5" />
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
                      width: isActive ? 36 : 8,
                      rotateY: dotRotateY,
                      opacity: isActive ? 1 : Math.max(0.3, 0.7 - absDiff * 0.12),
                    }}
                    transition={{ 
                      type: "spring" as const,
                      stiffness: 300,
                      damping: 22,
                      mass: 1,
                    }}
                    className="relative h-1 rounded-full overflow-hidden cursor-pointer group"
                    style={{ 
                      transformStyle: "preserve-3d", 
                      transform: `translateZ(${dotZ}px)`,
                    }}
                    aria-label={`Go to ${tool.title}`}
                  >
                    <div className={cn(
                      "absolute inset-0 rounded-full transition-colors duration-500",
                      isActive ? "bg-foreground/20" : "bg-foreground/10 group-hover:bg-foreground/25"
                    )} />
                    {isActive && (
                      <motion.div 
                        className={cn("absolute left-0 top-0 h-full rounded-full bg-gradient-to-r", tool.accent)}
                        style={{ width: `${progress * 100}%` }}
                      />
                    )}
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
