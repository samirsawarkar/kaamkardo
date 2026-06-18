"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CreditCard, FileText, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

const steps = [
  { n: "01", icon: CreditCard, label: "Secure Payment", sub: "Pay via UPI, GPay, or Card. 100% safe." },
  { n: "02", icon: FileText, label: "Share Details", sub: "Fill a 2-minute form. That's it." },
  { n: "03", icon: Clock, label: "Fast Delivery", sub: "Next batch: within 24 hours." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 20 } },
};

export default function OmniSyncExperience() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-heading font-bold text-foreground">How it works</h2>
        <p className="mt-4 text-foreground/60 text-lg">3 dead-simple steps between you and your results.</p>
      </motion.div>

      {/* Steps */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      >
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <motion.div key={step.n} variants={itemVariants}>
              <div className="h-full rounded-3xl border border-border bg-card p-8 relative overflow-hidden group hover:border-foreground/30 transition-all duration-300 flex flex-col gap-6 shadow-sm hover:shadow-md">
                <p className="text-5xl font-heading font-black text-foreground/5 select-none">{step.n}</p>
                <div
                  className={`w-12 h-12 rounded-xl bg-foreground flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}
                >
                  <Icon className="w-5 h-5 text-background" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground">{step.label}</h3>
                  <p className="text-foreground/60 text-base mt-2">{step.sub}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Final CTA banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 70, delay: 0.2 }}
        className="relative rounded-3xl overflow-hidden border border-border bg-foreground"
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-background leading-tight">
              Stop wasting time trying to fix this yourself.
            </h3>
            <p className="mt-4 text-background/70 text-lg">
              We do it for you — fast, simple, and proven to work.{" "}
              <span className="text-background font-bold block mt-1">Free revision if you don't see results.</span>
            </p>
            
            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4 text-background/50 text-sm font-medium">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-green-400" /> Secure Checkout</span>
              <span>•</span>
              <span>UPI Accepted</span>
              <span>•</span>
              <span>Visa / Mastercard</span>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-shrink-0 flex flex-col items-center">
            <Link href="#services">
              <Button className="bg-background text-foreground hover:bg-background/90 rounded-full px-10 py-7 text-xl font-bold shadow-xl group mb-3">
                <span className="relative z-10 flex items-center gap-3">
                  Start Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
