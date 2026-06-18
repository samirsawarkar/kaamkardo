"use client";

import { motion } from "framer-motion";

interface SubdomainProofProps {
  quote: string;
  name: string;
  role: string;
  result: string;
}

export default function SubdomainProof({ quote, name, role, result }: SubdomainProofProps) {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="rounded-3xl bg-foreground text-background p-10 md:p-16 text-center"
      >
        <p className="text-2xl md:text-4xl font-heading font-bold leading-tight mb-8">
          "{quote}"
        </p>
        <div className="flex flex-col items-center gap-2">
          <p className="font-bold text-lg">{name}</p>
          <p className="text-background/70">{role}</p>
          <div className="mt-4 inline-block px-4 py-2 rounded-full bg-background/10 font-bold text-green-400">
            Result: {result}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
