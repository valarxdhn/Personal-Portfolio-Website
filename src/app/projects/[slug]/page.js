import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Code2,
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
    title: `${project.shortTitle} | Projects | Dhanush`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "860px" }}>
        {/* Breadcrumb */}
        <div style={{ marginBottom: "var(--space-6)" }}>
          <Link
            href="/#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "var(--text-xs)",
              color: "var(--text-muted)",
              fontWeight: 500,
            }}
          >
            <ArrowLeft size={14} aria-hidden="true" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div style={{ marginBottom: "var(--space-8)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-2)" }}>
            <span className="badge badge-accent">{project.status || "In Development"}</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(1.85rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "var(--space-3)",
            }}
          >
            {project.title}
          </h1>

          <p style={{ fontSize: "var(--text-base)", color: "var(--text-secondary)", lineHeight: 1.65 }}>
            {project.description}
          </p>
        </div>

        {/* Real Links Bar (if available) */}
        {(project.githubUrl || project.demoUrl) && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "var(--space-3)",
              padding: "var(--space-4)",
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              marginBottom: "var(--space-8)",
            }}
          >
            {project.githubUrl && (
              <Button href={project.githubUrl} isExternal variant="primary" size="sm">
                <Github size={14} aria-hidden="true" />
                <span>Source Code Repository</span>
              </Button>
            )}

            {project.demoUrl && (
              <Button href={project.demoUrl} isExternal variant="secondary" size="sm">
                <ExternalLink size={14} aria-hidden="true" />
                <span>Live Demonstration</span>
              </Button>
            )}
          </div>
        )}

        {/* Problem Statement and System Overview */}
        <div
          style={{
            display: "grid",
            gap: "var(--space-6)",
            marginBottom: "var(--space-8)",
          }}
        >
          {/* The Problem */}
          <section
            className="card"
            style={{
              padding: "var(--space-6)",
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border)",
            }}
          >
            <h2 style={{ fontSize: "var(--text-base)", fontWeight: 700, marginBottom: "var(--space-2)" }}>
              The Problem Being Solved
            </h2>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
              {project.problemStatement}
            </p>
          </section>

          {/* System Overview */}
          <section
            className="card"
            style={{
              padding: "var(--space-6)",
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border)",
            }}
          >
            <h2 style={{ fontSize: "var(--text-base)", fontWeight: 700, marginBottom: "var(--space-2)" }}>
              Technical Approach & Overview
            </h2>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
              {project.overview}
            </p>
          </section>
        </div>

        {/* Key Features & Architecture Focus */}
        <section
          className="card"
          style={{
            padding: "var(--space-6)",
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--border)",
            marginBottom: "var(--space-8)",
          }}
        >
          <h2 style={{ fontSize: "var(--text-base)", fontWeight: 700, marginBottom: "var(--space-3)" }}>
            Implementation Focus & Key Features
          </h2>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gap: "var(--space-3)",
            }}
          >
            {project.keyFeatures.map((feat, i) => (
              <li
                key={i}
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--space-2)",
                }}
              >
                <span style={{ color: "var(--accent)", fontWeight: 700 }}>•</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Confirmed Technologies */}
        <section
          style={{
            padding: "var(--space-5)",
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
            marginBottom: "var(--space-10)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-3)" }}>
            <Code2 size={16} color="var(--accent)" aria-hidden="true" />
            <h3 style={{ fontSize: "var(--text-sm)", fontWeight: 700, margin: 0 }}>
              Technologies Applied
            </h3>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
            {project.technologies.map((t) => (
              <span key={t} className="badge">
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Back Link */}
        <div>
          <Button href="/projects" variant="secondary" size="sm">
            <ArrowLeft size={14} aria-hidden="true" />
            <span>Return to All Projects</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
