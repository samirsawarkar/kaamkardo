"use client";

import { motion, Variants } from "framer-motion";
import { FileText, Camera, UserCircle, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Resume Rewrite",
    sub: "Get more interview calls",
    description: "We rewrite your resume to pass ATS and get recruiter attention.",
    icon: FileText,
    bullets: ["ATS Optimized", "Delivered in 24 hrs", "Free Revisions", "₹999 – ₹2,499"],
    cta: "Get My Resume Fixed",
    href: "/resume",
    span: "md:col-span-1",
  },
  {
    title: "Business Setup",
    sub: "Start selling tomorrow",
    description: "Website + payment gateway fully configured. You focus on customers, we handle the tech.",
    icon: Globe,
    bullets: ["Website + Payments", "Delivered in 48 hrs", "Free Revisions", "₹4,999+"],
    cta: "Launch My Business",
    href: "/business", // future subdomain route
    span: "md:col-span-2",
  },
  {
    title: "LinkedIn Makeover",
    sub: "Attract recruiters automatically",
    description: "Turn your profile into an inbound lead machine. Recruiters reach YOU.",
    icon: UserCircle,
    bullets: ["Keyword Optimized", "Delivered in 24 hrs", "Free Revisions", "₹1,999"],
    cta: "Upgrade My Profile",
    href: "/linkedin", // future subdomain route
    span: "md:col-span-2",
  },
  {
    title: "Pro Headshots",
    sub: "Command respect instantly",
    description: "Studio-quality headshots that make people take you seriously.",
    icon: Camera,
    bullets: ["5 High-Res Photos", "Delivered in 48 hrs", "Free Revisions", "₹1,499+"],
    cta: "Book My Shoot",
    href: "/photoready", // future subdomain route
    span: "md:col-span-1",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 20 } },
};

export default function OmniSyncBento() {
  return (
    <section id="services" className="w-full max-w-6xl mx-auto px-6 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <div className="mb-4 inline-block px-4 py-1.5 rounded-full bg-accent text-foreground text-sm font-semibold tracking-wide uppercase border border-border">
          Next Delivery Batch: Within 24 Hrs
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
          Stop struggling.<br />
          We do the hard work for you.
        </h2>
        <p className="mt-4 text-foreground/60 text-lg">Fast turnaround. Proven results. Zero effort on your end.</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {services.map((svc) => {
          const Icon = svc.icon;
          return (
            <motion.div key={svc.title} variants={itemVariants} className={svc.span}>
              <div className="group h-full relative rounded-3xl border border-border bg-card overflow-hidden flex flex-col hover:border-foreground/30 transition-all duration-300 shadow-sm hover:shadow-md p-8">
                
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-foreground flex items-center justify-center mb-6 transition-transform duration-300`}>
                  <Icon className="w-5 h-5 text-background" />
                </div>

                {/* Text */}
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground/40 mb-2">{svc.sub}</p>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{svc.title}</h3>
                <p className="text-foreground/60 text-base leading-relaxed mb-8 flex-1">{svc.description}</p>

                {/* Bullets */}
                <ul className="space-y-2 mb-8">
                  {svc.bullets.map((b) => (
                    <li key={b} className="text-sm font-medium text-foreground/70 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={svc.href} className="w-full">
                  <div className={`w-full bg-accent hover:bg-foreground hover:text-background text-foreground font-semibold rounded-xl py-4 flex items-center justify-center transition-all duration-300 cursor-pointer group/btn`}>
                    {svc.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
