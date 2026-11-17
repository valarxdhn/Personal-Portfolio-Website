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
  Award,
  Code2,
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

  return (
    <>
      {/* ===================================================================
          1. HERO SECTION
          Answers: Who am I? What do I build? What technologies do I use?
          Where can someone explore my work? How can someone contact me?
          =================================================================== */}
      <section
        className="section"
        style={{
          paddingTop: "var(--space-12)",
          paddingBottom: "var(--space-16)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              alignItems: "center",
              gap: "var(--space-10)",
            }}
          >
            {/* Left: Text Introduction & CTAs */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "var(--space-2)",
                  fontSize: "var(--text-xs)",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontWeight: 600,
                  marginBottom: "var(--space-3)",
                }}
              >
                <span>Computer Science Engineering Student</span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.25rem, 4vw, 3rem)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  marginBottom: "var(--space-4)",
                  letterSpacing: "-0.025em",
                }}
              >
                {personalData.name}
              </h1>

              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "var(--space-6)",
                  maxWidth: "560px",
                }}
              >
                Undergraduate student at{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  Sahyadri College of Engineering and Management
                </strong>{" "}
                (First-Year CGPA: 8.85). I build practical software applications focused on
                transportation intelligence, systems problem-solving, and applied AI using C, C++, Python, Java, and modern web technologies.
              </p>

              {/* CTAs: Primary "View Projects", Secondary "Download Resume", and Socials */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "var(--space-3)",
                  marginBottom: "var(--space-6)",
                }}
              >
                <Button href="/projects" variant="primary">
                  <span>View Projects</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Button>

                <Button
                  href={personalData.resumeUrl || "#contact"}
                  variant="secondary"
                  download={personalData.resumeUrl ? "Dhanush_Resume.pdf" : undefined}
                >
                  <FileDown size={15} aria-hidden="true" />
                  <span>Download Resume</span>
                </Button>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-1)",
                    marginLeft: "var(--space-2)",
                  }}
                >
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="btn btn-ghost btn-sm"
                    style={{ color: "var(--text-muted)", padding: "0.4rem" }}
                  >
                    <Github size={18} aria-hidden="true" />
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="btn btn-ghost btn-sm"
                    style={{ color: "var(--text-muted)", padding: "0.4rem" }}
                  >
                    <Linkedin size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Quick Metadata */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--space-4)",
                  fontSize: "var(--text-xs)",
                  color: "var(--text-muted)",
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <MapPin size={13} color="var(--accent)" aria-hidden="true" />
                  {personalData.location}
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <GraduationCap size={13} color="var(--accent)" aria-hidden="true" />
                  First-Year CGPA: {personalData.cgpa}
                </span>
              </div>
            </div>

            {/* Right: Actual Photograph */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  position: "relative",
                  width: "260px",
                  height: "260px",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  backgroundColor: "var(--bg-secondary)",
                }}
              >
                <Image
                  src={personalData.profileImage}
                  alt={personalData.profileImageAlt}
                  fill
                  sizes="260px"
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. SELECTED PROJECTS
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
                Software engineering projects addressing transportation intelligence, EV charging discovery, and campus activity management.
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
              <span>View All Projects</span>
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
          3. TECHNICAL SKILLS
          =================================================================== */}
      <section className="section" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">Competencies</span>
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">
              Programming languages, core foundations, and engineering tools applied across academic coursework and software projects.
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
          4. RESEARCH & PUBLICATIONS
          =================================================================== */}
      <section className="section" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">Academic Research</span>
            <h2 className="section-title">Research & Publications</h2>
            <p className="section-subtitle">
              Peer-reviewed journal publication and academic conference presentations covering applied machine learning and early-warning systems.
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
                I am actively seeking software engineering internship opportunities and academic project collaborations. Feel free to send a message or contact directly via email.
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
