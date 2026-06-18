"use client";

import dynamic from "next/dynamic";

const AnimatedBackground = dynamic(
  () => import("@/components/kaamkardo/bg-canvas"),
  { ssr: false }
);

export default function BgCanvasClient() {
  return <AnimatedBackground />;
}
