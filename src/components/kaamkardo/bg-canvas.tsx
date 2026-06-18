"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = window.innerWidth;
    let H = window.innerHeight;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    resize();
    window.addEventListener("resize", resize);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ── Floating orbs (soft blobs of color) ──────────────
    type Orb = {
      x: number; y: number;
      baseX: number; baseY: number;
      radius: number;
      color: string;
      phaseX: number; phaseY: number;
      speed: number;
      drift: number;
    };

    const orbColors = [
      "56,189,248",   // sky
      "167,139,250",  // violet
      "52,211,153",   // emerald
      "251,113,133",  // rose
      "34,211,238",   // cyan
      "251,191,36",   // amber
    ];

    const orbs: Orb[] = [];
    for (let i = 0; i < 6; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H;
      orbs.push({
        x, y,
        baseX: x,
        baseY: y,
        radius: 200 + Math.random() * 300,
        color: orbColors[i % orbColors.length],
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
        speed: 0.0002 + Math.random() * 0.0003,
        drift: 80 + Math.random() * 120,
      });
    }

    // ── Dot grid ─────────────────────────────────────────
    const DOT_SPACING = 50;

    let t = 0;

    const draw = () => {
      t++;
      const dark = document.documentElement.classList.contains("dark");

      // Clear
      ctx.fillStyle = dark ? "#0A0A0A" : "#FFFFFF";
      ctx.fillRect(0, 0, W, H);

      // ── Draw orbs (large soft glowing blobs) ────────────
      for (const orb of orbs) {
        orb.x = orb.baseX + Math.sin(t * orb.speed + orb.phaseX) * orb.drift;
        orb.y = orb.baseY + Math.cos(t * orb.speed * 0.8 + orb.phaseY) * orb.drift * 0.7;

        // Slow wrap-around drift
        orb.baseX += Math.sin(t * 0.00005 + orb.phaseX) * 0.15;
        orb.baseY += Math.cos(t * 0.00004 + orb.phaseY) * 0.1;
        if (orb.baseX < -orb.radius) orb.baseX = W + orb.radius * 0.5;
        if (orb.baseX > W + orb.radius) orb.baseX = -orb.radius * 0.5;
        if (orb.baseY < -orb.radius) orb.baseY = H + orb.radius * 0.5;
        if (orb.baseY > H + orb.radius) orb.baseY = -orb.radius * 0.5;

        const alpha = dark ? 0.08 : 0.06;
        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        grad.addColorStop(0, `rgba(${orb.color},${alpha})`);
        grad.addColorStop(0.5, `rgba(${orb.color},${alpha * 0.4})`);
        grad.addColorStop(1, `rgba(${orb.color},0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(orb.x - orb.radius, orb.y - orb.radius, orb.radius * 2, orb.radius * 2);
      }

      // ── Subtle dot grid ──────────────────────────────────
      for (let x = DOT_SPACING; x < W; x += DOT_SPACING) {
        for (let y = DOT_SPACING; y < H; y += DOT_SPACING) {
          // Subtle wave pulse
          const wave = 0.5 + 0.5 * Math.sin(t * 0.012 + x * 0.015 + y * 0.015);
          const dotAlpha = dark
            ? 0.03 + wave * 0.06
            : 0.02 + wave * 0.04;
          const dotR = 0.6 + wave * 0.6;

          ctx.beginPath();
          ctx.arc(x, y, dotR, 0, Math.PI * 2);
          ctx.fillStyle = dark
            ? `rgba(255,255,255,${dotAlpha})`
            : `rgba(0,0,0,${dotAlpha})`;
          ctx.fill();
        }
      }

      // ── Center vignette ────────────────────────────────
      const vigR = dark ? 10 : 255;
      const vig = ctx.createRadialGradient(W / 2, H / 2, H * 0.15, W / 2, H / 2, H * 0.9);
      vig.addColorStop(0, `rgba(${vigR},${vigR},${vigR},0)`);
      vig.addColorStop(1, `rgba(${vigR},${vigR},${vigR},0.55)`);
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);

      animId = reducedMotion ? -1 : requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none blur-[3px] scale-105"
      style={{ zIndex: 0 }}
    />
  );
}
