"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function OmniSyncHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80 } },
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center pt-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        {/* Urgency badge */}
        <motion.div variants={itemVariants} className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-accent text-foreground/80 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Only 12 orders processed per day — <strong className="text-foreground">3 slots left</strong>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-heading font-bold tracking-tight leading-[1.05] text-foreground mb-6"
        >
          Get more interviews.<br />
          Look professional.<br />
          Start earning faster.
        </motion.h1>

        {/* Subheadline */}
        <motion.p variants={itemVariants} className="mt-4 text-lg md:text-xl text-foreground/60 max-w-2xl leading-relaxed font-sans">
          We fix your resume, profile, and business setup — done for you in{" "}
          <span className="text-foreground font-semibold">24-48 hours.</span>
        </motion.p>

        {/* CTA row */}
        <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center gap-6">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="#services">
              <Button
                className="bg-foreground text-background hover:opacity-90 rounded-full px-10 py-7 text-lg font-semibold shadow-premium hover:shadow-premium-hover transition-all gap-3 group"
              >
                Start Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <p className="text-sm text-foreground/50 font-medium flex items-center gap-2">
            <span className="text-green-500">✓</span> Free revision if no improvement
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
