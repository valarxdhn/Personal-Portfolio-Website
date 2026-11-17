"use client";

import { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal Component
 * Lightweight, hardware-accelerated scroll reveal wrapper using native IntersectionObserver.
 *
 * Features:
 * - Subtle fade-in with 16px upward motion (250–350ms duration)
 * - Fires once when entering viewport, then disconnects observer (zero redundant overhead)
 * - Supports staggered delays via `delay` prop
 * - Respects `prefers-reduced-motion` (instant visibility, zero motion)
 * - Fails safe to visible on SSR / hydration fallback
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  style = {},
  as: Component = "div",
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    // Trigger when 10% of element enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Component
      ref={ref}
      className={`scroll-reveal ${isVisible ? "is-revealed" : ""} ${className}`.trim()}
      style={{
        ...style,
        ...(delay > 0 && isVisible ? { transitionDelay: `${delay}ms` } : {}),
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
