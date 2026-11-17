"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projectsData } from "@/data/projects";
import { Sparkles, ShieldCheck, Filter } from "lucide-react";

const allFilters = ["All", "Python", "Supabase", "Explainable AI", "Transportation Intelligence"];

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects =
    selectedFilter === "All"
      ? projectsData
      : projectsData.filter((p) =>
          p.technologies.some((tech) =>
            tech.toLowerCase().includes(selectedFilter.toLowerCase())
          )
        );

  const getFilterCount = (filter) => {
    if (filter === "All") return projectsData.length;
    return projectsData.filter((p) =>
      p.technologies.some((tech) =>
        tech.toLowerCase().includes(filter.toLowerCase())
      )
    ).length;
  };

  return (
    <div className="section" style={{ paddingTop: "var(--space-12)", minHeight: "85vh" }}>
      <div className="container">
        {/* Section Header */}
        <SectionHeading
          eyebrow="Portfolio & Systems"
          title="Featured Engineering Projects"
          subtitle="Real-world engineering applications tackling transportation intelligence, explainable AI for sustainability, and collegiate event management."
        />

        {/* Filter Navigation Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "var(--space-2)",
            marginBottom: "var(--space-10)",
            padding: "0.5rem",
            backgroundColor: "rgba(15, 23, 42, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "var(--radius-full)",
            maxWidth: "760px",
            marginLeft: "auto",
            marginRight: "auto",
            backdropFilter: "blur(12px)",
          }}
        >
          {allFilters.map((filter) => {
            const isSelected = selectedFilter === filter;
            const count = getFilterCount(filter);
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`btn btn-sm ${isSelected ? "btn-gradient" : "btn-ghost"}`}
                style={{
                  borderRadius: "var(--radius-full)",
                  fontSize: "var(--text-xs)",
                  padding: "0.4rem 0.85rem",
                  transition: "all var(--transition-fast)",
                  gap: "0.35rem",
                }}
              >
                <span>{filter}</span>
                <span
                  style={{
                    fontSize: "0.68rem",
                    padding: "0.1rem 0.4rem",
                    borderRadius: "var(--radius-full)",
                    backgroundColor: isSelected
                      ? "rgba(255, 255, 255, 0.25)"
                      : "rgba(255, 255, 255, 0.08)",
                    color: isSelected ? "#ffffff" : "var(--text-muted)",
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-3"
          style={{
            marginBottom: "var(--space-16)",
            gap: "var(--space-8)",
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Engineering Integrity & Transparency Callout */}
        <div
          className="card"
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            textAlign: "center",
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "var(--space-8)",
            borderRadius: "var(--radius-xl)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "25%",
              right: "25%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
            }}
          />
          <div
            className="flex items-center justify-center gap-2"
            style={{ marginBottom: "var(--space-2)" }}
          >
            <ShieldCheck size={18} color="var(--accent-light)" aria-hidden="true" />
            <h4 style={{ fontSize: "var(--text-base)", fontWeight: 700, margin: 0 }}>
              Engineering Integrity & Verification Standard
            </h4>
          </div>
          <p
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            In strict adherence to academic honesty and engineering integrity, no fabricated benchmark metrics, synthetic test accuracies, or placeholder deployment links are presented. Code repositories and live interactive demonstrations are directly linked as projects transition into public release.
          </p>
        </div>
      </div>
    </div>
  );
}
