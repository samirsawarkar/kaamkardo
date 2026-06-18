"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface SubdomainWhatYouGetProps {
  items: string[];
}

export default function SubdomainWhatYouGet({ items }: SubdomainWhatYouGetProps) {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">Exactly what you get</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border"
          >
            <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
            <span className="text-lg font-medium text-foreground">{item}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
