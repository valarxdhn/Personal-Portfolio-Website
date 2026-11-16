import Link from "next/link";
import { Github, ExternalLink, ArrowRight, Layers } from "lucide-react";
import Button from "./Button";

export default function ProjectCard({ project, showFullDetails = false }) {
  if (!project) return null;

  return (
    <div className="card card-hover" style={{ height: "100%" }}>
      <div className="card-header">
        <div className="flex items-center justify-between gap-2" style={{ marginBottom: "var(--space-2)" }}>
          <span className="badge badge-accent">
            <Layers size={12} aria-hidden="true" />
            {project.status || "Featured Project"}
          </span>
          <Link
            href={`/projects/${project.slug}`}
            className="btn btn-ghost btn-sm"
            style={{ padding: "0.2rem 0.5rem", fontSize: "var(--text-xs)", gap: "0.25rem" }}
          >
            Details
            <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
        <h3 className="card-title" style={{ fontSize: "var(--text-xl)" }}>
          <Link
            href={`/projects/${project.slug}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {project.title}
          </Link>
        </h3>
        <p className="card-subtitle">{project.description}</p>
      </div>

      <div className="card-body">
        {project.mainFocus && project.mainFocus.length > 0 && (
          <div style={{ marginBottom: "var(--space-4)" }}>
            <span
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--text-muted)",
                display: "block",
                marginBottom: "var(--space-2)",
              }}
            >
              Main Focus
            </span>
            <ul
              style={{
                listStyle: "none",
                display: "grid",
                gap: "var(--space-1)",
                paddingLeft: 0,
              }}
            >
              {project.mainFocus.map((focus, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-2)",
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent)",
                      display: "inline-block",
                    }}
                  />
                  {focus}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.technologies && (
          <div style={{ marginTop: "auto", paddingTop: "var(--space-2)" }}>
            <span
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--text-muted)",
                display: "block",
                marginBottom: "var(--space-2)",
              }}
            >
              Technologies
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="card-footer" style={{ flexWrap: "wrap", gap: "var(--space-2)" }}>
        {project.githubUrl ? (
          <Button
            href={project.githubUrl}
            isExternal
            variant="secondary"
            size="sm"
            style={{ gap: "var(--space-2)" }}
          >
            <Github size={14} aria-hidden="true" />
            GitHub
          </Button>
        ) : (
          <span
            className="badge"
            title="Repository link will be updated by project owner"
            style={{ opacity: 0.75, cursor: "not-allowed" }}
          >
            <Github size={13} aria-hidden="true" />
            Repo in Progress
          </span>
        )}

        {project.demoUrl ? (
          <Button
            href={project.demoUrl}
            isExternal
            variant="outline"
            size="sm"
            style={{ gap: "var(--space-2)" }}
          >
            <ExternalLink size={14} aria-hidden="true" />
            Live Demo
          </Button>
        ) : (
          <span
            className="badge"
            title="Live demonstration will be provided once deployed"
            style={{ opacity: 0.75, cursor: "not-allowed" }}
          >
            <ExternalLink size={13} aria-hidden="true" />
            Demo Upcoming
          </span>
        )}
      </div>
    </div>
  );
}
