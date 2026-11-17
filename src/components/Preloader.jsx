"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE_EXIT = [0.22, 1, 0.36, 1];

/**
 * Preloader Component
 *
 * Sleek, non-intrusive initial loading screen:
 * - Full-screen fixed overlay in #0B0F17
 * - Pulsing cyan beacon dot + DHANUSH monospaced brandmark
 * - Thin 2px cyan loading bar filling smoothly over 850ms
 * - Smooth AnimatePresence exit (opacity: 0, y: -16, 400ms)
 * - Session-scoped via sessionStorage (runs once per session, bypasses on refresh)
 * - Automatically skips if prefers-reduced-motion is active
 */
export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Session check: Run once per browser session
    try {
      const hasShown = sessionStorage.getItem("portfolio_preloader_shown");
      if (hasShown) {
        setLoading(false);
        return;
      }
    } catch {
      // In case storage is inaccessible
    }

    // 2. Accessibility: Skip immediately if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      try {
        sessionStorage.setItem("portfolio_preloader_shown", "true");
      } catch {}
      setLoading(false);
      return;
    }

    // 3. Smooth loading sequence: 850ms bar fill + 100ms settle
    const timer = setTimeout(() => {
      setLoading(false);
      try {
        sessionStorage.setItem("portfolio_preloader_shown", "true");
      } catch {}
    }, 950);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: EASE_EXIT }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: "#0B0F17",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "auto",
          }}
          aria-hidden="true"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.25rem",
              width: "160px",
            }}
          >
            {/* Pulsing Cyan Dot & Name */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#38BDF8",
                  animation: "preloaderPulse 1.2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  color: "#F8FAFC",
                  fontFamily: "var(--font-mono, monospace)",
                }}
              >
                DHANUSH
              </span>
            </div>

            {/* Thin 2px Cyan Progress Bar Filling over 850ms */}
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderRadius: "9999px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  transformOrigin: "left",
                  backgroundColor: "#38BDF8",
                  boxShadow: "0 0 8px #38BDF8",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
