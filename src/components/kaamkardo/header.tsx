"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function OmniSyncHeader() {
  const { scrollY } = useScroll();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const unsub = scrollY.on("change", (v) => setScrolled(v > 20));
    return unsub;
  }, [scrollY]);

  const py = useTransform(scrollY, [0, 80], ["1.25rem", "0.75rem"]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 280, damping: 28, delay: 0.05 }}
      aria-label="Site header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: scrolled ? "blur(48px) saturate(200%)" : "blur(24px) saturate(160%)",
        WebkitBackdropFilter: scrolled ? "blur(48px) saturate(200%)" : "blur(24px) saturate(160%)",
        background: scrolled
          ? "var(--header-bg-scrolled)"
          : "var(--header-bg)",
        borderBottom: scrolled ? "1px solid rgba(128,128,128,0.12)" : "1px solid transparent",
        boxShadow: scrolled
          ? "0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.1)"
          : "none",
      }}
    >
      <motion.div
        className="max-w-6xl mx-auto flex items-center justify-between px-6"
        style={{ paddingTop: py, paddingBottom: py }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="KaamKarDo home">
          <div className="w-9 h-9 rounded-xl bg-foreground flex items-center justify-center shadow-sm transition-all duration-200 group-hover:scale-105 group-hover:shadow-md overflow-hidden relative">
            <Image
              src="/kaamkardo.png"
              alt="KaamKarDo Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="font-heading font-bold text-lg tracking-tight text-foreground">
            KaamKarDo
          </span>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-full border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 text-foreground/60 hover:text-foreground transition-all duration-200"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <motion.div
                key={theme}
                initial={{ rotate: -30, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.div>
            </button>
          )}

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link 
              href="#services"
              className="inline-flex items-center justify-center whitespace-nowrap bg-foreground text-background hover:opacity-90 rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition-all h-9"
            >
              Get Started →
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
}
