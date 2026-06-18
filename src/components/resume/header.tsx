"use client";

import { useEffect, useState } from "react";
import { motion, useTransform, useMotionValue, animate } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, FileText } from "lucide-react";

export default function ResumeHeader() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const scrollY = useMotionValue(0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const paddingY = useTransform(scrollY, [0, 80], ["1.5rem", "1rem"]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/90"
      style={{ paddingTop: paddingY, paddingBottom: paddingY }}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5 text-background" strokeWidth={2} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-tight text-foreground font-heading">
              resume
            </span>
            <span className="text-xs text-foreground/40 font-sans">
              kaamkardo.com
            </span>
          </div>
        </div>

        {/* Theme Toggle */}
        {mounted && (
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-full flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </motion.button>
        )}
      </div>
    </motion.header>
  );
}
