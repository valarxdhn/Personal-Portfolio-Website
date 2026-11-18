"use client";

import Link from "next/link";
import { ArrowRight, Github, ExternalLink, TrainFront, Zap, Calendar } from "lucide-react";
import Button from "./Button";

/**
 * ProjectCard Component
 * Editorial Showcase Row for Architectural Noir.
 *
 * Implements Vantra Studio's structured editorial showcase:
 * - Numbered index indicator (`[ 01 ]`, `[ 02 ]`, `[ 03 ]`).
 * - Distinctive architectural domain telemetry for each project.
 * - Monospace technology tokens and status indicator.
 * - Direct route to `/projects/[slug]` for deep architectural breakdown.
 * - Preserves all existing links, slugs, descriptions, and highlights.
 */
export default function ProjectCard({ project, index = 0 }) {
  if (!project) return null;

  const projectNumber = String(index + 1).padStart(2, "0");

  // Determine distinctive domain styling and telemetry module
  let variantClass = "";
  let domainTelemetry = null;

  if (project.slug === "dynamic-train-eta") {
    variantClass = "project-variant-transit";
    domainTelemetry = (
      <div className="project-spec-module">
        <div className="project-spec-header">
          <TrainFront size={13} aria-hidden="true" />
          <span>Route Telemetry &amp; Delay Mitigation</span>
        </div>
        <div className="route-checkpoints-flow" aria-label="Route checkpoints">
          <div className="checkpoint-node">
            <span className="checkpoint-dot active" />
            <span>Origin</span>
          </div>
          <div className="checkpoint-line" />
          <div className="checkpoint-node">
            <span className="checkpoint-dot active" />
            <span>Intermediate</span>
          </div>
          <div className="checkpoint-line" />
          <div className="checkpoint-node">
            <span className="checkpoint-dot" />
            <span>Terminal</span>
          </div>
        </div>
        <div className="project-spec-metric-row">
          <span>Historical Transit Analytics</span>
          <span className="project-spec-metric-val">Dynamic Recalculation</span>
        </div>
      </div>
    );
  } else if (project.slug === "voltcharge") {
    variantClass = "project-variant-ev";
    domainTelemetry = (
      <div className="project-spec-module">
        <div className="project-spec-header">
          <Zap size={13} aria-hidden="true" />
          <span>EV Hub Specs &amp; Connector Matrix</span>
        </div>
        <div className="connector-chips-grid">
          <span className="connector-chip">CCS-2 · 150kW DC</span>
          <span className="connector-chip">Type-2 · 22kW AC</span>
          <span className="connector-chip">CHAdeMO · 50kW</span>
        </div>
        <div className="project-spec-metric-row">
          <span>Slot Availability Engine</span>
          <span className="project-spec-metric-val">Conflict-Free Lock</span>
        </div>
      </div>
    );
  } else if (project.slug === "campusloop") {
    variantClass = "project-variant-campus";
    domainTelemetry = (
      <div className="project-spec-module">
        <div className="project-spec-header">
          <Calendar size={13} aria-hidden="true" />
          <span>Collegiate Activity Feed</span>
        </div>
        <div className="campus-category-pills">
          <span className="campus-pill">Technical &amp; Hackathons</span>
          <span className="campus-pill">Workshops</span>
          <span className="campus-pill">Club Notices</span>
        </div>
        <div className="project-spec-metric-row">
          <span>Event Directory Sync</span>
          <span className="project-spec-metric-val">Realtime Alerts</span>
        </div>
      </div>
    );
  }

  return (
    <article className={`editorial-project-row ${variantClass}`}>
      {/* 1. Project Index */}
      <div>
        <span className="editorial-project-num">[ {projectNumber} ]</span>
      </div>

      {/* 2. Narrative Column */}
      <div>
        <div className="editorial-project-status">
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: project.status === "In Development" ? "var(--status-success)" : "var(--accent-platinum)",
            }}
            aria-hidden="true"
          />
          <span>{project.status || "In Development"}</span>
        </div>

        <h3 className="editorial-project-heading">
          <Link
            href={`/projects/${project.slug}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {project.title}
          </Link>
        </h3>

        <p className="editorial-project-tagline">{project.tagline}</p>
        <p className="editorial-project-desc">{project.description}</p>

        {/* Key Focus Highlights */}
        {project.mainFocus && project.mainFocus.length > 0 && (
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 var(--space-4) 0",
              display: "grid",
              gap: "6px",
            }}
          >
            {project.mainFocus.slice(0, 3).map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "8px",
                }}
              >
                <span style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 3. Spec, Tech Stack & Navigation CTAs */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
        <div>
          {/* Distinctive Domain Telemetry Visualization */}
          {domainTelemetry}

          {/* Applied Technologies */}
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "var(--space-2)",
            }}
          >
            Technologies
          </span>
          <div className="editorial-tags-row" style={{ marginBottom: "var(--space-6)" }}>
            {project.technologies.map((tech) => (
              <span key={tech} className="editorial-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "var(--space-3)", marginTop: "auto" }}>
          <Button href={`/projects/${project.slug}`} variant="primary" size="sm">
            <span>Project Details</span>
            <ArrowRight size={13} aria-hidden="true" />
          </Button>

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
