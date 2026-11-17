"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projectsData } from "@/data/projects";

const allFilters = ["All", "Python", "Full-Stack Web", "Transit Analytics", "Database Architecture"];

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

  return (
    <div className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Portfolio"
          title="Engineering Projects"
          subtitle="Practical software systems tackling railway delay prediction, EV charging reservation, and collegiate event management."
        />

        {/* Filter Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
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
                className={`btn btn-sm ${isSelected ? "btn-primary" : "btn-secondary"}`}
                style={{ borderRadius: "var(--radius-sm)" }}
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

        {/* Development Status Notice */}
        <div
          style={{
            padding: "var(--space-5)",
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
            fontSize: "var(--text-xs)",
            color: "var(--text-muted)",
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: "4px" }}>
            Project Status & Verification Notice
          </strong>
          Source code repositories and live demonstrations are linked directly as each project reaches public deployment milestones. In-development projects reflect real codebases currently under active implementation.
        </div>
      </div>
    </div>
  );
}
