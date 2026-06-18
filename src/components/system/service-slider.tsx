"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface ServiceSliderProps {
  children: React.ReactNode;
}

export function ServiceSlider({ children }: ServiceSliderProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
    // Update on resize
    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [children]);

  return (
    <div className="w-full relative overflow-hidden py-10 cursor-grab active:cursor-grabbing">
      {/* Edge gradient overlays to indicate scrollability */}
      <div className="absolute top-0 bottom-0 left-0 w-8 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-8 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      
      <motion.div ref={carouselRef} className="overflow-hidden w-full">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          className="flex gap-6 px-4 md:px-0 w-max"
        >
          {children}
        </motion.div>
      </motion.div>
      
      {/* Indicator Text */}
      <div className="flex justify-center mt-8">
        <p className="text-sm font-bold tracking-widest uppercase text-foreground/30 flex items-center gap-2">
          <span className="w-8 h-[1px] bg-foreground/20"></span>
          Drag to explore
          <span className="w-8 h-[1px] bg-foreground/20"></span>
        </p>
      </div>
    </div>
  );
}
