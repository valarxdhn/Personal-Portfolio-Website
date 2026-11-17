"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import {
  Code2,
  Cpu,
  Terminal,
  Coffee,
  Database,
  GitBranch,
  Github,
  Layers,
} from "lucide-react";

const skillIconMap = {
  Code2,
  Cpu,
  Terminal,
  Coffee,
  Database,
  GitBranch,
  Github,
};

/**
 * SkillCard Component
 * Premium Interactive 3D Technology Card.
 *
 * Features:
 * - Subtle 3D perspective tilt reacting to cursor location.
 * - Interactive individual skill pills with tactile elevation and icon accentuation.
 * - Specular micro-glare illumination across card surface.
 * - Respects prefers-reduced-motion and touch devices.
 */
export default function SkillCard({ category, index = 0 }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg)");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  useEffect(() => {
    const coarseQuery = window.matchMedia("(pointer: coarse), (hover: none)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setIsCoarsePointer(coarseQuery.matches || motionQuery.matches);
    };

    update();
    coarseQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);
    return () => {
      coarseQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (isCoarsePointer || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5.0;
    const rotateY = ((x - centerX) / centerX) * 5.0;

    setTransform(`perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-3px)`);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.16,
    });
  }, [isCoarsePointer]);

  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)");
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  if (!category) return null;

  return (
    <div
      ref={cardRef}
      className="interactive-skill-card"
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Specular Glare Overlay */}
      <div
        className="skill-card-glare"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.22) 0%, rgba(56, 189, 248, 0.1) 35%, transparent 70%)`,
          opacity: glare.opacity,
        }}
        aria-hidden="true"
      />

      {/* Header Info */}
      <div className="skill-card-header">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-2)" }}>
          <h3 className="skill-card-title">{category.name}</h3>
          <span className="skill-card-index">0{index + 1} //</span>
        </div>
        <p className="skill-card-desc">{category.description}</p>
      </div>

      {/* Interactive Skill Pills Grid */}
      <div className="skill-pills-container">
        {category.skills.map((skill) => {
          const IconComponent = skillIconMap[skill.icon] || Code2;
          return (
            <div
              key={skill.name}
              className="interactive-skill-pill"
              tabIndex={0}
              role="group"
              aria-label={skill.name}
            >
              <span className="skill-pill-icon" aria-hidden="true">
                <IconComponent size={15} />
              </span>
              <span className="skill-pill-text">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
