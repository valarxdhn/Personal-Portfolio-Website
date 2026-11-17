import Link from "next/link";
import { ArrowRight, Github, ExternalLink, Code2 } from "lucide-react";
import Button from "./Button";

export default function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <article
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "var(--space-6)",
        background: "var(--bg-secondary)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        transition: "border-color var(--transition-fast), transform var(--transition-fast)",
      }}
    >
      {/* Header: Status and Tech Category */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-2)",
          marginBottom: "var(--space-3)",
          fontSize: "var(--text-xs)",
        }}
      >
        <span
          style={{
            fontWeight: 600,
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {project.status || "In Development"}
        </span>

        {project.technologies && project.technologies[0] && (
          <span
            style={{
              padding: "0.15rem 0.5rem",
              borderRadius: "var(--radius-sm)",
              backgroundColor: "var(--bg-tertiary)",
              color: "var(--text-secondary)",
              fontSize: "var(--text-xs)",
              border: "1px solid var(--border)",
            }}
          >
            {project.technologies[0]}
          </span>
        )}
      </div>

      {/* Project Title */}
      <h3
        style={{
          fontSize: "var(--text-xl)",
          fontWeight: 700,
          lineHeight: 1.3,
          marginBottom: "var(--space-2)",
        }}
      >
        <Link
          href={`/projects/${project.slug}`}
          style={{
            color: "var(--text-primary)",
            textDecoration: "none",
          }}
          className="hover:text-accent"
        >
          {project.title}
        </Link>
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "var(--text-sm)",
          color: "var(--text-secondary)",
          lineHeight: 1.6,
          marginBottom: "var(--space-4)",
        }}
      >
        {project.description}
      </p>

      {/* Key Focus Highlights */}
      {project.mainFocus && project.mainFocus.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 var(--space-4) 0",
            display: "grid",
            gap: "0.35rem",
          }}
        >
          {project.mainFocus.slice(0, 3).map((item, idx) => (
            <li
              key={idx}
              style={{
                fontSize: "var(--text-xs)",
                color: "var(--text-muted)",
                display: "flex",
                alignItems: "center",
                gap: "var(--space-2)",
              }}
            >
              <span
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent)",
                  flexShrink: 0,
                }}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Technology Tags */}
      {project.technologies && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-1)",
            marginTop: "auto",
            paddingTop: "var(--space-3)",
            marginBottom: "var(--space-4)",
          }}
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: "0.72rem",
                padding: "0.2rem 0.5rem",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "var(--bg-tertiary)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Actions: Single Clear Project Details Link + Real External Links Only */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "var(--space-2)",
          paddingTop: "var(--space-3)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <Link
          href={`/projects/${project.slug}`}
          style={{
            fontSize: "var(--text-xs)",
            fontWeight: 600,
            color: "var(--accent)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
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
