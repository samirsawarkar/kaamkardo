"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    title: "Resume Makeover",
    quote: "I was getting zero replies for months. After they rewrote my resume, I got 3 interviews in 5 days.",
    name: "Rahul S.", role: "Software Engineer",
    stats: [{ label: "Interviews", value: "3" }, { label: "Delivery", value: "24 hrs" }],
  },
  {
    title: "Business Launch",
    quote: "I struggled with tech for weeks. They launched my store and I made my first sale on Day 2.",
    name: "Priya M.", role: "Independent Consultant",
    stats: [{ label: "Time to Launch", value: "48 hrs" }, { label: "First Sale", value: "Day 2" }],
  },
  {
    title: "LinkedIn Profile",
    quote: "Recruiters completely ignored me. Now I have 12 inbound offers sitting in my inbox.",
    name: "Amit K.", role: "Sales Director",
    stats: [{ label: "Profile Views", value: "+300%" }, { label: "Inbound Leads", value: "12" }],
  },
];

export default function OmniSyncCaseStudies() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <div className="mb-4 inline-block px-4 py-1.5 rounded-full bg-accent text-foreground text-sm font-semibold tracking-wide uppercase border border-border">
          Don't wait. See results like this tomorrow.
        </div>
        <h2 className="text-4xl font-heading font-bold text-foreground">Real results. Zero excuses.</h2>
        <p className="mt-4 text-foreground/60 text-lg">Join the professionals who outsourced their success to us.</p>
      </motion.div>

      <div className="flex flex-col gap-6 overflow-hidden">
        {cases.map((item, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Number Plate */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.2, delay: 0.1 }}
              className={`md:col-span-1 rounded-3xl bg-accent border border-border min-h-[160px] md:min-h-full flex items-center justify-center relative overflow-hidden`}
            >
              <span className="text-6xl font-heading font-black text-foreground/10 select-none">#{idx + 1}</span>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.2, delay: 0.15 }}
              className="md:col-span-3 rounded-3xl bg-card border border-border p-8 md:p-10 flex flex-col justify-between group hover:border-foreground/30 transition-colors"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-4">{item.title}</p>
                <p className="text-foreground text-xl md:text-2xl font-semibold leading-snug">"{item.quote}"</p>
              </div>
              <div className="mt-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-accent border border-border flex items-center justify-center`}>
                    <span className="text-foreground/50 font-bold">{item.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-bold">{item.name}</p>
                    <p className="text-foreground/50 text-xs font-medium">{item.role}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-6 h-6 text-foreground/20 group-hover:text-foreground transition-colors" />
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.2, delay: 0.2 }}
              className="md:col-span-1 rounded-3xl bg-card border border-border p-8 flex flex-col justify-center gap-8 hover:border-foreground/30 transition-colors"
            >
              {item.stats.map((s, i) => (
                <div key={i}>
                  <motion.p
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.3 + i * 0.1 }}
                    className={`text-4xl font-heading font-black text-foreground`}
                  >
                    {s.value}
                  </motion.p>
                  <p className="text-foreground/50 text-sm font-medium mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
