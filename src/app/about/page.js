import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  GraduationCap,
  Award,
  BookOpen,
  FolderGit2,
  Code2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Compass,
} from "lucide-react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import SocialLinks from "@/components/SocialLinks";
import { personalData } from "@/data/personal";
import { educationData } from "@/data/education";

export const metadata = {
  title: "About & Education | DHANUSH",
  description:
    "Learn about Dhanush, Computer Science Engineering Student at Sahyadri College of Engineering and Management. Academic background, CGPA, interests, and career goals.",
};

export default function AboutPage() {
  return (
    <div className="section" style={{ paddingTop: "var(--space-12)" }}>
      <div className="container">
        {/* Page Header */}
        <SectionHeading
          eyebrow="Biography & Goals"
          title="About Me & Education"
          subtitle="Computer Science Engineering student focused on software engineering, problem-solving, and practical technological solutions."
        />

        {/* Narrative & Profile Snapshot */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--space-12)",
            alignItems: "center",
            marginBottom: "var(--space-20)",
          }}
        >
          {/* Left Column: Glass Profile Card */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="card"
              style={{
                maxWidth: "380px",
                width: "100%",
                padding: "var(--space-8)",
                textAlign: "center",
                alignItems: "center",
                border: "1px solid var(--border-glow)",
                boxShadow: "0 16px 40px -10px rgba(0, 0, 0, 0.6), 0 0 20px -4px var(--accent-glow)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "190px",
                  height: "190px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  padding: "4px",
                  background: "var(--gradient-accent)",
                  marginBottom: "var(--space-4)",
                  boxShadow: "0 8px 24px rgba(59, 130, 246, 0.4)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    overflow: "hidden",
                    backgroundColor: "var(--bg-secondary)",
                  }}
                >
                  <Image
                    src={personalData.profileImage}
                    alt={personalData.profileImageAlt}
                    fill
                    sizes="190px"
                    priority
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>

              <h3 style={{ fontSize: "var(--text-2xl)", marginBottom: "var(--space-1)", fontWeight: 800 }}>
                {personalData.name}
              </h3>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--accent-light)",
                  fontWeight: 600,
                  marginBottom: "var(--space-4)",
                }}
              >
                {personalData.role}
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-2)",
                  fontSize: "var(--text-xs)",
                  color: "var(--text-secondary)",
                  width: "100%",
                  padding: "var(--space-4)",
                  backgroundColor: "rgba(15, 23, 42, 0.6)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border)",
                  marginBottom: "var(--space-5)",
                  textAlign: "left",
                }}
              >
                <div className="flex items-center gap-2">
                  <MapPin size={15} color="var(--accent)" aria-hidden="true" />
                  <span>{personalData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={15} color="var(--accent)" aria-hidden="true" />
                  <span>{personalData.college}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={15} color="var(--accent)" aria-hidden="true" />
                  <span>
                    First-Year CGPA: <strong style={{ color: "var(--text-primary)" }}>{personalData.cgpa} / 10.0</strong>
                  </span>
                </div>
              </div>

              <SocialLinks />
            </div>
          </div>

          {/* Right Column: Editorial Journey */}
          <div>
            <span className="section-eyebrow" style={{ marginBottom: "var(--space-3)" }}>
              Career Philosophy & Goals
            </span>
            <h3 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "var(--space-4)", lineHeight: 1.25 }}>
              Passionate about software craftsmanship, clean logic, and real-world impact.
            </h3>

            <p style={{ fontSize: "var(--text-base)", color: "var(--text-secondary)", marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
              {personalData.introduction}
            </p>

            <p style={{ fontSize: "var(--text-base)", color: "var(--text-secondary)", marginBottom: "var(--space-6)", lineHeight: 1.8 }}>
              As an undergraduate engineer, I believe in grounding every project in practical utility—whether forecasting delays across Indian Railways transit networks, auditing supply-chain sustainability with explainable AI models, or unifying collegiate event workflows.
            </p>

            <h4 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-3)", fontWeight: 700 }}>
              Key Technical Focus Areas
            </h4>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                gap: "var(--space-3)",
                marginBottom: "var(--space-8)",
              }}
            >
              {personalData.interests.map((interest) => (
                <div
                  key={interest}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-2)",
                    padding: "0.6rem 0.85rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid var(--border)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <CheckCircle2 size={16} color="var(--accent)" aria-hidden="true" />
                  <span>{interest}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <Button href="/projects" variant="primary" className="btn-pill btn-gradient">
                <FolderGit2 size={18} aria-hidden="true" />
                <span>Explore Featured Projects</span>
              </Button>
              <Button href="/skills" variant="secondary" className="btn-pill">
                <Code2 size={18} aria-hidden="true" />
                <span>View Technical Skills</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <SectionHeading
            eyebrow="Academic History"
            title="Formal Undergraduate Education"
            subtitle="Undergraduate engineering curriculum and verified first-year academic results."
            align="left"
          />

          <div className="grid grid-cols-1">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="card card-hover"
                style={{
                  borderLeft: "5px solid var(--accent)",
                  padding: "var(--space-8)",
                  boxShadow: "0 12px 32px -4px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "var(--space-4)",
                    marginBottom: "var(--space-6)",
                  }}
                >
                  <div>
                    <span className="badge badge-accent" style={{ marginBottom: "var(--space-2)" }}>
                      Bachelor of Engineering
                    </span>
                    <h3 style={{ fontSize: "var(--text-2xl)", marginBottom: "var(--space-1)", fontWeight: 800 }}>
                      {edu.institution}
                    </h3>
                    <h4 style={{ fontSize: "var(--text-lg)", color: "var(--accent-light)", fontWeight: 600 }}>
                      {edu.degree} – {edu.field}
                    </h4>
                    <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginTop: "4px" }}>
                      📍 {edu.location}
                    </p>
                  </div>

                  {/* CGPA Stat Box */}
                  <div
                    style={{
                      textAlign: "center",
                      backgroundColor: "rgba(15, 23, 42, 0.8)",
                      padding: "var(--space-4) var(--space-8)",
                      borderRadius: "var(--radius-lg)",
                      border: "1px solid var(--border-glow)",
                      boxShadow: "0 8px 24px -4px rgba(0, 0, 0, 0.4), 0 0 16px -4px var(--accent-glow)",
                    }}
                  >
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", display: "block", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {edu.cgpaLabel}
                    </span>
                    <span
                      style={{
                        fontSize: "var(--text-4xl)",
                        fontWeight: 900,
                        color: "var(--accent-light)",
                        lineHeight: 1.1,
                        display: "block",
                      }}
                    >
                      {edu.cgpa}
                    </span>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
                      Scale of 10.0
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    borderTop: "1px solid var(--border)",
                    paddingTop: "var(--space-5)",
                    marginTop: "var(--space-2)",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "var(--text-xs)",
                      marginBottom: "var(--space-3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--text-muted)",
                      fontWeight: 700,
                    }}
                  >
                    Academic Highlights & Curriculum Focus
                  </h5>
                  <ul style={{ listStyle: "none", paddingLeft: 0, display: "grid", gap: "var(--space-2)" }}>
                    {edu.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "var(--text-sm)",
                          color: "var(--text-secondary)",
                          display: "flex",
                          alignItems: "center",
                          gap: "var(--space-3)",
                        }}
                      >
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)" }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
