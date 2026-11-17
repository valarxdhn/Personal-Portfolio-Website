"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  GraduationCap,
  Award,
  BookOpen,
  FileDown,
  ArrowRight,
  Check,
  Code2,
  Cpu,
  Layers,
  Database,
  Terminal,
  ExternalLink,
} from "lucide-react";
import Button from "./Button";
import { personalData } from "@/data/personal";
import { educationData } from "@/data/education";
import { publishedPaper, conferencePresentation } from "@/data/research";

const techStackData = [
  {
    category: "Languages",
    skills: ["C", "C++", "Python", "Java", "JavaScript"],
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "React", "Next.js"],
  },
  {
    category: "Backend & Databases",
    skills: ["Node.js", "Express.js", "FastAPI", "PostgreSQL", "Supabase"],
  },
  {
    category: "Tools & Domains",
    skills: ["Git", "GitHub", "VS Code", "Data Structures & Algorithms", "Machine Learning"],
  },
];

export default function AboutView({ hasResumePdf = false }) {
  const [downloadFeedback, setDownloadFeedback] = useState(false);

  const handleResumeDownload = () => {
    if (hasResumePdf) {
      setDownloadFeedback(true);
      setTimeout(() => setDownloadFeedback(false), 2800);
    }
  };

  return (
    <div className="section" style={{ paddingTop: "var(--space-10)", paddingBottom: "var(--space-16)" }}>
      <div className="about-unified-container">
        {/* ===================================================================
            1. UNIFIED HEADER (Crisp Vertical Left-Alignment)
            =================================================================== */}
        <div className="about-animate-fade about-stagger-1" style={{ marginBottom: "var(--space-10)" }}>
          <span className="section-eyebrow" style={{ display: "inline-block", marginBottom: "var(--space-2)" }}>
            BACKGROUND
          </span>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", marginBottom: "var(--space-2)" }}>
            About Me
          </h1>
          <p className="section-subtitle" style={{ fontSize: "var(--text-base)", color: "var(--text-secondary)", maxWidth: "720px", lineHeight: 1.65, margin: 0 }}>
            Computer Science Engineering student at Sahyadri College of Engineering and Management focused on backend software development, algorithms, and practical engineering solutions.
          </p>
        </div>

        {/* ===================================================================
            2. BIO & PORTRAIT SPLIT (4:5 Aspect Ratio & Balanced Typography)
            =================================================================== */}
        <div className="about-bio-grid about-animate-fade about-stagger-2">
          {/* Left: 4:5 Vertical Aspect Ratio Portrait Card */}
          <div>
            <div className="about-portrait-card">
              <Image
                src={personalData.profileImage}
                alt={personalData.profileImageAlt}
                fill
                priority
                sizes="(max-width: 768px) 280px, 300px"
                className="about-portrait-img"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(7, 9, 14, 0.7) 0%, rgba(7, 9, 14, 0) 35%)",
                  pointerEvents: "none",
                }}
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Right: Narrative, Metrics, and Actions */}
          <div>
            <h2 style={{ fontSize: "var(--text-2xl)", fontWeight: 700, marginBottom: "var(--space-1)", color: "var(--text-primary)" }}>
              {personalData.name}
            </h2>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--accent)", fontWeight: 600, marginBottom: "var(--space-4)" }}>
              {personalData.headline}
            </p>

            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "var(--space-4)" }}>
              I am a Computer Science and Engineering undergraduate student at{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                Sahyadri College of Engineering and Management
              </strong>{" "}
              in Mangalore, Karnataka, holding a verified first-year cumulative CGPA of{" "}
              <strong style={{ color: "var(--text-primary)" }}>8.85 / 10.0</strong>.
            </p>

            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "var(--space-5)" }}>
              My engineering focus centers on writing clean, deterministic software and constructing practical systems. Through computational research, competitive programming, and collegiate initiatives, I explore transportation delay estimation, electric vehicle infrastructure optimization, and applied machine learning models.
            </p>

            {/* Three Compact Metric Pills */}
            <div className="about-metrics-row">
              <div className="about-metric-pill" title="First-Year Cumulative Grade Point Average">
                <GraduationCap size={13} color="var(--accent)" aria-hidden="true" />
                <span>8.85 CGPA</span>
              </div>

              <div className="about-metric-pill" title="IJIRT Publication & ICRICS 2026 Presentation">
                <Award size={13} color="var(--accent)" aria-hidden="true" />
                <span>1 Publication · 1 Conference Presentation</span>
              </div>

              <div className="about-metric-pill" title="Technical Focus Areas">
                <Cpu size={13} color="var(--accent)" aria-hidden="true" />
                <span>Backend &amp; Applied ML</span>
              </div>
            </div>

            {/* CTAs with Micro-interactions */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--space-3)" }}>
              <Button href="/projects" variant="primary" className="about-cta-btn-primary">
                <span>View Projects</span>
                <ArrowRight size={15} className="about-btn-arrow" aria-hidden="true" />
              </Button>

              <Button
                href="mailto:dhanushmk95@gmail.com?subject=Resume%20Request%20-%20Dhanush"
                variant="secondary"
                title="Request resume via email"
                className="about-cta-btn-secondary"
              >
                <FileDown size={15} className="about-btn-download-icon" aria-hidden="true" />
                <span>Request Resume</span>
              </Button>
            </div>
          </div>
        </div>

        {/* ===================================================================
            3. EDUCATION & ACADEMIC STANDING (Complete, Uncut Entries)
            =================================================================== */}
        <section className="about-animate-fade about-stagger-3" style={{ marginBottom: "var(--space-12)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-4)", paddingBottom: "var(--space-2)", borderBottom: "1px solid var(--border)" }}>
            <GraduationCap size={18} color="var(--accent)" aria-hidden="true" />
            <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, margin: 0, color: "var(--text-primary)" }}>
              Education &amp; Academic Standing
            </h3>
          </div>

          <div
            className="card"
            style={{
              padding: "var(--space-6) var(--space-8)",
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
            }}
          >
            {educationData.map((item, idx) => (
              <div key={item.id}>
                {idx > 0 && <div className="academic-divider" />}

                <div className="academic-entry">
                  {/* Top line: Institution and Status Pill */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "var(--space-2)", marginBottom: "var(--space-2)" }}>
                    <div>
                      <h4 style={{ fontSize: "var(--text-base)", fontWeight: 700, margin: 0, color: "var(--text-primary)" }}>
                        {item.institution}
                      </h4>
                      <p style={{ fontSize: "var(--text-sm)", color: "var(--accent)", fontWeight: 500, margin: "2px 0 0 0" }}>
                        {item.degree} {item.field && `• ${item.field}`}
                      </p>
                    </div>

                    {/* Status Badge */}
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "0.25rem 0.65rem",
                        borderRadius: "var(--radius-full)",
                        fontSize: "11px",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 600,
                        backgroundColor: item.current ? "rgba(16, 185, 129, 0.08)" : "var(--bg-tertiary)",
                        border: item.current ? "1px solid rgba(16, 185, 129, 0.3)" : "1px solid var(--border)",
                        color: item.current ? "var(--status-success)" : "var(--text-muted)",
                      }}
                    >
                      {item.current && (
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: "var(--status-success)",
                            boxShadow: "0 0 6px var(--status-success)",
                          }}
                          aria-hidden="true"
                        />
                      )}
                      <span>{item.statusBadge}</span>
                    </span>
                  </div>

                  {/* Performance Badge */}
                  <div style={{ margin: "var(--space-2) 0 var(--space-3) 0" }}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "0.25rem 0.65rem",
                        backgroundColor: "var(--bg-tertiary)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius-sm)",
                        fontSize: "11px",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                      }}
                    >
                      {item.cgpa ? `First-Year CGPA: ${item.cgpa}` : `${item.scoreLabel}: ${item.score}`}
                    </span>
                  </div>

                  {/* Metadata Row */}
                  <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", margin: 0, fontFamily: "var(--font-mono)" }}>
                    Location: {item.location} • Status: {item.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================
            4. CORE TECHNICAL STACK (Categorized Subtle Badges)
            =================================================================== */}
        <section className="about-animate-fade about-stagger-4" style={{ marginBottom: "var(--space-12)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-4)", paddingBottom: "var(--space-2)", borderBottom: "1px solid var(--border)" }}>
            <Code2 size={18} color="var(--accent)" aria-hidden="true" />
            <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, margin: 0, color: "var(--text-primary)" }}>
              Core Technical Stack
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "var(--space-4)",
            }}
          >
            {techStackData.map((category) => (
              <div key={category.category} className="tech-stack-category">
                <h4
                  style={{
                    fontSize: "var(--text-xs)",
                    fontFamily: "var(--font-mono)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--accent)",
                    fontWeight: 700,
                    marginBottom: "var(--space-3)",
                  }}
                >
                  {category.category}
                </h4>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {category.skills.map((skill) => (
                    <span key={skill} className="tech-stack-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================
            5. RESEARCH CONTRIBUTIONS (Accurate Distinction)
            =================================================================== */}
        <section className="about-animate-fade about-stagger-4">
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-4)", paddingBottom: "var(--space-2)", borderBottom: "1px solid var(--border)" }}>
            <BookOpen size={18} color="var(--accent)" aria-hidden="true" />
            <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, margin: 0, color: "var(--text-primary)" }}>
              Research Contributions
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gap: "var(--space-4)",
            }}
          >
            {/* Entry 1: Published Journal Article */}
            <div
              className="card"
              style={{
                padding: "var(--space-6)",
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-2)" }}>
                <span className="badge badge-accent">1. Published Journal Article</span>
                <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                  IJIRT Vol. 13 • Paper #206803
                </span>
              </div>
              <h4 style={{ fontSize: "var(--text-base)", fontWeight: 700, marginBottom: "var(--space-1)", color: "var(--text-primary)" }}>
                {publishedPaper.title}
              </h4>
              <p style={{ fontSize: "var(--text-xs)", color: "var(--accent)", fontWeight: 600, marginBottom: "var(--space-3)" }}>
                {publishedPaper.journal} (Published Manuscript)
              </p>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "var(--space-4)" }}>
                {publishedPaper.summary}
              </p>
              <div>
                <Button href={publishedPaper.publicationUrl} isExternal variant="outline" size="sm">
                  <span>View Manuscript on IJIRT</span>
                  <ExternalLink size={13} aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* Entry 2: International Conference Presentation */}
            <div
              className="card"
              style={{
                padding: "var(--space-6)",
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-2)" }}>
                <span className="badge badge-accent">2. International Conference Presentation</span>
                <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                  ICRICS 2026 • May 2026
                </span>
              </div>
              <h4 style={{ fontSize: "var(--text-base)", fontWeight: 700, marginBottom: "var(--space-1)", color: "var(--text-primary)" }}>
                {conferencePresentation.title}
              </h4>
              <p style={{ fontSize: "var(--text-xs)", color: "var(--accent)", fontWeight: 600, marginBottom: "var(--space-3)" }}>
                {conferencePresentation.conference} ({conferencePresentation.role})
              </p>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {conferencePresentation.summary}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
