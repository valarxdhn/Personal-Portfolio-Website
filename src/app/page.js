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
import MaterialField from "@/components/MaterialField";
import HeroCard from "@/components/HeroCard";
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
          AURAL Interactive Experience: Procedural Material Field & 3D Hero Card
          =================================================================== */}
      <section id="home" className="aural-hero-section">
        {/* Procedural WebGL/Canvas Acoustic Depth Canvas */}
        <MaterialField />

        <div className="container aural-hero-container">
          <div className="aural-hero-grid">
            {/* Left Column: Greeting, Identity & Primary Actions */}
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
                <div className="hero-social-group">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="hero-social-link"
                    title="GitHub: valarxdhn"
                  >
                    <Github size={17} aria-hidden="true" />
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="hero-social-link"
                    title="LinkedIn: dhanushmk14"
                  >
                    <Linkedin size={17} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Perspective Photo Card */}
            <HeroCard />
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. ABOUT ME SECTION
          Unified Profile: 4:5 Portrait Card with Subtle Desktop Parallax, Metrics, CTAs
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
            <div className="about-bio-grid">
              {/* Left: 4:5 Vertical Portrait Container with Subtle Desktop Parallax */}
              <div>
                <SubtleParallax offset={15}>
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
                        background: "linear-gradient(to top, rgba(11, 15, 23, 0.75) 0%, rgba(11, 15, 23, 0) 40%)",
                        pointerEvents: "none",
                      }}
                      aria-hidden="true"
                    />
                  </div>
                </SubtleParallax>
              </div>

              {/* Right: Bio Narrative & Scannable Indicators */}
              <div>
                <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 700, marginBottom: "var(--space-1)", color: "var(--text-primary)" }}>
                  {personalData.name}
                </h3>
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

                {/* Secondary CTAs */}
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--space-3)" }}>
                  <Button href="#projects" variant="primary" className="about-cta-btn-primary">
                    <span>View Projects</span>
                    <ArrowRight size={15} className="about-btn-arrow" aria-hidden="true" />
                  </Button>

                  <Button
                    href="mailto:dhanushmk95@gmail.com?subject=Resume%20Request%20-%20Dhanush"
                    variant="secondary"
                    className="about-cta-btn-secondary"
                    title="Request resume via email"
                  >
                    <FileDown size={15} className="about-btn-download-icon" aria-hidden="true" />
                    <span>Request Resume</span>
                  </Button>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ===================================================================
          3. EDUCATION & ACADEMIC STANDING SECTION
          Verified Records with StaggerGrid Cascading Entrances
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
            <div
              className="card"
              style={{
                padding: "var(--space-6) var(--space-8)",
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <StaggerGrid staggerDelay={0.08}>
                {educationData.map((item, idx) => (
                  <StaggerItem key={item.id}>
                    {idx > 0 && <div className="academic-divider" />}

                    <div className="academic-entry">
                      {/* Top Row: Institution Name & Status Badge */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          flexWrap: "wrap",
                          gap: "var(--space-2)",
                          marginBottom: "var(--space-2)",
                        }}
                      >
                        <div>
                          <h3 style={{ fontSize: "var(--text-base)", fontWeight: 700, margin: 0, color: "var(--text-primary)" }}>
                            {item.institution}
                          </h3>
                          <p style={{ fontSize: "var(--text-sm)", color: "var(--accent)", fontWeight: 500, margin: "2px 0 0 0" }}>
                            {item.degree} {item.field && `• ${item.field}`}
                          </p>
                        </div>

                        {/* Status Indicator */}
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

                      {/* Academic Score Pill */}
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

          <StaggerGrid staggerDelay={0.08} className="grid grid-cols-3">
            {projectsData.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} />
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
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "var(--space-10)",
                alignItems: "flex-start",
              }}
            >
              {/* Left Column: Direct Inquiries Information */}
              <div>
                <span className="section-eyebrow">07 // DIRECT TRANSMISSION</span>
                <h2 className="section-title">Contact &amp; Collaboration</h2>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "var(--space-6)" }}>
                  I am actively seeking software engineering internships, technical collaborations, and research discussions. Feel free to send an inquiry directly via the form or email.
                </p>

                <div style={{ display: "grid", gap: "var(--space-4)", fontSize: "var(--text-sm)", marginBottom: "var(--space-6)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "32px",
                        height: "32px",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border)",
                        color: "var(--accent)",
                      }}
                    >
                      <Mail size={16} aria-hidden="true" />
                    </span>
                    <div>
                      <span style={{ display: "block", fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Email</span>
                      <a href="mailto:dhanushmk95@gmail.com" style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                        dhanushmk95@gmail.com
                      </a>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "32px",
                        height: "32px",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border)",
                        color: "var(--accent)",
                      }}
                    >
                      <MapPin size={16} aria-hidden="true" />
                    </span>
                    <div>
                      <span style={{ display: "block", fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Location</span>
                      <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{personalData.location}</span>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "32px",
                        height: "32px",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border)",
                        color: "var(--accent)",
                      }}
                    >
                      <GraduationCap size={16} aria-hidden="true" />
                    </span>
                    <div>
                      <span style={{ display: "block", fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Institution</span>
                      <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{personalData.college}</span>
                    </div>
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
