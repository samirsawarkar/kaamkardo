"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function MinimalHeader() {
  const { scrollY } = useScroll();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const py = useTransform(scrollY, [0, 60], ["1.5rem", "1rem"]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50"
    >
      <motion.div
        className="max-w-7xl mx-auto flex items-center justify-between px-6"
        style={{ paddingTop: py, paddingBottom: py }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
            <span className="text-background font-black text-lg">K</span>
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-foreground">KaamKarDo</span>
        </Link>

        {/* Theme Toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-accent text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        )}
      </motion.div>
    </motion.header>
  );
}
