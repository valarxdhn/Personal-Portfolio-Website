"use client";

import { useEffect, useRef } from "react";

/**
 * MaterialField Component
 * Premium 3D Particle Constellation & Harmonic Depth Field.
 *
 * Implements a lightweight, GPU-accelerated 3D coordinate space with:
 * - True 3D perspective projection (X, Y, Z coordinates).
 * - Depth-dependent particle sizes, velocity, and parallax response.
 * - Sub-pixel luminous connecting filaments in 3D Euclidean proximity.
 * - Gentle ambient radial illumination anchored to cursor movement.
 * - Auto-pausing on off-screen viewport (IntersectionObserver) & inactive tabs.
 * - Full respect for `prefers-reduced-motion` with static depth presentation.
 * - Zero external library dependencies (pure native Canvas 2D).
 */
export default function MaterialField() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrameId;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;

    // Camera & Mouse tracking with smooth lerp
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      centerX = width / 2;
      centerY = height / 2;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    // Track mouse coordinates normalized (-1 to 1)
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        mouse.targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        mouse.targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 3D Particles Configuration
    const focalLength = 320;
    const particleCount = 44; // Balanced count for elegance and performance
    const maxZ = 650;
    const minZ = 40;

    const particles = Array.from({ length: particleCount }, () => ({
      x: (Math.random() - 0.5) * width * 1.4,
      y: (Math.random() - 0.5) * height * 1.4,
      z: Math.random() * (maxZ - minZ) + minZ,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      vz: (Math.random() - 0.5) * 0.22,
      baseRadius: Math.random() * 1.5 + 0.8,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      phase: Math.random() * Math.PI * 2,
    }));

    // Harmonic wave filaments for the subtle AURAL floor
    const waves = [
      { amp: 22, freq: 0.0032, speed: 0.0007, color: "rgba(56, 189, 248, 0.11)", yOffset: 0.48 },
      { amp: 34, freq: 0.0026, speed: 0.0005, color: "rgba(59, 130, 246, 0.08)", yOffset: 0.62 },
    ];

    let time = 0;

    const render = () => {
      if (!isVisible) return;

      time += prefersReducedMotion ? 0 : 1;

      // Smooth mouse interpolation (spring lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.045;
      mouse.y += (mouse.targetY - mouse.y) * 0.045;

      ctx.clearRect(0, 0, width, height);

      // 1. Soft Ambient Depth Lighting Gradient
      const ambientX = centerX + mouse.x * 60;
      const ambientY = centerY * 0.6 + mouse.y * 40;
      const ambientGrad = ctx.createRadialGradient(
        ambientX,
        ambientY,
        15,
        centerX,
        centerY,
        Math.max(width, height) * 0.65
      );
      ambientGrad.addColorStop(0, "rgba(56, 189, 248, 0.07)");
      ambientGrad.addColorStop(0.4, "rgba(15, 23, 42, 0.04)");
      ambientGrad.addColorStop(1, "rgba(7, 9, 14, 0)");
      ctx.fillStyle = ambientGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Harmonic Ambient Waves (Lower Depth Horizon)
      waves.forEach((wave, wIdx) => {
        ctx.beginPath();
        const baseHeight = height * wave.yOffset + mouse.y * 25 * (wIdx === 0 ? 1 : -1);
        const shiftX = mouse.x * 30;

        for (let x = 0; x <= width; x += 8) {
          const wavePhase = time * wave.speed + wIdx * 1.5;
          const sine1 = Math.sin((x + shiftX) * wave.freq + wavePhase);
          const sine2 = Math.cos((x - shiftX) * (wave.freq * 1.4) + wavePhase * 0.8);
          const y = baseHeight + sine1 * wave.amp + sine2 * (wave.amp * 0.35);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 1.0;
        ctx.stroke();
      });

      // 3. Update & Project 3D Particles
      const projected = [];
      const halfW = width * 0.75;
      const halfH = height * 0.75;

      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.z += p.vz;

          // Wrap 3D boundaries smoothly
          if (p.x < -halfW) p.x = halfW;
          if (p.x > halfW) p.x = -halfW;
          if (p.y < -halfH) p.y = halfH;
          if (p.y > halfH) p.y = -halfH;
          if (p.z < minZ) p.z = maxZ;
          if (p.z > maxZ) p.z = minZ;
        }

        // Camera perspective projection
        const scale = focalLength / (focalLength + p.z);
        // Mouse parallax: particles closer (larger scale) move more
        const parallaxFactor = (1.2 - scale) * 45;
        const screenX = centerX + p.x * scale + mouse.x * parallaxFactor;
        const screenY = centerY + p.y * scale + mouse.y * parallaxFactor;

        // Radius & Alpha scale with depth (near = brighter & larger, far = faint & smaller)
        const radius = Math.max(0.4, p.baseRadius * scale * 1.6);
        const pulse = Math.sin(time * p.pulseSpeed + p.phase) * 0.12;
        const alpha = Math.max(0.08, Math.min(0.75, scale * 0.85 + pulse));

        projected.push({
          screenX,
          screenY,
          radius,
          alpha,
          scale,
          z: p.z,
        });
      });

      // 4. Draw 3D Proximity Connecting Filaments
      const maxConnectDistSq = 110 * 110;
      ctx.lineWidth = 0.75;

      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        if (p1.screenX < -20 || p1.screenX > width + 20 || p1.screenY < -20 || p1.screenY > height + 20) {
          continue;
        }

        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dx = p1.screenX - p2.screenX;
          const dy = p1.screenY - p2.screenY;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxConnectDistSq) {
            // Also enforce 3D z-distance so filaments don't connect particles vastly far apart in depth
            const dz = Math.abs(p1.z - p2.z);
            if (dz < 160) {
              const distFactor = 1 - Math.sqrt(distSq) / 110;
              const zFactor = 1 - dz / 160;
              const lineAlpha = distFactor * zFactor * Math.min(p1.alpha, p2.alpha) * 0.35;

              if (lineAlpha > 0.02) {
                ctx.beginPath();
                ctx.moveTo(p1.screenX, p1.screenY);
                ctx.lineTo(p2.screenX, p2.screenY);
                ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha.toFixed(3)})`;
                ctx.stroke();
              }
            }
          }
        }
      }

      // 5. Draw 3D Particle Nodes
      projected.forEach((p) => {
        if (p.screenX >= -10 && p.screenX <= width + 10 && p.screenY >= -10 && p.screenY <= height + 10) {
          ctx.beginPath();
          ctx.arc(p.screenX, p.screenY, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(186, 230, 253, ${p.alpha.toFixed(3)})`;
          ctx.fill();

          // Subtle glow aura for close foreground particles
          if (p.scale > 0.65) {
            ctx.beginPath();
            ctx.arc(p.screenX, p.screenY, p.radius * 2.2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56, 189, 248, ${(p.alpha * 0.22).toFixed(3)})`;
            ctx.fill();
          }
        }
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // Pause when off-screen
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

    // Pause on background tab
    const handleVisibility = () => {
      if (document.hidden) {
        isVisible = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        isVisible = true;
        if (!prefersReducedMotion) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(render);
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    // Initial render call
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
