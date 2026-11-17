"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * ScrollProgress Component
 * Fixed 2px cyan progress bar at the very top edge of the viewport.
 * Powered by Framer Motion's useScroll and useSpring for responsive, stutter-free tracking.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{
        scaleX,
        transformOrigin: "0%",
      }}
      aria-hidden="true"
    />
  );
}
