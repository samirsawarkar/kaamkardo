"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

interface SubdomainBeforeAfterProps {
  beforeTitle: string;
  beforeItems: string[];
  afterTitle: string;
  afterItems: string[];
}

export default function SubdomainBeforeAfter({ beforeTitle, beforeItems, afterTitle, afterItems }: SubdomainBeforeAfterProps) {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-3xl border border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-950/20 p-8"
        >
          <div className="flex items-center gap-3 mb-6 text-red-500">
            <XCircle className="w-6 h-6" />
            <h3 className="text-xl font-bold">{beforeTitle}</h3>
          </div>
          <ul className="space-y-4">
            {beforeItems.map((item, i) => (
              <li key={i} className="text-foreground/70 flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-3xl border border-green-200 dark:border-green-900/50 bg-green-50/50 dark:bg-green-950/20 p-8"
        >
          <div className="flex items-center gap-3 mb-6 text-green-500">
            <CheckCircle2 className="w-6 h-6" />
            <h3 className="text-xl font-bold">{afterTitle}</h3>
          </div>
          <ul className="space-y-4">
            {afterItems.map((item, i) => (
              <li key={i} className="text-foreground flex items-start gap-3 font-medium">
                <span className="text-green-500 mt-1">✓</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
