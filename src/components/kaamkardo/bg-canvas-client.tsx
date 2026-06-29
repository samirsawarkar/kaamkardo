"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const AnimatedBackground = dynamic(
  () => import("@/components/kaamkardo/bg-canvas"),
  { ssr: false }
);

type NavigatorWithConnection = Navigator & {
  connection?: {
    effectiveType?: string;
    saveData?: boolean;
  };
};

export default function BgCanvasClient() {
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const connection = (navigator as NavigatorWithConnection).connection;
    const isConstrainedConnection =
      connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? "");

    if (isSmallScreen || prefersReducedMotion || isConstrainedConnection) {
      return;
    }

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(() => setShowCanvas(true), {
        timeout: 3000,
      });

      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(() => setShowCanvas(true), 2500);
    return () => globalThis.clearTimeout(timeoutId);
  }, []);

  if (!showCanvas) {
    return null;
  }

  return <AnimatedBackground />;
}
