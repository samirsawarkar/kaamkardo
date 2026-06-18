"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SubdomainHeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
}

export default function SubdomainHero({ headline, subheadline, ctaText }: SubdomainHeroProps) {
  return (
    <section className="w-full px-6 pt-20 pb-16 flex flex-col items-center text-center">
      <Link href="/" className="mb-12 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
          <span className="text-background font-black text-xs">K</span>
        </div>
        <span className="font-heading font-bold text-md tracking-tight text-foreground">KaamKarDo</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tight leading-[1.05] text-foreground mb-6">
          {headline}
        </h1>
        <p className="text-xl md:text-2xl text-foreground/60 font-medium mb-10 max-w-2xl mx-auto">
          {subheadline}
        </p>

        <Link href="#pricing">
          <Button className="bg-foreground text-background hover:opacity-90 rounded-full px-12 py-8 text-xl font-bold shadow-premium hover:shadow-premium-hover transition-all gap-3 group">
            {ctaText}
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        
        <p className="mt-4 text-sm font-medium text-foreground/50">
          <span className="text-green-500 mr-1">✓</span> Delivered in 24 hours. Free revisions.
        </p>
      </motion.div>
    </section>
  );
}
