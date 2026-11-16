import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  GraduationCap,
  Award,
  ArrowRight,
  BookOpen,
  Code2,
  FolderGit2,
  FileDown,
  Sparkles,
} from "lucide-react";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import ResearchCard from "@/components/ResearchCard";
import SocialLinks from "@/components/SocialLinks";
import SectionHeading from "@/components/SectionHeading";
import { personalData } from "@/data/personal";
import { projectsData } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { publishedPaper } from "@/data/research";

export default function HomePage() {
  return (
    <>
      {/* ===================================================================
          HERO SECTION
          =================================================================== */}
      <section className="section" style={{ paddingTop: "var(--space-12)", paddingBottom: "var(--space-16)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              alignItems: "center",
              gap: "var(--space-12)",
            }}
          >
            {/* Left Column: Introductions & Actions */}
            <div>
              {/* Status Pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "var(--space-2)",
                  padding: "0.35rem 0.85rem",
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "var(--accent-subtle)",
                  border: "1px solid var(--accent-border)",
                  marginBottom: "var(--space-4)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  color: "var(--accent-light)",
                }}
              >
                <Sparkles size={14} aria-hidden="true" />
                <span>Computer Science Engineering Student</span>
              </div>

              {/* Name & Headline */}
              <h1
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  marginBottom: "var(--space-3)",
                }}
              >
                Hi, I&apos;m{" "}
                <span style={{ color: "var(--accent)" }}>{personalData.name}</span>
              </h1>

              {/* Location & College Quick Meta */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "var(--space-4)",
                  color: "var(--text-secondary)",
                  fontSize: "var(--text-sm)",
                  marginBottom: "var(--space-6)",
                }}
              >
                <span className="flex items-center gap-1">
                  <MapPin size={16} color="var(--accent)" aria-hidden="true" />
                  {personalData.location}
                </span>
                <span className="flex items-center gap-1">
                  <GraduationCap size={16} color="var(--accent)" aria-hidden="true" />
                  {personalData.college}
                </span>
              </div>

              {/* Professional Introduction */}
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                  marginBottom: "var(--space-6)",
                  maxWidth: "600px",
                }}
              >
                {personalData.introduction}
              </p>

              {/* Academic Highlight Callout */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "var(--space-3)",
                  padding: "var(--space-3) var(--space-4)",
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  marginBottom: "var(--space-8)",
                }}
              >
                <Award size={20} color="var(--accent)" aria-hidden="true" />
                <div>
                  <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", display: "block" }}>
                    Academic Performance
                  </span>
                  <span style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--text-primary)" }}>
                    {personalData.cgpaLabel}: {personalData.cgpa} CGPA
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "var(--space-3)",
                  marginBottom: "var(--space-8)",
                }}
              >
                <Button href="/projects" variant="primary" size="md">
                  <FolderGit2 size={16} aria-hidden="true" />
                  <span>Explore Projects</span>
                </Button>

                <Button href="/about" variant="secondary" size="md">
                  <span>About Me</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Button>

                <Button href="/contact" variant="outline" size="md">
                  <span>Contact Me</span>
                </Button>

                {personalData.resumeUrl && (
                  <Button href={personalData.resumeUrl} variant="outline" size="md" isExternal>
                    <FileDown size={16} aria-hidden="true" />
                    <span>Download Resume</span>
                  </Button>
                )}
              </div>

              {/* Social Links Bar */}
              <div>
                <span
                  style={{
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--text-muted)",
                    display: "block",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  Connect with me
                </span>
                <SocialLinks />
              </div>
            </div>

            {/* Right Column: Profile Image / Visual Showcase */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "380px",
                  aspectRatio: "1 / 1",
                  borderRadius: "50%",
                  padding: "8px",
                  background: "linear-gradient(135deg, var(--accent) 0%, rgba(59, 130, 246, 0.1) 100%)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    overflow: "hidden",
                    backgroundColor: "var(--bg-secondary)",
                    position: "relative",
                  }}
                >
                  <Image
                    src={personalData.profileImage}
                    alt={personalData.profileImageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    priority
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          FEATURED PROJECTS PREVIEW SECTION
          =================================================================== */}
      <section
        className="section"
        style={{
          backgroundColor: "var(--bg-secondary)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "var(--space-4)",
              marginBottom: "var(--space-8)",
            }}
          >
            <div>
              <span className="section-eyebrow">Featured Work</span>
              <h2 className="section-title">Software Projects</h2>
              <p className="section-subtitle" style={{ margin: 0 }}>
                Real-world engineering applications focused on transportation intelligence, AI explainability, and campus systems.
              </p>
            </div>
            <Button href="/projects" variant="outline" size="sm">
              <span>View All 3 Projects</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Button>
          </div>

          <div className="grid grid-cols-3">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          TECHNICAL SKILLS PREVIEW SECTION
          =================================================================== */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Competencies"
            title="Technical Skills"
            subtitle="Confirmed technologies in programming languages, databases, and development tooling."
          />

          <div className="grid grid-cols-3">
            {skillCategories.map((category) => (
              <SkillCard key={category.name} category={category} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "var(--space-8)" }}>
            <Button href="/skills" variant="secondary" size="md">
              <Code2 size={16} aria-hidden="true" />
              <span>Explore Detailed Skill Breakdown</span>
            </Button>
          </div>
        </div>
      </section>

      {/* ===================================================================
          RESEARCH & PUBLICATION HIGHLIGHT
          =================================================================== */}
      <section
        className="section"
        style={{
          backgroundColor: "var(--bg-secondary)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <SectionHeading
            eyebrow="Academic Research"
            title="Research Publication Highlight"
            subtitle="Published academic research addressing rural student dropout prediction using explainable AI and automated notification workflows."
          />

          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <ResearchCard paper={publishedPaper} />
          </div>

          <div style={{ textAlign: "center", marginTop: "var(--space-8)" }}>
            <Button href="/achievements" variant="outline" size="md">
              <BookOpen size={16} aria-hidden="true" />
              <span>View Publications & Conference Presentation</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
