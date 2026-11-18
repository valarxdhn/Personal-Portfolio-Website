"use client";

import { useState } from "react";
import { CheckCircle, ExternalLink, FileText } from "lucide-react";
import CertificateCard from "./CertificateCard";
import Button from "./Button";
import { certificatesData, certificateCategories } from "@/data/certificates";

const achievementMilestones = [
  {
    id: "milestone-journal",
    track: "01 // PUBLICATION",
    category: "Peer-Reviewed Journal Publication",
    title: "IJIRT Published Research Paper (Vol. 13, 2026)",
    description:
      "Authored research paper on AI-powered rural student dropout early warning system with explainable predictions, SMS alerts, and welfare scheme mapping (Paper ID: #206803, pp. 509–513).",
    period: "2026",
    statusBadge: "Published",
    link: "https://ijirt.org/article?manuscript=206803",
    linkLabel: "View Journal Paper",
    isExternal: true,
  },
  {
    id: "milestone-conference",
    track: "02 // CONFERENCE",
    category: "International Conference Presentation",
    title: "ICRICS 2026 Academic Defense Presentation",
    description:
      "Presented and defended peer-reviewed paper on rural dropout prediction before peer reviewers and faculty at Srinivas Institute of Technology (ICRICS 2026).",
    period: "May 2026",
    statusBadge: "Presented",
    link: "/certificates/academic/icrics-2026-research-paper-presentation.pdf",
    linkLabel: "Defense Certificate (PDF)",
    isExternal: false,
  },
  {
    id: "milestone-scholastic",
    track: "03 // SCHOLASTIC",
    category: "Academic Distinction",
    title: "First-Year Academic Distinction – 8.85 CGPA",
    description:
      "Earned a verified 8.85 / 10.0 CGPA in first-year Computer Science & Engineering at Sahyadri College of Engineering and Management.",
    period: "2025 – 2026",
    statusBadge: "Verified",
    link: null,
    linkLabel: null,
    isExternal: false,
  },
  {
    id: "milestone-hackathon",
    track: "04 // COMPETITION",
    category: "Hackathon & Competitive Sprint",
    title: "Prompt Battle of Aerophilia (SCEM & Unstop)",
    description:
      "Competed as part of Team Ideators representing Sahyadri College of Engineering & Management in the Aerophilia Prompt Battle competition on the Unstop platform.",
    period: "May 2026",
    statusBadge: "Participation",
    link: "/certificates/hackathons/aerophilia-prompt-battle-unstop.pdf",
    linkLabel: "Competition Certificate (PDF)",
    isExternal: false,
  },
];

export default function CertificatesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCertificates =
    activeCategory === "All"
      ? certificatesData
      : certificatesData.filter((c) => c.category === activeCategory);

  return (
    <div className="achievements-section-inner">
      {/* 1. Main Section Header (06 // ACHIEVEMENTS & CREDENTIALS) */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "var(--space-10)",
          flexWrap: "wrap",
          gap: "var(--space-4)",
        }}
      >
        <div>
          <span className="section-eyebrow">06 // ACHIEVEMENTS &amp; CREDENTIALS</span>
          <h2 className="section-title">Achievements &amp; Credentials</h2>
          <p className="section-subtitle">
            Peer-reviewed scholarly output, academic distinctions, verified industry credentials, and collegiate engineering sprints.
          </p>
        </div>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-2)",
            padding: "0.4rem 0.8rem",
            borderRadius: "var(--radius-full)",
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--border)",
            fontSize: "var(--text-xs)",
            color: "var(--text-secondary)",
          }}
        >
          <CheckCircle size={13} color="var(--status-success)" aria-hidden="true" />
          <span>
            <strong>10</strong> Documented Records (4 Milestones · 6 Certificates)
          </span>
        </div>
      </div>

      {/* 2. SUBSECTION A: ACHIEVEMENT ARCHIVE */}
      <div style={{ marginBottom: "var(--space-12)" }}>
        <div className="editorial-subsection-header">
          <div>
            <span className="editorial-subsection-eyebrow">SUBSECTION A // MILESTONE ARCHIVE</span>
            <h3 className="editorial-subsection-title">Scholarly &amp; Collegiate Milestones</h3>
          </div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)" }}>
            4 Validated Milestones
          </span>
        </div>

        {/* Milestone Ledger */}
        <div className="editorial-milestone-ledger">
          {achievementMilestones.map((item) => (
            <div key={item.id} className="editorial-milestone-item">
              {/* Date / Period Column */}
              <span className="editorial-milestone-date">{item.period}</span>

              {/* Title & Description Column */}
              <div className="editorial-milestone-content">
                <span className="editorial-milestone-track">{item.track}</span>
                <h4 className="editorial-milestone-title">{item.title}</h4>
                <p className="editorial-milestone-desc">{item.description}</p>
              </div>

              {/* Status & Actions Column */}
              <div className="editorial-milestone-actions">
                <span className="editorial-status-pill">{item.statusBadge}</span>

                {item.link && (
                  <Button
                    href={item.link}
                    isExternal={item.isExternal}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                  >
                    <span>{item.linkLabel}</span>
                    {item.isExternal ? (
                      <ExternalLink size={12} aria-hidden="true" />
                    ) : (
                      <FileText size={12} aria-hidden="true" />
                    )}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. SUBSECTION B: VERIFIED CREDENTIALS */}
      <div>
        <div className="editorial-subsection-header">
          <div>
            <span className="editorial-subsection-eyebrow">SUBSECTION B // DOCUMENTED TRAINING &amp; CERTIFICATIONS</span>
            <h3 className="editorial-subsection-title">Verified Industry Credentials</h3>
          </div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)" }}>
            6 Verified Certificates
          </span>
        </div>

        {/* Category Filter Pills */}
        <div
          className="editorial-cert-filter-bar"
          role="tablist"
          aria-label="Filter certificates by category"
        >
          {certificateCategories.map((category) => {
            const count =
              category === "All"
                ? certificatesData.length
                : certificatesData.filter((c) => c.category === category).length;

            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`editorial-filter-btn ${isActive ? "active" : ""}`}
              >
                <span>{category}</span>
                <span className="editorial-filter-count">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Certificates Grid */}
        <div className="editorial-certs-grid">
          {filteredCertificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </div>
    </div>
  );
}
