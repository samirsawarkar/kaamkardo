"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FileText, Camera, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const tabs = [
  {
    id: "resume",
    label: "Resume",
    icon: FileText,
    title: "Resume Rewrite",
    description: "We rewrite your resume to pass ATS algorithms and get recruiter attention immediately. No templates, just proven formats that work.",
    cta: "Fix My Resume",
    href: "/resume"
  },
  {
    id: "photo",
    label: "Photo",
    icon: Camera,
    title: "Studio Headshots",
    description: "Studio-quality headshots that make people take you seriously. Elevate your LinkedIn and professional presence instantly.",
    cta: "Get My Photos",
    href: "/photo"
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: MessageCircle,
    title: "Direct Support",
    description: "Talk to our team directly on WhatsApp. Get instant support, custom requests, and priority handling for all your needs.",
    cta: "Start Chat",
    href: "https://wa.me/919999999999"
  }
];

export function ServiceTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center mt-12 px-4">

      {/* ── Glassy Card Container ── */}
      <div
        className="w-full rounded-3xl shadow-2xl overflow-hidden relative"
        style={{
          backdropFilter: "blur(48px) saturate(200%) brightness(1.08)",
          WebkitBackdropFilter: "blur(48px) saturate(200%) brightness(1.08)",
          background: "var(--glass-bg)",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* Shine / reflection streak */}
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 40%, transparent 60%)",
            zIndex: 1,
          }}
        />
        <div className="relative z-10 p-6 md:p-10 flex flex-col items-center">

          {/* Central Segmented Control Navbar */}
          <div
            className="flex items-center gap-1 p-1.5 rounded-full border border-foreground/10 mb-10 shadow-inner"
            style={{
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              background: "rgba(128,128,128,0.12)",
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 z-10 flex items-center gap-2 ${activeTab.id === tab.id ? "text-background" : "text-foreground hover:text-foreground/70"
                  }`}
              >
                {activeTab.id === tab.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-foreground rounded-full -z-10 shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Content Area */}
          <div className="w-full relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col items-center text-center px-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-foreground/10 text-foreground flex items-center justify-center mb-5 border border-foreground/10 shadow-sm">
                  <activeTab.icon className="w-8 h-8" />
                </div>

                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  {activeTab.title}
                </h2>

                <p className="text-foreground/70 text-lg font-medium leading-relaxed max-w-lg mx-auto mb-8">
                  {activeTab.description}
                </p>

                <Link href={activeTab.href}>
                  <Button size="lg" className="rounded-full px-8 py-6 text-lg font-bold group">
                    {activeTab.cta}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

    </div>
  );
}
