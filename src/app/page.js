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
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import ResearchCard from "@/components/ResearchCard";
import SocialLinks from "@/components/SocialLinks";
import SectionHeading from "@/components/SectionHeading";
import WordRotate from "@/components/WordRotate";
import { personalData } from "@/data/personal";
import { projectsData } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { publishedPaper } from "@/data/research";

const heroRoles = [
  "Computer Science Engineering Student",
  "Aspiring Software Developer",
  "Problem Solver & Algorithmic Thinker",
  "AI & Full-Stack Builder",
];

export default function HomePage() {
  return (
    <>
      {/* ===================================================================
          HERO SECTION (Reference-inspired creative design)
          =================================================================== */}
      <section
        className="section"
        style={{
          minHeight: "calc(100vh - 4.5rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "var(--space-12)",
          paddingBottom: "var(--space-16)",
          position: "relative",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              alignItems: "center",
              gap: "var(--space-12)",
            }}
          >
            {/* Left Content Column */}
            <div>
              {/* Dynamic Status Eyebrow */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "var(--space-2)",
                  padding: "0.4rem 1rem",
                  borderRadius: "var(--radius-full)",
                  background: "var(--accent-subtle)",
                  border: "1px solid var(--accent-border)",
                  marginBottom: "var(--space-5)",
                  boxShadow: "0 0 20px -4px var(--accent-glow)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <Sparkles size={15} color="var(--accent-light)" aria-hidden="true" />
                <span
                  style={{
                    fontSize: "var(--text-xs)",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--accent-light)",
                  }}
                >
                  <WordRotate words={heroRoles} duration={2600} />
                </span>
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: "-0.035em",
                  marginBottom: "var(--space-4)",
                }}
              >
                Building with logic, code, and vision. <br />
                I&apos;m <span className="text-gradient">{personalData.name}</span>
              </h1>

              {/* Location & Academic Meta */}
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
                <span className="flex items-center gap-1.5 badge" style={{ padding: "0.35rem 0.75rem" }}>
                  <MapPin size={14} color="var(--accent)" aria-hidden="true" />
                  {personalData.location}
                </span>
                <span className="flex items-center gap-1.5 badge" style={{ padding: "0.35rem 0.75rem" }}>
                  <GraduationCap size={14} color="var(--accent)" aria-hidden="true" />
                  {personalData.college}
                </span>
              </div>

              {/* Professional Narrative */}
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  marginBottom: "var(--space-8)",
                  maxWidth: "600px",
                }}
              >
                {personalData.introduction}
              </p>

              {/* Academic Distinction Highlight Card */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "var(--space-3)",
                  padding: "var(--space-3) var(--space-5)",
                  backgroundColor: "var(--bg-glass)",
                  border: "1px solid var(--border-glow)",
                  borderRadius: "var(--radius-lg)",
                  marginBottom: "var(--space-8)",
                  boxShadow: "0 8px 24px -4px rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "var(--accent-subtle)",
                    color: "var(--accent)",
                  }}
                >
                  <Award size={20} aria-hidden="true" />
                </div>
                <div>
                  <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", display: "block" }}>
                    Verified Academic Distinction
                  </span>
                  <span style={{ fontSize: "var(--text-sm)", fontWeight: 800, color: "var(--text-primary)" }}>
                    {personalData.cgpaLabel}: <span style={{ color: "var(--accent-light)" }}>{personalData.cgpa} CGPA</span>
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
                <Button href="/projects" variant="primary" size="lg" className="btn-pill btn-gradient">
                  <FolderGit2 size={18} aria-hidden="true" />
                  <span>Explore Featured Projects</span>
                </Button>

                <Button href="/about" variant="secondary" size="lg" className="btn-pill">
                  <span>About Me</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </Button>

                <Button href="/contact" variant="outline" size="lg" className="btn-pill">
                  <span>Contact Me</span>
                </Button>

                {personalData.resumeUrl && (
                  <Button href={personalData.resumeUrl} variant="outline" size="lg" className="btn-pill" isExternal>
                    <FileDown size={18} aria-hidden="true" />
                    <span>Download Resume</span>
                  </Button>
                )}
              </div>

              {/* Direct Social Links Row */}
              <div>
                <span
                  style={{
                    fontSize: "var(--text-xs)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--text-muted)",
                    display: "block",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  Professional Networks
                </span>
                <SocialLinks />
              </div>
            </div>

            {/* Right Column: Visual Avatar & Dimensional Frame */}
            <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
              <div
                className="animate-glow"
                style={{
                  position: "absolute",
                  inset: "-20px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 70%)",
                  filter: "blur(40px)",
                  zIndex: 0,
                }}
              />

              <div
                className="animate-float"
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  maxWidth: "380px",
                  aspectRatio: "1 / 1",
                  borderRadius: "50%",
                  padding: "10px",
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.6) 0%, rgba(139, 92, 246, 0.4) 50%, rgba(6, 182, 212, 0.6) 100%)",
                  boxShadow: "0 24px 60px -12px rgba(0, 0, 0, 0.8), 0 0 32px -4px var(--accent-glow)",
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
                    border: "3px solid rgba(255, 255, 255, 0.1)",
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
          FEATURED PROJECTS SHOWCASE SECTION
          =================================================================== */}
      <section
        id="projects"
        className="section"
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          backgroundColor: "rgba(11, 15, 25, 0.6)",
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
              marginBottom: "var(--space-10)",
            }}
          >
            <div>
              <span className="section-eyebrow">Featured Work 🚀</span>
              <h2 className="section-title">
                Engineered <span className="text-gradient">Software Projects</span>
              </h2>
              <p className="section-subtitle" style={{ margin: 0 }}>
                Practical engineering applications addressing real-world challenges in railway delay estimation, explainable supplier intelligence, and centralized campus engagement.
              </p>
            </div>
            <Button href="/projects" variant="outline" size="md" className="btn-pill">
              <span>View All 3 Projects</span>
              <ArrowRight size={16} aria-hidden="true" />
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
          TECHNICAL SKILLS SECTION
          =================================================================== */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Tech Stack ⚡"
            title="Confirmed Technical Skills"
            subtitle="Verified programming languages, database systems, and version control tools without fabricated proficiency ratings."
          />

          <div className="grid grid-cols-3" style={{ marginBottom: "var(--space-8)" }}>
            {skillCategories.map((category) => (
              <SkillCard key={category.name} category={category} />
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Button href="/skills" variant="secondary" size="md" className="btn-pill">
              <Code2 size={16} aria-hidden="true" />
              <span>Explore Detailed Technical Breakdown</span>
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
          backgroundColor: "rgba(11, 15, 25, 0.6)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <SectionHeading
            eyebrow="Academic Research 📄"
            title="Peer-Reviewed Research Publication"
            subtitle="Published academic research on rural student dropout early warning systems utilizing explainable predictions and automated welfare recommendations."
          />

          <div style={{ maxWidth: "960px", margin: "0 auto var(--space-8)" }}>
            <ResearchCard paper={publishedPaper} />
          </div>

          <div style={{ textAlign: "center" }}>
            <Button href="/achievements" variant="outline" size="md" className="btn-pill">
              <BookOpen size={16} aria-hidden="true" />
              <span>View Publications & International Conference Details</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
