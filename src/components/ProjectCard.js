"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Button from "./Button";

/**
 * ProjectCard Component
 * Premium Interactive 3D Project Card.
 *
 * Features:
 * - Subtle 3D perspective tilt reacting smoothly to mouse movement.
 * - Dynamic light-source shadow and specular glare spotlight.
 * - Stereoscopic elevation of internal elements (title, badges, actions).
 * - Preserves all original project links, slugs, descriptions, and highlights.
 * - Coarse-pointer & reduced-motion detection for graceful mobile fallbacks.
 * - Zero layout shifts, consistent grid dimensions.
 */
export default function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [shadow, setShadow] = useState({ x: 0, y: 4, blur: 14, opacity: 0.35 });
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

    // Restrained subtle tilt (max ~4.5 degrees)
    const rotateX = ((y - centerY) / centerY) * -4.5;
    const rotateY = ((x - centerX) / centerX) * 4.5;

    const shadowX = ((x - centerX) / centerX) * -8;
    const shadowY = 12 + ((y - centerY) / centerY) * -6;

    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px) scale3d(1.012, 1.012, 1.012)`
    );

    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.18,
    });

    setShadow({
      x: shadowX,
      y: shadowY,
      blur: 28,
      opacity: 0.55,
    });
  }, [isCoarsePointer]);

  const handleMouseEnter = useCallback(() => {
    if (isCoarsePointer) return;
    setIsHovered(true);
  }, [isCoarsePointer]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)");
    setGlare((prev) => ({ ...prev, opacity: 0 }));
    setShadow({ x: 0, y: 4, blur: 14, opacity: 0.35 });
  }, []);

  if (!project) return null;

  return (
    <article
      ref={cardRef}
      className="card interactive-project-card"
      style={{
        transform,
        boxShadow: `${shadow.x.toFixed(1)}px ${shadow.y.toFixed(1)}px ${shadow.blur}px rgba(0, 0, 0, ${shadow.opacity}), 0 0 20px rgba(56, 189, 248, ${isHovered ? 0.08 : 0})`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Specular Glare Overlay */}
      <div
        className="project-card-glare"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.2) 0%, rgba(56, 189, 248, 0.08) 40%, transparent 70%)`,
          opacity: glare.opacity,
        }}
        aria-hidden="true"
      />

      {/* Header: Status and Tech Category */}
      <div className="project-card-layer-header">
        <span className="project-card-status">
          {project.status || "In Development"}
        </span>

        {project.technologies && project.technologies[0] && (
          <span className="project-card-primary-badge">
            {project.technologies[0]}
          </span>
        )}
      </div>

      {/* Project Title */}
      <h3 className="project-card-title">
        <Link
          href={`/projects/${project.slug}`}
          className="project-card-title-link"
        >
          {project.title}
        </Link>
      </h3>

      {/* Description */}
      <p className="project-card-description">
        {project.description}
      </p>

      {/* Key Focus Highlights */}
      {project.mainFocus && project.mainFocus.length > 0 && (
        <ul className="project-card-focus-list">
          {project.mainFocus.slice(0, 3).map((item, idx) => (
            <li key={idx} className="project-card-focus-item">
              <span className="project-card-focus-dot" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Technology Tags */}
      {project.technologies && (
        <div className="project-card-tech-group">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-card-tech-tag">
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Actions: Clear Details Link + Real External Links Only */}
      <div className="project-card-actions-row">
        <Link
          href={`/projects/${project.slug}`}
          className="project-card-details-link"
        >
          <span>Read Technical Overview</span>
          <ArrowRight size={13} aria-hidden="true" />
        </Link>

        {/* Real links only (no fake buttons) */}
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
          {project.githubUrl && (
            <Button href={project.githubUrl} isExternal variant="outline" size="sm">
              <Github size={13} aria-hidden="true" />
              <span>Source</span>
            </Button>
          )}

          {project.demoUrl && (
            <Button href={project.demoUrl} isExternal variant="secondary" size="sm">
              <ExternalLink size={13} aria-hidden="true" />
              <span>Demo</span>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
