import fs from "fs";
import path from "path";
import Link from "next/link";
import {
  ArrowRight,
  FileDown,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  MapPin,
} from "lucide-react";
import Button from "@/components/Button";
import MaterialField from "@/components/MaterialField";
import HeroCard from "@/components/HeroCard";
import TelemetryRibbon from "@/components/TelemetryRibbon";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import ResearchCard from "@/components/ResearchCard";
import CertificatesSection from "@/components/CertificatesSection";
import ContactForm from "@/components/ContactForm";
import { personalData } from "@/data/personal";
import { projectsData } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { publishedPaper, conferencePresentation } from "@/data/research";
import { socialLinks } from "@/data/social";

export default function HomePage() {
  const githubUrl = socialLinks.find((s) => s.name === "GitHub")?.url || "https://github.com/valarxdhn";
  const linkedinUrl = socialLinks.find((s) => s.name === "LinkedIn")?.url || "https://linkedin.com";

  // Check if a real resume PDF has been placed in public/documents/resume.pdf
  const resumeFilePath = path.join(process.cwd(), "public", "documents", "resume.pdf");
  const hasResumePdf = fs.existsSync(resumeFilePath);

  return (
    <>
      {/* ===================================================================
          1. AURAL HERO EXPERIENCE (ThreeUI Inspired)
          Interactive Material Field + Precision Telemetry + 3D Hero Card
          =================================================================== */}
      <section className="aural-hero-section">
        {/* Procedural Acoustic Material Field (WebGL / Canvas) */}
        <MaterialField />

        <div className="container aural-hero-container">
            {/* Hero Two-Column Architecture */}
          <div className="aural-hero-grid">
            {/* Left Column: Lead Content & Actions */}
            <div className="aural-hero-lead">
              <p className="aural-hero-greeting">Hi, I'm</p>
              <h1 className="aural-hero-name">{personalData.name}</h1>
              <p className="aural-hero-headline">{personalData.headline}</p>

              <p className="aural-hero-intro">
                I build practical software applications with an interest in backend engineering, data structures, and applied AI.
                Currently an undergraduate at Sahyadri College of Engineering and Management (First-Year CGPA: 8.85).
              </p>

              {/* Action Controls */}
              <div className="aural-hero-actions">
                <Button href="#projects" variant="primary">
                  <span>Explore Engineering</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Button>

                {hasResumePdf ? (
                  <Button
                    href="/documents/resume.pdf"
                    variant="secondary"
                    download="Dhanush_Resume.pdf"
                  >
                    <FileDown size={15} aria-hidden="true" />
                    <span>Download Dossier (PDF)</span>
                  </Button>
                ) : (
                  <Button
                    href="mailto:dhanushmk95@gmail.com?subject=Resume%20Request%20-%20Dhanush"
                    variant="secondary"
                    title="Direct email transmission (Resume PDF pending upload)"
                  >
                    <FileDown size={15} aria-hidden="true" />
                    <span>Request Dossier</span>
                  </Button>
                )}

                <div className="hero-social-group">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="hero-social-link"
                    title="GitHub"
                  >
                    <Github size={17} aria-hidden="true" />
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="hero-social-link"
                    title="LinkedIn"
                  >
                    <Linkedin size={17} aria-hidden="true" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: 3D Perspective Tactile Card */}
            <HeroCard />
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. TELEMETRY SPECS RIBBON (Hardware Benchmark Strip)
          =================================================================== */}
      <TelemetryRibbon />

      {/* ===================================================================
          3. ABOUT & ENGINEERING PHILOSOPHY SECTION
          =================================================================== */}
      <section id="about" className="section" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-heading">
            <span className="aural-section-index">01 // CORE PROFILE</span>
            <h2 className="section-title">Engineering Background</h2>
            <p className="section-subtitle">
              Computer science undergraduate education grounded in data structures, systems programming, and applied computational research.
            </p>
          </div>

          <div className="aural-about-grid">
            <div className="aural-about-main">
              <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, marginBottom: "var(--space-3)", color: "var(--text-primary)" }}>
                Curiosity Driven Software Engineering
              </h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "var(--space-4)" }}>
                {personalData.introduction}
              </p>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.75, margin: 0 }}>
                I prioritize architectural clarity, algorithmic efficiency, and measurable utility over superficial complexity. Whether developing transit prediction engines, EV routing optimization, or machine learning risk classifiers, my focus is delivering deterministic, production-ready code.
              </p>

              <div style={{ marginTop: "var(--space-6)" }}>
                <Button href="/about" variant="outline" size="sm">
                  <span>Read Full Academic Profile</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="aural-about-sidebar">
              <div className="aural-about-stat-card">
                <span className="aural-stat-label">INSTITUTION &amp; PROGRAM</span>
                <span style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--text-primary)" }}>
                  Sahyadri College of Eng. &amp; Management
                </span>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
                  B.E. Computer Science &amp; Engineering
                </span>
              </div>

              <div className="aural-about-stat-card">
                <span className="aural-stat-label">FIRST-YEAR STANDING</span>
                <span style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--accent)" }}>
                  8.85 / 10.0 CGPA
                </span>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
                  Top Academic Distinction
                </span>
              </div>

              <div className="aural-about-stat-card">
                <span className="aural-stat-label">RESEARCH DEFENSE</span>
                <span style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--text-primary)" }}>
                  ICRICS 2026 &amp; IJIRT Vol. 13
                </span>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
                  Published Paper ID #206803
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          4. SELECTED PROJECTS SECTION
          =================================================================== */}
      <section id="projects" className="section" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "var(--space-8)",
              flexWrap: "wrap",
              gap: "var(--space-4)",
            }}
          >
            <div>
              <span className="aural-section-index">02 // ARCHITECTURAL REPOSITORIES</span>
              <h2 className="section-title">Selected Projects</h2>
              <p className="section-subtitle">
                Software engineering applications addressing railway delay tracking, EV charging slot discovery, and collegiate event management.
              </p>
            </div>
            <Link
              href="/projects"
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: 600,
                color: "var(--accent)",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span>All Projects Archive</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-3">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          5. TECHNICAL SKILLS SECTION
          =================================================================== */}
      <section id="skills" className="section" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-heading">
            <span className="aural-section-index">03 // CORE COMPETENCIES</span>
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">
              Programming languages, core foundations, and developer tools applied in coursework, algorithmic problem-solving, and web development.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "var(--space-6)",
            }}
          >
            {skillCategories.map((category, idx) => (
              <SkillCard key={category.name} category={category} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          6. CERTIFICATIONS & ACHIEVEMENTS SECTION
          =================================================================== */}
      <CertificatesSection />

      {/* ===================================================================
          7. RESEARCH & PUBLICATIONS SECTION
          =================================================================== */}
      <section id="research" className="section" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-heading">
            <span className="aural-section-index">05 // ACADEMIC RESEARCH</span>
            <h2 className="section-title">Research &amp; Publications</h2>
            <p className="section-subtitle">
              Published journal article and international conference defense covering applied machine learning and early-warning systems.
            </p>
          </div>

          <div style={{ display: "grid", gap: "var(--space-6)", maxWidth: "860px" }}>
            <ResearchCard paper={publishedPaper} />
            <ResearchCard paper={conferencePresentation} isConference />
          </div>
        </div>
      </section>

      {/* ===================================================================
          8. DIRECT TRANSMISSION / CONTACT SECTION
          =================================================================== */}
      <section id="contact" className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "var(--space-10)",
              alignItems: "flex-start",
            }}
          >
            <div>
              <span className="aural-section-index">06 // DIRECT TRANSMISSION</span>
              <h2 className="section-title">Contact</h2>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "var(--space-6)" }}>
                I am actively seeking software engineering internships, technical collaborations, and research discussions. Feel free to send a message or contact directly via email.
              </p>

              <div style={{ display: "grid", gap: "var(--space-3)", fontSize: "var(--text-sm)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                  <Mail size={16} color="var(--accent)" aria-hidden="true" />
                  <a href="mailto:dhanushmk95@gmail.com" style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                    dhanushmk95@gmail.com
                  </a>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                  <MapPin size={16} color="var(--accent)" aria-hidden="true" />
                  <span style={{ color: "var(--text-secondary)" }}>{personalData.location}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                  <GraduationCap size={16} color="var(--accent)" aria-hidden="true" />
                  <span style={{ color: "var(--text-secondary)" }}>{personalData.college}</span>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
