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
    <div className="section" style={{ paddingTop: "var(--space-10)" }}>
      <div className="container" style={{ maxWidth: "960px" }}>
        {/* Navigation Breadcrumb */}
        <div style={{ marginBottom: "var(--space-6)" }}>
          <Link
            href="/projects"
            className="btn btn-ghost btn-sm"
            style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-2)", paddingLeft: 0 }}
          >
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div style={{ marginBottom: "var(--space-8)" }}>
          <div className="flex items-center gap-2" style={{ marginBottom: "var(--space-3)" }}>
            <span className="badge badge-accent">
              <Layers size={12} aria-hidden="true" />
              {project.status}
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "var(--space-3)",
            }}
          >
            {project.title}
          </h1>

          <p style={{ fontSize: "var(--text-lg)", color: "var(--text-secondary)", lineHeight: 1.6 }}>
            {project.description}
          </p>
        </div>

        {/* Actions & Links Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "var(--space-3)",
            padding: "var(--space-4)",
            backgroundColor: "var(--bg-secondary)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border)",
            marginBottom: "var(--space-10)",
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
                padding: "0.5rem 0.85rem",
                fontSize: "var(--text-xs)",
                opacity: 0.85,
              }}
            >
              <Github size={14} aria-hidden="true" />
              Source code repository will be published soon
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
                padding: "0.5rem 0.85rem",
                fontSize: "var(--text-xs)",
                opacity: 0.85,
              }}
            >
              <ExternalLink size={14} aria-hidden="true" />
              Live interactive deployment upcoming
            </span>
          )}
        </div>

        {/* Two-Column Deep Dive */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-8)",
            marginBottom: "var(--space-10)",
          }}
        >
          {/* Problem Statement Card */}
          <div className="card" style={{ borderLeft: "4px solid var(--status-warning)" }}>
            <div className="flex items-center gap-2" style={{ marginBottom: "var(--space-3)" }}>
              <AlertTriangle size={18} color="var(--status-warning)" aria-hidden="true" />
              <h3 style={{ fontSize: "var(--text-lg)", margin: 0 }}>The Problem</h3>
            </div>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.7 }}>
              {project.problemStatement}
            </p>
          </div>

          {/* Solution & Overview Card */}
          <div className="card" style={{ borderLeft: "4px solid var(--accent)" }}>
            <div className="flex items-center gap-2" style={{ marginBottom: "var(--space-3)" }}>
              <Lightbulb size={18} color="var(--accent)" aria-hidden="true" />
              <h3 style={{ fontSize: "var(--text-lg)", margin: 0 }}>Project Overview</h3>
            </div>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.7 }}>
              {project.overview}
            </p>
          </div>
        </div>

        {/* Main Focus & Key Features */}
        <div className="card" style={{ padding: "var(--space-8)", marginBottom: "var(--space-10)" }}>
          <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-4)" }}>
            Main Architectural Focus
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
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
                  gap: "var(--space-2)",
                  padding: "0.6rem 0.85rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  fontSize: "var(--text-sm)",
                  color: "var(--text-primary)",
                }}
              >
                <CheckCircle2 size={16} color="var(--accent)" aria-hidden="true" />
                <span>{focus}</span>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-4)" }}>
            Key Features Implemented
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
                }}
              >
                <span
                  style={{
                    color: "var(--accent)",
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

        {/* Tech Stack Breakdown */}
        <div
          className="card"
          style={{
            padding: "var(--space-6)",
            backgroundColor: "var(--bg-secondary)",
            marginBottom: "var(--space-10)",
          }}
        >
          <div className="flex items-center gap-2" style={{ marginBottom: "var(--space-3)" }}>
            <Code2 size={18} color="var(--accent)" aria-hidden="true" />
            <h4 style={{ fontSize: "var(--text-base)", margin: 0 }}>
              Confirmed Technologies Used
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="badge badge-accent" style={{ padding: "0.35rem 0.75rem", fontSize: "var(--text-xs)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Back navigation footer */}
        <div style={{ textAlign: "center" }}>
          <Button href="/projects" variant="secondary" size="md">
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Return to All Projects</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
