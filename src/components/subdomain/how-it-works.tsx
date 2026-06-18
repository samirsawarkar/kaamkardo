"use client";

import { motion } from "framer-motion";
import { CreditCard, FileText, Clock } from "lucide-react";

const steps = [
  { n: "1", icon: CreditCard, label: "Pay Securely", sub: "UPI or Card" },
  { n: "2", icon: FileText, label: "Fill Form", sub: "Takes 2 mins" },
  { n: "3", icon: Clock, label: "Get Delivery", sub: "Within 24 hrs" },
];

export default function SubdomainHowItWorks() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-16">How it works</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative">
        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-border -translate-y-1/2 z-0" />
        
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15 }}
              className="relative z-10 flex flex-col items-center bg-background px-4"
            >
              <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mb-4 shadow-xl border-4 border-background">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{step.label}</h3>
              <p className="text-foreground/60">{step.sub}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
