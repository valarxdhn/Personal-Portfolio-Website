"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { personalData } from "@/data/personal";

/**
 * HeroCard Component
 * Premium Interactive 3D Tactile Profile Card.
 *
 * Features:
 * - True CSS 3D perspective tilt (`rotateX`, `rotateY`, `scale3d`).
 * - Layered stereoscopic depth (`preserve-3d` with `translateZ` on image & reticles).
 * - Dynamic light-source cast shadow reacting inversely to cursor position.
 * - Specular radial glare illumination tracking cursor movement.
 * - Smooth transition dampening on enter/leave.
 * - Automatic mobile/coarse-pointer detection to disable tilt and preserve clean presentation.
 * - Zero image distortion, preserving Dhanush's authentic portrait.
 */
export default function HeroCard() {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [shadow, setShadow] = useState({ x: 0, y: 16, blur: 36, opacity: 0.5 });
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Detect mobile touch / coarse pointers and reduced-motion preferences
    const coarseQuery = window.matchMedia("(pointer: coarse), (hover: none)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateCapabilities = () => {
      setIsCoarsePointer(coarseQuery.matches || motionQuery.matches);
    };

    updateCapabilities();

    coarseQuery.addEventListener("change", updateCapabilities);
    motionQuery.addEventListener("change", updateCapabilities);

    return () => {
      coarseQuery.removeEventListener("change", updateCapabilities);
      motionQuery.removeEventListener("change", updateCapabilities);
    };
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (isCoarsePointer || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle restrained tilt angles (max ~6.5 degrees)
    const rotateX = ((y - centerY) / centerY) * -6.5;
    const rotateY = ((x - centerX) / centerX) * 6.5;

    // Calculate realistic dynamic drop shadow moving away from cursor
    const shadowOffsetX = ((x - centerX) / centerX) * -12;
    const shadowOffsetY = 16 + ((y - centerY) / centerY) * -8;

    setTransform(
      `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px) scale3d(1.018, 1.018, 1.018)`
    );

    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.22,
    });

    setShadow({
      x: shadowOffsetX,
      y: shadowOffsetY,
      blur: 42,
      opacity: 0.6,
    });
  }, [isCoarsePointer]);

  const handleMouseEnter = useCallback(() => {
    if (isCoarsePointer) return;
    setIsHovered(true);
  }, [isCoarsePointer]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransform("perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)");
    setGlare((prev) => ({ ...prev, opacity: 0 }));
    setShadow({ x: 0, y: 16, blur: 36, opacity: 0.5 });
  }, []);

  return (
    <div className="aural-hero-card-wrapper">
      <div
        ref={cardRef}
        className="aural-hero-card"
        style={{
          transform,
          boxShadow: `${shadow.x.toFixed(1)}px ${shadow.y.toFixed(1)}px ${shadow.blur}px rgba(0, 0, 0, ${shadow.opacity}), 0 0 24px rgba(56, 189, 248, ${isHovered ? 0.14 : 0.05})`,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Precision 3D Elevated Corner Reticles */}
        <span className="aural-corner aural-corner-tl" aria-hidden="true">+</span>
        <span className="aural-corner aural-corner-tr" aria-hidden="true">+</span>
        <span className="aural-corner aural-corner-bl" aria-hidden="true">+</span>
        <span className="aural-corner aural-corner-br" aria-hidden="true">+</span>

        {/* Specular Interactive Lighting Glare */}
        <div
          className="aural-glare"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.32) 0%, rgba(56, 189, 248, 0.15) 30%, rgba(255, 255, 255, 0) 68%)`,
            opacity: glare.opacity,
          }}
          aria-hidden="true"
        />

        {/* Central Authentic Portrait Frame (Elevated with translateZ) */}
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
