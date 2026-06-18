"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GlobalCTAs() {
  const pathname = usePathname();
  
  // Don't show sticky CTAs on subdomain landing pages (e.g. /resume) to avoid distraction
  if (pathname !== "/") return null;

  return (
    <>
      {/* Floating WhatsApp Button (Desktop & Mobile) */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 100 }}
        className="fixed bottom-6 right-6 z-50 md:bottom-10 md:right-10"
      >
        <a 
          href="https://wa.me/919999999999?text=Hi,%20I%20want%20to%20know%20more%20about%20KaamKarDo%20services" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:scale-110 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </motion.div>

      {/* Sticky Mobile CTA Bottom Bar (Mobile Only) */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 80 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-lg border-t border-border p-4 pb-8 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
      >
        <Link href="#services" className="w-full block">
          <button className="w-full bg-foreground text-background font-bold py-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform">
            Start Now <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </motion.div>
    </>
  );
}
