"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projectsData } from "@/data/projects";

const allFilters = ["All", "Python", "Supabase", "Explainable AI", "Transportation Intelligence"];

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects =
    selectedFilter === "All"
      ? projectsData
      : projectsData.filter((p) =>
          p.technologies.some((tech) => tech.toLowerCase().includes(selectedFilter.toLowerCase()))
        );

  return (
    <div className="section" style={{ paddingTop: "var(--space-10)" }}>
      <div className="container">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="Real-world engineering applications tackling transportation intelligence, explainable AI for sustainability, and campus engagement."
        />

        {/* Filter Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "var(--space-2)",
            marginBottom: "var(--space-8)",
          }}
        >
          {allFilters.map((filter) => {
            const isSelected = selectedFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`btn ${isSelected ? "btn-primary" : "btn-secondary"} btn-sm`}
                style={{ borderRadius: "var(--radius-full)" }}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-3" style={{ marginBottom: "var(--space-12)" }}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Transparency Note */}
        <div
          className="card"
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            textAlign: "center",
            backgroundColor: "var(--bg-secondary)",
            padding: "var(--space-6)",
          }}
        >
          <h4 style={{ fontSize: "var(--text-base)", marginBottom: "var(--space-2)" }}>
            Project Integrity & Status Notice
          </h4>
          <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", lineHeight: 1.6 }}>
            In accordance with engineering integrity principles, no simulated model accuracy metrics or fictitious links are displayed. Code repositories and live demonstrations are linked directly through our centralized data registry as they transition to public release.
          </p>
        </div>
      </div>
    </div>
  );
}
