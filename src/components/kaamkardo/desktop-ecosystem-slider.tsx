"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const DESKTOP_QUERY = "(min-width: 768px)";

const EcosystemSlider = dynamic(
  () => import("@/components/kaamkardo/ecosystem-slider"),
  { ssr: false }
);

function subscribeToDesktopQuery(callback: () => void) {
  const mediaQuery = window.matchMedia(DESKTOP_QUERY);
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getDesktopSnapshot() {
  return window.matchMedia(DESKTOP_QUERY).matches;
}

export default function DesktopEcosystemSlider() {
  const isDesktop = useSyncExternalStore(
    subscribeToDesktopQuery,
    getDesktopSnapshot,
    () => false
  );

  if (!isDesktop) {
    return null;
  }

  return <EcosystemSlider />;
}
