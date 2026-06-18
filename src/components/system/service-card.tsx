"use client";

import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import React from "react";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  ctaText: string;
  href: string;
}

export function ServiceCard({ title, description, icon, ctaText, href }: ServiceCardProps) {
  return (
    <Link href={href} className="block w-full h-full">
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="group h-full flex flex-col p-8 md:p-10 rounded-[2rem] border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300"
      >
        <div className="w-14 h-14 rounded-2xl bg-accent text-foreground flex items-center justify-center mb-8 border border-border/50">
          {icon}
        </div>

        <h3 className="text-2xl font-heading font-bold text-foreground tracking-tight mb-3">
          {title}
        </h3>
        
        <p className="text-foreground/70 text-lg font-medium leading-relaxed mb-10 flex-1">
          {description}
        </p>

        <div className="pt-4 mt-auto border-t border-border/50">
          <Button variant="ghost" className="w-full justify-between px-0 hover:bg-transparent font-bold text-lg group/btn text-foreground h-auto py-2">
            {ctaText}
            <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center group-hover/btn:scale-110 transition-transform duration-300 shadow-sm">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Button>
        </div>
      </motion.div>
    </Link>
  );
}
