"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

interface SubdomainPricingProps {
  tiers: PricingTier[];
}

export default function SubdomainPricing({ tiers }: SubdomainPricingProps) {
  return (
    <section id="pricing" className="w-full max-w-5xl mx-auto px-6 py-20 scroll-mt-20 text-center">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Simple, transparent pricing</h2>
      <p className="text-foreground/60 mb-16">One-time payment. Delivered in 24 hours.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {tiers.map((tier, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-3xl p-8 border ${
              tier.recommended ? "border-foreground bg-foreground text-background shadow-xl scale-105" : "border-border bg-card text-foreground"
            } flex flex-col relative`}
          >
            {tier.recommended && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
            <p className="text-4xl font-heading font-black mb-8">{tier.price}</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              {tier.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className={tier.recommended ? "text-green-400" : "text-green-500"}>✓</span>
                  <span className={tier.recommended ? "text-background/90" : "text-foreground/70"}>{f}</span>
                </li>
              ))}
            </ul>

            <Button className={`w-full py-6 text-lg font-bold ${tier.recommended ? "bg-background text-foreground hover:bg-background/90" : "bg-foreground text-background hover:bg-foreground/90"} flex items-center justify-center gap-2 group`}>
              Select {tier.name}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-foreground/50 text-sm font-medium">
        <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-green-500" /> Secure Checkout</span>
        <span>•</span>
        <span>UPI Accepted</span>
        <span>•</span>
        <span>Visa / Mastercard</span>
      </div>
    </section>
  );
}
