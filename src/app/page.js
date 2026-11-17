import fs from "fs";
import path from "path";
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
  BookOpen,
} from "lucide-react";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import ResearchCard from "@/components/ResearchCard";
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
          1. REFINED TWO-COLUMN HERO SECTION
          =================================================================== */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Left Column: Developer Identity & Actions */}
            <div className="hero-content">
              <div className="hero-identifier">
                <span>Computer Science Engineering Student</span>
              </div>

              <p className="hero-greeting">Hi, I'm</p>
              <h1 className="hero-name">{personalData.name}</h1>
              <p className="hero-headline">{personalData.headline}</p>

              <p className="hero-intro">
                I build practical software applications with an interest in backend engineering, data structures, and applied AI.
                Currently an undergraduate at Sahyadri College of Engineering and Management (First-Year CGPA: 8.85).
              </p>

              {/* CTAs and Social Links */}
              <div className="hero-actions">
                <Button href="/projects" variant="primary">
                  <span>View Projects</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Button>

                {hasResumePdf ? (
                  <Button
                    href="/documents/resume.pdf"
                    variant="secondary"
                    download="Dhanush_MK_Resume.pdf"
                  >
                    <FileDown size={15} aria-hidden="true" />
                    <span>Download Resume</span>
                  </Button>
                ) : (
                  <Button
                    href="mailto:contact@dhanush.dev?subject=Resume%20Request%20-%20Dhanush%20M%20K"
                    variant="secondary"
                    title="Direct email request (Resume PDF pending upload)"
                  >
                    <FileDown size={15} aria-hidden="true" />
                    <span>Request Resume</span>
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

              {/* Quick Metadata */}
              <div className="hero-meta">
                <span className="hero-meta-item">
                  <MapPin size={13} color="var(--accent)" aria-hidden="true" />
                  <span>{personalData.location}</span>
                </span>
                <span className="hero-meta-item">
                  <GraduationCap size={13} color="var(--accent)" aria-hidden="true" />
                  <span>{personalData.college}</span>
                </span>
                <span className="hero-meta-item">
                  <span>First-Year CGPA: <strong>{personalData.cgpa}</strong></span>
                </span>
              </div>
            </div>

            {/* Right Column: Actual Portrait Presentation */}
            <div className="hero-portrait-wrapper">
              <div className="hero-portrait-frame">
                <Image
                  src={personalData.profileImage}
                  alt={personalData.profileImageAlt}
                  fill
                  sizes="(max-width: 860px) 220px, 320px"
                  priority
                  style={{ objectFit: "cover", objectPosition: "center 20%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. SELECTED PROJECTS SECTION
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
              <span className="section-eyebrow">Portfolio</span>
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
              <span>All Projects</span>
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
          3. TECHNICAL SKILLS SECTION
          =================================================================== */}
      <section className="section" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">Competencies</span>
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
            {skillCategories.map((category) => (
              <div
                key={category.name}
                style={{
                  padding: "var(--space-5)",
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <h3
                  style={{
                    fontSize: "var(--text-base)",
                    fontWeight: 700,
                    marginBottom: "var(--space-1)",
                  }}
                >
                  {category.name}
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--text-muted)",
                    marginBottom: "var(--space-4)",
                  }}
                >
                  {category.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      style={{
                        fontSize: "var(--text-xs)",
                        padding: "0.25rem 0.6rem",
                        backgroundColor: "var(--bg-tertiary)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius-sm)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          4. RESEARCH & PUBLICATIONS SECTION
          =================================================================== */}
      <section className="section" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">Academic Research</span>
            <h2 className="section-title">Research & Publications</h2>
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
          5. CONTACT SECTION
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
              <span className="section-eyebrow">Get In Touch</span>
              <h2 className="section-title">Contact</h2>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "var(--space-6)" }}>
                I am actively seeking software engineering internships, technical collaborations, and research discussions. Feel free to send a message or contact directly via email.
              </p>

              <div style={{ display: "grid", gap: "var(--space-3)", fontSize: "var(--text-sm)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                  <Mail size={16} color="var(--accent)" aria-hidden="true" />
                  <a href="mailto:contact@dhanush.dev" style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                    contact@dhanush.dev
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
