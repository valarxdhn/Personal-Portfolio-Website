"use client";

import { useEffect, useRef } from "react";

/**
 * LiveBackground Component
 *
 * Implements a high-performance, lightweight background system:
 * 1. Fixed technical cyan grid with 48px spacing at ~0.035 opacity.
 * 2. Subtle radial spotlight following cursor position via requestAnimationFrame.
 * 3. Soft atmospheric horizon glow for visual depth.
 * 4. Zero layout thrashing, hardware-accelerated transforms.
 * 5. Respects `prefers-reduced-motion` and disables mouse tracking on touch devices.
 */
export default function LiveBackground() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    // Check for touch / coarse pointer or reduced motion
    const isCoarse = window.matchMedia("(pointer: coarse), (hover: none)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isCoarse || prefersReducedMotion) {
      return;
    }

    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    let rafId = null;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let currentX = targetX;
    let currentY = targetY;
    let isVisible = false;

    // Linear interpolation for silky-smooth motion
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.12);
      currentY = lerp(currentY, targetY, 0.12);

      if (spotlight) {
        spotlight.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisible && spotlight) {
        isVisible = true;
        spotlight.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (spotlight) {
        spotlight.style.opacity = "0";
      }
    };

    const handleMouseEnter = () => {
      isVisible = true;
      if (spotlight) {
        spotlight.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="live-background" aria-hidden="true">
      {/* Layer 1: Subtle Cyan Technical Grid (48px spacing, ~0.035 opacity) */}
      <div className="live-bg-grid" />

      {/* Layer 2: Atmospheric Horizon Glow */}
      <div className="live-bg-ambient" />

      {/* Layer 3: Interactive Cursor Spotlight */}
      <div
        ref={spotlightRef}
        className="live-bg-spotlight"
        style={{
          opacity: 0,
          transform: "translate3d(50vw, 30vh, 0)",
        }}
      />
    </div>
  );
}
