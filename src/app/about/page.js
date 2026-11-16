import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  GraduationCap,
  Award,
  BookOpen,
  FolderGit2,
  Code2,
  CheckCircle,
  Sparkles,
  ArrowRight,
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
    <div className="section" style={{ paddingTop: "var(--space-10)" }}>
      <div className="container">
        {/* Page Header */}
        <SectionHeading
          eyebrow="Biography"
          title="About Me & Education"
          subtitle="Computer Science Engineering student focused on software engineering, problem-solving, and practical technical solutions."
        />

        {/* Bio & Profile Snapshot */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--space-10)",
            alignItems: "center",
            marginBottom: "var(--space-16)",
          }}
        >
          {/* Profile Image Card */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="card"
              style={{
                maxWidth: "360px",
                width: "100%",
                padding: "var(--space-6)",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "3px solid var(--accent)",
                  marginBottom: "var(--space-4)",
                  backgroundColor: "var(--bg-secondary)",
                }}
              >
                <Image
                  src={personalData.profileImage}
                  alt={personalData.profileImageAlt}
                  fill
                  sizes="180px"
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-1)" }}>
                {personalData.name}
              </h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--accent-light)", marginBottom: "var(--space-3)" }}>
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
                  padding: "var(--space-3)",
                  backgroundColor: "var(--bg-secondary)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border)",
                  marginBottom: "var(--space-4)",
                  textAlign: "left",
                }}
              >
                <div className="flex items-center gap-2">
                  <MapPin size={14} color="var(--accent)" aria-hidden="true" />
                  <span>{personalData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={14} color="var(--accent)" aria-hidden="true" />
                  <span>{personalData.college}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={14} color="var(--accent)" aria-hidden="true" />
                  <span>First-Year CGPA: {personalData.cgpa}</span>
                </div>
              </div>

              <SocialLinks />
            </div>
          </div>

          {/* Detailed Narrative */}
          <div>
            <span className="section-eyebrow" style={{ marginBottom: "var(--space-3)" }}>
              Career Background
            </span>
            <h3 style={{ fontSize: "var(--text-2xl)", marginBottom: "var(--space-4)" }}>
              Aspiring Software Developer Building Practical Solutions
            </h3>
            <p style={{ fontSize: "var(--text-base)", color: "var(--text-secondary)", marginBottom: "var(--space-4)", lineHeight: 1.75 }}>
              {personalData.introduction}
            </p>
            <p style={{ fontSize: "var(--text-base)", color: "var(--text-secondary)", marginBottom: "var(--space-6)", lineHeight: 1.75 }}>
              My engineering approach centers around software craftsmanship, clean code architecture, and leveraging emerging artificial intelligence techniques to tackle tangible issues—from public transportation delay forecasting to transparent supplier sustainability evaluation.
            </p>

            <h4 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-3)" }}>
              Core Technical Interests
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "var(--space-3)",
                marginBottom: "var(--space-6)",
              }}
            >
              {personalData.interests.map((interest) => (
                <div
                  key={interest}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-2)",
                    padding: "0.5rem 0.75rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle size={14} color="var(--accent)" aria-hidden="true" />
                  <span>{interest}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <Button href="/projects" variant="primary">
                <FolderGit2 size={16} aria-hidden="true" />
                <span>Explore Projects</span>
              </Button>
              <Button href="/skills" variant="secondary">
                <Code2 size={16} aria-hidden="true" />
                <span>View Skills</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <SectionHeading
            eyebrow="Academic Background"
            title="Education"
            subtitle="Undergraduate engineering coursework and verified academic performance."
            align="left"
          />

          <div className="grid grid-cols-1">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  borderLeft: "4px solid var(--accent)",
                  padding: "var(--space-8)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "var(--space-4)",
                    marginBottom: "var(--space-4)",
                  }}
                >
                  <div>
                    <span className="badge badge-accent" style={{ marginBottom: "var(--space-2)" }}>
                      Undergraduate Degree
                    </span>
                    <h3 style={{ fontSize: "var(--text-2xl)", marginBottom: "var(--space-1)" }}>
                      {edu.degree}
                    </h3>
                    <h4 style={{ fontSize: "var(--text-lg)", color: "var(--accent-light)", fontWeight: 600 }}>
                      {edu.field}
                    </h4>
                    <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginTop: "4px" }}>
                      {edu.institution} • {edu.location}
                    </p>
                  </div>

                  <div
                    style={{
                      textAlign: "right",
                      backgroundColor: "var(--bg-secondary)",
                      padding: "var(--space-4) var(--space-6)",
                      borderRadius: "var(--radius-lg)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", display: "block" }}>
                      {edu.cgpaLabel}
                    </span>
                    <span
                      style={{
                        fontSize: "var(--text-3xl)",
                        fontWeight: 900,
                        color: "var(--accent)",
                        lineHeight: 1,
                      }}
                    >
                      {edu.cgpa}
                    </span>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", display: "block" }}>
                      Scale of 10.0
                    </span>
                  </div>
                </div>

                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "var(--space-4)", marginTop: "var(--space-2)" }}>
                  <h5 style={{ fontSize: "var(--text-sm)", marginBottom: "var(--space-2)", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)" }}>
                    Academic Highlights
                  </h5>
                  <ul style={{ listStyle: "none", paddingLeft: 0, display: "grid", gap: "var(--space-2)" }}>
                    {edu.highlights.map((h, i) => (
                      <li key={i} style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--accent)" }} />
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
