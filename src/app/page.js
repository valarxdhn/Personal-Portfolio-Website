import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  FileDown,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  MapPin,
  Award,
  Cpu,
} from "lucide-react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import ResearchCard from "@/components/ResearchCard";
import CertificatesSection from "@/components/CertificatesSection";
import ContactForm from "@/components/ContactForm";
import {
  RevealSection,
  StaggerGrid,
  StaggerItem,
  SubtleParallax,
} from "@/components/MotionPrimitives";

import { personalData } from "@/data/personal";
import { educationData } from "@/data/education";
import { skillCategories } from "@/data/skills";
import { projectsData } from "@/data/projects";
import { publishedPaper, conferencePresentation } from "@/data/research";
import { socialLinks } from "@/data/social";

export const metadata = {
  title: "Dhanush | Computer Science Engineering Student & Software Developer",
  description:
    "Single-page developer portfolio of Dhanush: academic background, Sahyadri College B.E. CSE (CGPA: 8.85), core technical stack, real-world engineering projects, IJIRT research publication, and verified achievements.",
};

export default function SinglePagePortfolio() {
  const githubUrl = socialLinks.find((s) => s.name === "GitHub")?.url || "https://github.com/valarxdhn";
  const linkedinUrl = socialLinks.find((s) => s.name === "LinkedIn")?.url || "https://linkedin.com/in/dhanushmk14";

  return (
    <>
      {/* ===================================================================
          1. HERO / HOME SECTION
          Concept A: The Editorial Split
          =================================================================== */}
      <section id="home" className="editorial-hero-section">
        <div className="container">
          <div className="editorial-hero-grid">
            {/* Left Column: Eyebrow, Display Typography, Narrative & Actions */}
            <div>
              <div className="editorial-hero-meta-strip">
                <span>01 // PORTFOLIO</span>
                <span style={{ color: "var(--border)" }}>•</span>
                <span>MANGALORE, KARNATAKA</span>
              </div>

              <h1 className="editorial-hero-title">DHANUSH</h1>

              <p className="editorial-hero-role">
                {personalData.headline}
              </p>

              <p className="editorial-hero-bio">
                I build practical software applications with an interest in backend engineering, data structures, and applied AI. Currently an undergraduate at Sahyadri College of Engineering and Management (First-Year CGPA: 8.85).
              </p>

              {/* Action Controls */}
              <div className="editorial-hero-actions">
                <Button href="#projects" variant="primary">
                  <span>Explore Projects</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Button>

                <Button
                  href="mailto:dhanushmk95@gmail.com?subject=Resume%20Request%20-%20Dhanush"
                  variant="secondary"
                  title="Request resume via email"
                >
                  <FileDown size={15} aria-hidden="true" />
                  <span>Request Resume</span>
                </Button>

                {/* Social Connectors */}
                <div className="editorial-hero-socials">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="editorial-social-btn"
                    title="GitHub: valarxdhn"
                  >
                    <Github size={16} aria-hidden="true" />
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="editorial-social-btn"
                    title="LinkedIn: dhanushmk14"
                  >
                    <Linkedin size={16} aria-hidden="true" />
                  </a>
                  <a
                    href="mailto:dhanushmk95@gmail.com"
                    aria-label="Direct Email"
                    className="editorial-social-btn"
                    title="Email: dhanushmk95@gmail.com"
                  >
                    <Mail size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: 4:5 Vertical Portrait Frame */}
            <div>
              <div className="editorial-portrait-frame">
                <Image
                  src={personalData.profileImage}
                  alt={personalData.profileImageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 360px, 420px"
                  className="editorial-portrait-image"
                />
                <div className="editorial-portrait-caption">
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 600, color: "#FFFFFF", letterSpacing: "0.08em" }}>
                    DHANUSH // CSE
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)" }}>
                    Sahyadri College
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. ABOUT ME SECTION
          Statement-Driven 2-Column Split with Metrics Ledger
          =================================================================== */}
      <section id="about" className="section" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <RevealSection>
            <SectionHeading
              eyebrow="01 // BACKGROUND"
              title="About Me"
              subtitle="Computer Science Engineering student at Sahyadri College of Engineering and Management focused on backend software development, algorithms, and practical engineering solutions."
              align="left"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="editorial-about-grid">
              {/* Left Column: Bold Narrative Lead & CTAs */}
              <div>
                <p className="editorial-about-lead">
                  Constructing practical software systems centered around backend engineering, data structures, and applied computational research.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--space-3)" }}>
                  <Button href="#projects" variant="primary">
                    <span>View Projects</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </Button>

                  <Button
                    href="mailto:dhanushmk95@gmail.com?subject=Resume%20Request%20-%20Dhanush"
                    variant="secondary"
                    title="Request resume via email"
                  >
                    <FileDown size={15} aria-hidden="true" />
                    <span>Request Resume</span>
                  </Button>
                </div>
              </div>

              {/* Right Column: Bio Narrative & 3-Column Metrics Ledger */}
              <div>
                <p className="editorial-about-p">
                  I am a Computer Science and Engineering undergraduate student at{" "}
                  <strong style={{ color: "var(--text-primary)" }}>
                    Sahyadri College of Engineering and Management
                  </strong>{" "}
                  in Mangalore, Karnataka, holding a verified first-year cumulative CGPA of{" "}
                  <strong style={{ color: "var(--text-primary)" }}>8.85 / 10.0</strong>.
                </p>

                <p className="editorial-about-p">
                  My engineering focus centers on writing clean, deterministic software and constructing practical systems. Through computational research, competitive programming, and collegiate initiatives, I explore transportation delay estimation, electric vehicle infrastructure optimization, and applied machine learning models.
                </p>

                {/* 3-Column Metrics Ledger */}
                <div className="editorial-metrics-ledger">
                  <div className="editorial-metric-block">
                    <span className="editorial-metric-val">8.85</span>
                    <span className="editorial-metric-lbl">CGPA (First Year)</span>
                  </div>

                  <div className="editorial-metric-block">
                    <span className="editorial-metric-val">2 Works</span>
                    <span className="editorial-metric-lbl">IJIRT &amp; ICRICS</span>
                  </div>

                  <div className="editorial-metric-block">
                    <span className="editorial-metric-val">3 Repos</span>
                    <span className="editorial-metric-lbl">Engineering Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ===================================================================
          3. EDUCATION & ACADEMIC STANDING SECTION
          Chronological Academic Ledger with Period Tags and Score Badges
          =================================================================== */}
      <section id="education" className="section" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <RevealSection>
            <SectionHeading
              eyebrow="02 // ACADEMIC STANDING"
              title="Education & Academic Standing"
              subtitle="Verified academic milestones demonstrating foundational rigor, mathematical discipline, and consistent scholastic performance."
              align="left"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="editorial-ledger">
              <StaggerGrid staggerDelay={0.08}>
                {educationData.map((item) => (
                  <StaggerItem key={item.id}>
                    <div className="editorial-ledger-item">
                      {/* Column 1: Period */}
                      <span className="editorial-ledger-period">{item.period}</span>

                      {/* Column 2: Institution, Degree, Field, Location */}
                      <div>
                        <h3 className="editorial-ledger-inst">{item.institution}</h3>
                        <p className="editorial-ledger-degree">
                          {item.degree} {item.field && `• ${item.field}`}
                        </p>
                        <p className="editorial-ledger-meta">
                          Location: {item.location} • Status: {item.status}
                        </p>
                      </div>

                      {/* Column 3: Score Badge */}
                      <span className="editorial-score-badge">
                        {item.cgpa ? `First-Year CGPA: ${item.cgpa}` : `${item.scoreLabel}: ${item.score}`}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ===================================================================
          4. CORE TECHNICAL STACK SECTION
          Interactive 3D Skill Cards Cascading with StaggerGrid
          =================================================================== */}
      <section id="skills" className="section" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <RevealSection>
            <SectionHeading
              eyebrow="03 // CORE COMPETENCIES"
              title="Technical Skills"
              subtitle="Programming languages, database frameworks, and developer tools applied in coursework, algorithmic problem-solving, and web development."
              align="left"
            />
          </RevealSection>

          <StaggerGrid
            staggerDelay={0.08}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "var(--space-6)",
            }}
          >
            {skillCategories.map((category, idx) => (
              <StaggerItem key={category.name}>
                <SkillCard category={category} index={idx} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ===================================================================
          5. FEATURED PROJECTS SECTION
          Production-Grade Systems Cascading with StaggerGrid
          =================================================================== */}
      <section id="projects" className="section" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <RevealSection>
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
                <span className="section-eyebrow">04 // ARCHITECTURAL REPOSITORIES</span>
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">
                  Software engineering applications addressing railway delay tracking, EV charging slot discovery, and collegiate event management.
                </p>
              </div>
            </div>
          </RevealSection>

          <StaggerGrid staggerDelay={0.08} className="editorial-projects-stack">
            {projectsData.map((project, idx) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} index={idx} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ===================================================================
          6. RESEARCH & PUBLICATIONS SECTION
          IJIRT Peer-Reviewed Journal Article & ICRICS 2026 Conference Presentation
          =================================================================== */}
      <section id="research" className="section" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <RevealSection>
            <SectionHeading
              eyebrow="05 // ACADEMIC RESEARCH"
              title="Research & Publications"
              subtitle="Peer-reviewed scientific contributions in student retention prediction, explainable AI, and international conference presentations."
              align="left"
            />
          </RevealSection>

          <StaggerGrid staggerDelay={0.1} style={{ display: "grid", gap: "var(--space-6)", maxWidth: "860px" }}>
            <StaggerItem>
              <ResearchCard paper={publishedPaper} />
            </StaggerItem>
            <StaggerItem>
              <ResearchCard paper={conferencePresentation} isConference />
            </StaggerItem>
          </StaggerGrid>
        </div>
      </section>

      {/* ===================================================================
          7. CERTIFICATIONS & ACHIEVEMENTS SECTION
          Interactive Modals, Categorized Credentials, and Uncompromising Verification
          =================================================================== */}
      <RevealSection>
        <CertificatesSection />
      </RevealSection>

      {/* ===================================================================
          8. CONTACT SECTION
          Direct Transmission: Direct Email, Location, Status & Functional Form
          =================================================================== */}
      <section id="contact" className="section">
        <div className="container">
          <RevealSection>
            <div className="editorial-contact-grid">
              {/* Left Column: Direct Inquiries Information */}
              <div>
                <span className="section-eyebrow">07 // DIRECT TRANSMISSION</span>
                <h2 className="editorial-contact-lead">Let&apos;s Connect</h2>
                <p className="editorial-contact-sub">
                  I am actively seeking software engineering internships, technical collaborations, and applied computational research discussions. Feel free to send an inquiry directly via the form or email.
                </p>

                <div className="editorial-contact-rows">
                  <div className="editorial-contact-row">
                    <span className="editorial-contact-row-lbl">Email</span>
                    <a href="mailto:dhanushmk95@gmail.com" className="editorial-contact-row-val">
                      dhanushmk95@gmail.com
                    </a>
                  </div>

                  <div className="editorial-contact-row">
                    <span className="editorial-contact-row-lbl">Location</span>
                    <span className="editorial-contact-row-val">{personalData.location}</span>
                  </div>

                  <div className="editorial-contact-row">
                    <span className="editorial-contact-row-lbl">Institution</span>
                    <span className="editorial-contact-row-val">{personalData.college}</span>
                  </div>
                </div>

                {/* Status indicator */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "var(--radius-full)",
                    backgroundColor: "rgba(16, 185, 129, 0.08)",
                    border: "1px solid rgba(16, 185, 129, 0.28)",
                    fontSize: "12px",
                    color: "var(--status-success)",
                    fontWeight: 600,
                  }}
                >
                  <span
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      backgroundColor: "var(--status-success)",
                      boxShadow: "0 0 8px var(--status-success)",
                    }}
                    aria-hidden="true"
                  />
                  <span>Open for Summer / Fall Internships</span>
                </div>
              </div>

              {/* Right Column: Functional Contact Form */}
              <div>
                <ContactForm isConfigured={Boolean(process.env.CONTACT_EMAIL_API_KEY)} />
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
