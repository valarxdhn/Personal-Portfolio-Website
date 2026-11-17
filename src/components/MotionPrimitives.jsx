"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const EASE_OUT_CUBIC = [0.22, 1, 0.36, 1];

/**
 * RevealSection Component
 * Fades in and slides up when 15% of the element enters the viewport.
 * Uses GPU-accelerated opacity and translateY only.
 */
export function RevealSection({
  children,
  className = "",
  style = {},
  amount = 0.15,
  delay = 0,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.45,
        delay,
        ease: EASE_OUT_CUBIC,
      }}
      className={className}
      style={{ willChange: "transform, opacity", ...style }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerGrid Component
 * Orchestrates a cascading entrance (staggerChildren: 0.08s) across child elements.
 */
export function StaggerGrid({
  children,
  className = "",
  style = {},
  staggerDelay = 0.08,
  amount = 0.1,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style} {...props}>
        {children}
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem Component
 * Individual item inside a StaggerGrid container.
 */
export function StaggerItem({
  children,
  className = "",
  style = {},
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style} {...props}>
        {children}
      </div>
    );
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: EASE_OUT_CUBIC,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className={className}
      style={{ willChange: "transform, opacity", ...style }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * SubtleParallax Component
 * Gentle vertical parallax offset (y: [-15, 15]) on desktop only (min-width: 768px).
 * Automatically disabled on mobile or if reduced motion is preferred.
 */
export function SubtleParallax({
  children,
  className = "",
  style = {},
  offset = 15,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  if (shouldReduceMotion || !isDesktop) {
    return (
      <div ref={ref} className={className} style={style} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ y, ...style }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
