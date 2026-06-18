import OmniSyncHeader from "@/components/kaamkardo/header";
import BgCanvasClient from "@/components/kaamkardo/bg-canvas-client";
import EcosystemSlider from "@/components/kaamkardo/ecosystem-slider";
import * as motion from "framer-motion/client";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-foreground selection:bg-foreground selection:text-background relative overflow-hidden">

      {/* Background: floating AI/Math formula canvas */}
      <BgCanvasClient />
      <OmniSyncHeader />

      <main
        id="main-content"
        className="flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 pt-24 pb-8 relative z-10"
      >
        {/* Social proof bar — moved to top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 mb-6 text-sm text-foreground/50 font-medium"
        >
          {[
            ["50+", "AI Tools"],
            ["1M+", "Users Daily"],
            ["#1", "Platform"],
            ["99.9%", "Uptime"],
          ].map(([stat, label], i) => (
            <motion.div 
              key={label} 
              className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-foreground/5 border border-white/5 backdrop-blur-md shadow-sm"
              whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.15)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
            >
              <span className="text-foreground/90 font-bold text-base md:text-lg">{stat}</span>
              <span>{label}</span>
            </motion.div>
          ))}
        </motion.div>

        <EcosystemSlider />
      </main>
    </div>
  );
}
