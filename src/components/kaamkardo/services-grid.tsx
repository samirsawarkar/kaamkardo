"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, FileText, Camera, Globe } from "lucide-react";
import Link from "next/link";
import { useState, MouseEvent } from "react";

const services = [
  {
    id: "resume",
    icon: FileText,
    title: "Resume",
    initialText: "Get more interviews",
    hoverText: "Done in 24 hours",
    href: "/resume",
    colSpan: "md:col-span-1",
  },
  {
    id: "business",
    icon: Globe,
    title: "Business",
    initialText: "Launch your platform",
    hoverText: "Done in 48 hours",
    href: "/business",
    colSpan: "md:col-span-1",
  },
  {
    id: "photo",
    icon: Camera,
    title: "Photo",
    initialText: "Command respect",
    hoverText: "Studio ready",
    href: "/photoready",
    colSpan: "md:col-span-1",
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Cursor tracking for subtle glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Icon = service.icon;

  return (
    <Link href={service.href} className={`block h-[400px] w-full ${service.colSpan}`}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative group h-full w-full rounded-[2rem] border border-border bg-card overflow-hidden transition-colors duration-500 hover:border-foreground/20 cursor-pointer flex flex-col justify-between p-10"
      >
        {/* Subtle Cursor Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100 dark:group-hover:opacity-20"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(0,0,0,0.05),
                transparent 80%
              )
            `,
          }}
        />
        {/* Dark mode variant glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 hidden dark:block dark:group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(255,255,255,0.08),
                transparent 80%
              )
            `,
          }}
        />

        <div className="relative z-10 flex justify-between items-start">
          <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
            <Icon className="w-8 h-8" />
          </div>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4 tracking-tight">
            {service.title}
          </h2>
          
          <div className="relative h-8 overflow-hidden">
            <motion.p
              initial={false}
              animate={{ y: isHovered ? -40 : 0, opacity: isHovered ? 0 : 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute text-xl text-foreground/50 font-medium"
            >
              {service.initialText}
            </motion.p>
            <motion.p
              initial={false}
              animate={{ y: isHovered ? 0 : 40, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute text-xl text-foreground font-semibold"
            >
              {service.hoverText}
            </motion.p>
          </div>
        </div>

        {/* CTA Button overlay - appears on hover */}
        <motion.div
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.4 }}
          className="absolute right-10 top-10 flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-foreground"
        >
          Enter {service.title} <ArrowRight className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </Link>
  );
}

export default function ServicesGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 pb-32">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {services.map((svc) => (
          <ServiceCard key={svc.id} service={svc} />
        ))}
      </motion.div>
    </section>
  );
}
