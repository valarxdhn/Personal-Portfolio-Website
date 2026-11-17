"use client";

import { useEffect, useRef } from "react";

/**
 * MaterialField Component
 * Inspired by the ThreeUI AURAL "Material Field" aesthetic.
 * Renders an ultra-smooth, lightweight, GPU-accelerated acoustic wave & particle field.
 * Zero external dependencies, auto-pausing on off-screen/background tab, and respects reduced motion.
 */
export default function MaterialField() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrameId;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };

    // Handle high DPI displays
    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    // Track mouse coordinates normalized (0 to 1)
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        mouse.targetX = (e.clientX - rect.left) / rect.width;
        mouse.targetY = (e.clientY - rect.top) / rect.height;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Floating particle field
    const particleCount = 38;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.0003,
      vy: (Math.random() - 0.5) * 0.0003,
      alpha: Math.random() * 0.5 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      phase: Math.random() * Math.PI * 2,
    }));

    // Wave parameters (simulating audio/electromagnetic harmonic curves)
    const waves = [
      { amp: 28, freq: 0.0035, speed: 0.0008, color: "rgba(56, 189, 248, 0.14)", yOffset: 0.42 },
      { amp: 42, freq: 0.0028, speed: 0.0006, color: "rgba(59, 130, 246, 0.12)", yOffset: 0.55 },
      { amp: 35, freq: 0.0042, speed: 0.0010, color: "rgba(129, 140, 248, 0.09)", yOffset: 0.68 },
      { amp: 20, freq: 0.0050, speed: 0.0012, color: "rgba(14, 165, 233, 0.08)", yOffset: 0.32 },
    ];

    let time = 0;

    const render = () => {
      if (!isVisible) return;

      time += prefersReducedMotion ? 0 : 1;

      // Mouse smoothing (lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle ambient depth gradient
      const ambientGrad = ctx.createRadialGradient(
        width * (0.3 + mouse.x * 0.4),
        height * (0.2 + mouse.y * 0.3),
        10,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.75
      );
      ambientGrad.addColorStop(0, "rgba(24, 49, 83, 0.18)");
      ambientGrad.addColorStop(0.5, "rgba(15, 23, 42, 0.08)");
      ambientGrad.addColorStop(1, "rgba(7, 9, 14, 0)");
      ctx.fillStyle = ambientGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Render acoustic harmonic wave lines
      waves.forEach((wave, wIdx) => {
        ctx.beginPath();
        const baseHeight = height * wave.yOffset + (mouse.y - 0.5) * 45 * (wIdx % 2 === 0 ? 1 : -1);
        const shiftX = (mouse.x - 0.5) * 35;

        for (let x = 0; x <= width; x += 6) {
          const wavePhase = time * wave.speed + wIdx;
          const sine1 = Math.sin((x + shiftX) * wave.freq + wavePhase);
          const sine2 = Math.cos((x - shiftX) * (wave.freq * 1.5) + wavePhase * 0.7);
          const y = baseHeight + sine1 * wave.amp + sine2 * (wave.amp * 0.4);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 1.25;
        ctx.stroke();
      });

      // 3. Render luminous floating particles
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = 1;
          if (p.x > 1) p.x = 0;
          if (p.y < 0) p.y = 1;
          if (p.y > 1) p.y = 0;
        }

        const px = p.x * width + (mouse.x - 0.5) * 20;
        const py = p.y * height + (mouse.y - 0.5) * 20;
        const currentAlpha = p.alpha + Math.sin(time * p.pulseSpeed + p.phase) * 0.15;

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(186, 230, 253, ${Math.max(0.05, Math.min(0.85, currentAlpha))})`;
        ctx.fill();
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // IntersectionObserver to pause loop when container is scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !prefersReducedMotion) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(render);
        }
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // VisibilityChange to pause on background tab
    const handleVisibility = () => {
      if (document.hidden) {
        isVisible = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        isVisible = true;
        if (!prefersReducedMotion) {
          animationFrameId = requestAnimationFrame(render);
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    // Initial trigger
    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="aural-material-field"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="aural-material-canvas" />
      <div className="aural-material-vignette" />
    </div>
  );
}
