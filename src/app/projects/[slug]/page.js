import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  CheckCircle2,
  Layers,
  Code2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Button from "@/components/Button";
import { projectsData } from "@/data/projects";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.shortTitle} | Projects | DHANUSH`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="section" style={{ paddingTop: "var(--space-10)", minHeight: "85vh" }}>
      <div className="container" style={{ maxWidth: "1000px" }}>
        {/* Navigation Breadcrumb Pill */}
        <div style={{ marginBottom: "var(--space-6)" }}>
          <Link
            href="/projects"
            className="btn btn-ghost btn-sm"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              padding: "0.35rem 0.85rem",
              borderRadius: "var(--radius-full)",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              fontSize: "var(--text-xs)",
              color: "var(--text-secondary)",
              transition: "all var(--transition-fast)",
            }}
          >
            <ArrowLeft size={14} aria-hidden="true" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Project Header Banner */}
        <div
          className="card"
          style={{
            padding: "var(--space-8)",
            marginBottom: "var(--space-8)",
            background: "linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(11, 15, 25, 0.9) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "var(--radius-xl)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Luminous top border accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "10%",
              right: "10%",
              height: "2px",
              background: "var(--gradient-accent)",
            }}
          />

          <div
            className="flex items-center gap-2 flex-wrap"
            style={{ marginBottom: "var(--space-4)" }}
          >
            <span
              className="badge badge-accent"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                padding: "0.35rem 0.75rem",
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
                }}
              />
              {project.status}
            </span>
            <span
              className="badge"
              style={{
                fontSize: "var(--text-xs)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                color: "var(--text-muted)",
              }}
            >
              Architectural Breakdown
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "var(--space-4)",
              letterSpacing: "-0.03em",
            }}
          >
            {project.title}
          </h1>

          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: "800px",
            }}
          >
            {project.description}
          </p>

          {/* Action Links Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "var(--space-3)",
              marginTop: "var(--space-6)",
              paddingTop: "var(--space-6)",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            {project.githubUrl ? (
              <Button href={project.githubUrl} isExternal variant="primary" size="md">
                <Github size={16} aria-hidden="true" />
                <span>View Source Code</span>
              </Button>
            ) : (
              <span
                className="badge"
                style={{
                  padding: "0.55rem 0.95rem",
                  fontSize: "var(--text-xs)",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  color: "var(--text-muted)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <Github size={14} aria-hidden="true" />
                Repository will be linked upon public release
              </span>
            )}

            {project.demoUrl ? (
              <Button href={project.demoUrl} isExternal variant="outline" size="md">
                <ExternalLink size={16} aria-hidden="true" />
                <span>Live Demonstration</span>
              </Button>
            ) : (
              <span
                className="badge"
                style={{
                  padding: "0.55rem 0.95rem",
                  fontSize: "var(--text-xs)",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  color: "var(--text-muted)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <ExternalLink size={14} aria-hidden="true" />
                Live interactive deployment upcoming
              </span>
            )}
          </div>
        </div>

        {/* Two-Column Deep Dive: Problem & Solution */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--space-6)",
            marginBottom: "var(--space-8)",
          }}
        >
          {/* Problem Statement Card */}
          <div
            className="card card-hover"
            style={{
              padding: "var(--space-6)",
              backgroundColor: "rgba(15, 23, 42, 0.6)",
              border: "1px solid rgba(245, 158, 11, 0.2)",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <div
              className="flex items-center gap-2"
              style={{ marginBottom: "var(--space-3)" }}
            >
              <div
                style={{
                  padding: "0.35rem",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "rgba(245, 158, 11, 0.15)",
                  color: "var(--status-warning)",
                  display: "inline-flex",
                }}
              >
                <AlertTriangle size={18} aria-hidden="true" />
              </div>
              <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, margin: 0 }}>
                The Engineering Challenge
              </h3>
            </div>
            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              {project.problemStatement}
            </p>
          </div>

          {/* Solution & Architecture Overview Card */}
          <div
            className="card card-hover"
            style={{
              padding: "var(--space-6)",
              backgroundColor: "rgba(15, 23, 42, 0.6)",
              border: "1px solid rgba(59, 130, 246, 0.25)",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <div
              className="flex items-center gap-2"
              style={{ marginBottom: "var(--space-3)" }}
            >
              <div
                style={{
                  padding: "0.35rem",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--accent-subtle)",
                  color: "var(--accent-light)",
                  display: "inline-flex",
                }}
              >
                <Lightbulb size={18} aria-hidden="true" />
              </div>
              <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, margin: 0 }}>
                Solution & Architectural Strategy
              </h3>
            </div>
            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              {project.overview}
            </p>
          </div>
        </div>

        {/* Main Focus & Key Features */}
        <div
          className="card"
          style={{
            padding: "var(--space-8)",
            marginBottom: "var(--space-8)",
            backgroundColor: "rgba(15, 23, 42, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "var(--radius-xl)",
          }}
        >
          <div
            className="flex items-center gap-2"
            style={{ marginBottom: "var(--space-4)" }}
          >
            <Sparkles size={18} color="var(--accent-light)" aria-hidden="true" />
            <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 700, margin: 0 }}>
              Main Architectural Focus
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "var(--space-3)",
              marginBottom: "var(--space-8)",
            }}
          >
            {project.mainFocus.map((focus, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-3)",
                  padding: "0.75rem 1rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  fontSize: "var(--text-sm)",
                  color: "var(--text-primary)",
                  fontWeight: 500,
                }}
              >
                <CheckCircle2 size={16} color="var(--accent-cyan)" aria-hidden="true" />
                <span>{focus}</span>
              </div>
            ))}
          </div>

          <h3
            style={{
              fontSize: "var(--text-xl)",
              fontWeight: 700,
              marginBottom: "var(--space-4)",
            }}
          >
            Key Capabilities & Features
          </h3>
          <ul
            style={{
              listStyle: "none",
              paddingLeft: 0,
              display: "grid",
              gap: "var(--space-3)",
            }}
          >
            {project.keyFeatures.map((feat, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--space-3)",
                  fontSize: "var(--text-sm)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                <span
                  style={{
                    color: "var(--accent-light)",
                    fontWeight: 700,
                    marginTop: "-1px",
                  }}
                >
                  ▸
                </span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Confirmed Technologies Used */}
        <div
          className="card"
          style={{
            padding: "var(--space-6)",
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "var(--radius-lg)",
            marginBottom: "var(--space-10)",
          }}
        >
          <div
            className="flex items-center gap-2"
            style={{ marginBottom: "var(--space-3)" }}
          >
            <Code2 size={18} color="var(--accent-light)" aria-hidden="true" />
            <h4 style={{ fontSize: "var(--text-base)", fontWeight: 700, margin: 0 }}>
              Confirmed Technologies & Frameworks
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="badge badge-accent"
                style={{
                  padding: "0.35rem 0.85rem",
                  fontSize: "var(--text-xs)",
                  borderRadius: "var(--radius-full)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--space-4)",
            flexWrap: "wrap",
            paddingTop: "var(--space-6)",
          }}
        >
          <Button href="/projects" variant="secondary" size="md">
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Return to All Projects</span>
          </Button>

          <Button href="/contact" variant="primary" size="md">
            <span>Discuss This Project</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  );
}
