"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Zap } from "lucide-react";

const objections = [
  {
    icon: Clock,
    q: '"I don\'t have time"',
    a: "We do everything for you. Fill out a 2-minute form, pay securely, and we handle the rest. Zero effort on your end.",
  },
  {
    icon: ShieldCheck,
    q: '"Will this work?"',
    a: "Yes — we only use formats proven to pass ATS systems and convert real customers. Plus, free revision if you're not satisfied.",
  },
  {
    icon: Zap,
    q: '"Is it complicated?"',
    a: "2-minute form only. No calls, no meetings. Just fill in your info and we deliver everything straight to your inbox.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
};

export default function OmniSyncFAQ() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-heading font-bold text-foreground">Still unsure?</h2>
        <p className="mt-4 text-foreground/60 text-lg">We've removed every friction point so you get results immediately.</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {objections.map((obj) => {
          const Icon = obj.icon;
          return (
            <motion.div key={obj.q} variants={itemVariants}>
              <div
                className={`h-full rounded-3xl border border-border bg-card p-8 flex flex-col group hover:border-foreground/30 transition-all duration-300 shadow-sm hover:shadow-md`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-accent border border-border flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}
                >
                  <Icon className={`w-5 h-5 text-foreground`} />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{obj.q}</h3>
                <p className="text-foreground/60 text-base leading-relaxed">{obj.a}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
