"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { personalData } from "@/data/personal";

/**
 * HeroCard Component
 * AURAL-inspired 3D tactile hardware frame with perspective tilt,
 * specular edge illumination, corner telemetry reticles, and authentic portrait.
 */
export default function HeroCard() {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handler = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e) => {
    if (isReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.18,
    });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div className="aural-hero-card-wrapper">
      <div
        ref={cardRef}
        className="aural-hero-card"
        style={{ transform }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Precision Corner Reticles */}
        <span className="aural-corner aural-corner-tl" aria-hidden="true">+</span>
        <span className="aural-corner aural-corner-tr" aria-hidden="true">+</span>
        <span className="aural-corner aural-corner-bl" aria-hidden="true">+</span>
        <span className="aural-corner aural-corner-br" aria-hidden="true">+</span>

        {/* Specular Interactive Glare Reflection */}
        <div
          className="aural-glare"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 65%)`,
            opacity: glare.opacity,
          }}
          aria-hidden="true"
        />

        {/* Central Authentic Portrait Frame */}
        <div className="aural-portrait-viewport">
          <Image
            src={personalData.profileImage}
            alt={personalData.profileImageAlt}
            fill
            sizes="(max-width: 860px) 260px, 340px"
            priority
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
          />
          <div className="aural-portrait-shadow" aria-hidden="true" />
        </div>

      </div>
    </div>
  );
}
