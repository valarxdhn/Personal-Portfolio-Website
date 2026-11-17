import Link from "next/link";
import { Github, ExternalLink, ArrowRight, Layers, Sparkles, CheckCircle2 } from "lucide-react";
import Button from "./Button";

export default function ProjectCard({ project, showFullDetails = false }) {
  if (!project) return null;

  return (
    <div
      className="card card-hover"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(11, 15, 25, 0.85) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "var(--radius-xl)",
        position: "relative",
        overflow: "hidden",
        transition: "all var(--transition-normal)",
      }}
    >
      {/* Decorative top ambient glow line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "15%",
          right: "15%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), rgba(139, 92, 246, 0.6), transparent)",
        }}
      />

      {/* Card Header */}
      <div className="card-header" style={{ marginBottom: "var(--space-4)" }}>
        <div
          className="flex items-center justify-between gap-2"
          style={{ marginBottom: "var(--space-3)" }}
        >
          <span
            className="badge badge-accent"
            style={{
              gap: "0.35rem",
              padding: "0.3rem 0.65rem",
              fontSize: "var(--text-xs)",
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "var(--accent-light)",
                boxShadow: "0 0 8px var(--accent)",
                display: "inline-block",
              }}
            />
            {project.status || "Featured Project"}
          </span>

          <Link
            href={`/projects/${project.slug}`}
            className="btn btn-ghost btn-sm"
            style={{
              padding: "0.25rem 0.65rem",
              fontSize: "var(--text-xs)",
              borderRadius: "var(--radius-full)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              transition: "all var(--transition-fast)",
            }}
          >
            <span>Overview</span>
            <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>

        <h3
          className="card-title"
          style={{
            fontSize: "var(--text-xl)",
            lineHeight: 1.3,
            fontWeight: 700,
            marginBottom: "var(--space-2)",
          }}
        >
          <Link
            href={`/projects/${project.slug}`}
            style={{
              color: "var(--text-primary)",
              textDecoration: "none",
              transition: "color var(--transition-fast)",
            }}
            className="project-card-title-link"
          >
            {project.title}
          </Link>
        </h3>

        <p
          className="card-subtitle"
          style={{
            fontSize: "var(--text-sm)",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
          }}
        >
          {project.description}
        </p>
      </div>

      {/* Card Body */}
      <div className="card-body" style={{ display: "flex", flexDirection: "column" }}>
        {project.mainFocus && project.mainFocus.length > 0 && (
          <div style={{ marginBottom: "var(--space-5)" }}>
            <span
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--accent-light)",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                marginBottom: "var(--space-2)",
              }}
            >
              <Sparkles size={11} aria-hidden="true" />
              Core Architectural Focus
            </span>
            <ul
              style={{
                listStyle: "none",
                display: "grid",
                gap: "0.35rem",
                paddingLeft: 0,
              }}
            >
              {project.mainFocus.slice(0, 3).map((focus, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-2)",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent-cyan)",
                      boxShadow: "0 0 6px rgba(6, 182, 212, 0.6)",
                      flexShrink: 0,
                    }}
                  />
                  <span>{focus}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies Badges */}
        {project.technologies && (
          <div style={{ marginTop: "auto", paddingTop: "var(--space-3)" }}>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="badge"
                  style={{
                    fontSize: "0.72rem",
                    padding: "0.22rem 0.55rem",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Card Footer with Verified Actions */}
      <div
        className="card-footer"
        style={{
          marginTop: "var(--space-5)",
          paddingTop: "var(--space-4)",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "var(--space-2)",
        }}
      >
        <div className="flex items-center gap-2 flex-wrap">
          {project.githubUrl ? (
            <Button
              href={project.githubUrl}
              isExternal
              variant="secondary"
              size="sm"
              style={{ gap: "0.35rem" }}
            >
              <Github size={13} aria-hidden="true" />
              <span>GitHub</span>
            </Button>
          ) : (
            <span
              className="badge"
              title="Repository will be linked upon public release"
              style={{
                fontSize: "0.72rem",
                opacity: 0.8,
                cursor: "default",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <Github size={12} aria-hidden="true" />
              Repo in Progress
            </span>
          )}

          {project.demoUrl ? (
            <Button
              href={project.demoUrl}
              isExternal
              variant="outline"
              size="sm"
              style={{ gap: "0.35rem" }}
            >
              <ExternalLink size={13} aria-hidden="true" />
              <span>Live Demo</span>
            </Button>
          ) : (
            <span
              className="badge"
              title="Live deployment will be made available"
              style={{
                fontSize: "0.72rem",
                opacity: 0.8,
                cursor: "default",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <ExternalLink size={12} aria-hidden="true" />
              Demo Upcoming
            </span>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="btn btn-ghost btn-sm"
          style={{
            fontSize: "var(--text-xs)",
            fontWeight: 600,
            color: "var(--accent-light)",
            padding: "0.3rem 0.5rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          <span>Deep Dive</span>
          <ArrowRight size={13} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
