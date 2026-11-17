import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  GraduationCap,
  Award,
  BookOpen,
  FileDown,
  ArrowRight,
  Code2,
} from "lucide-react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { personalData } from "@/data/personal";
import { educationData } from "@/data/education";
import { publishedPaper } from "@/data/research";

export const metadata = {
  title: "About | Dhanush",
  description:
    "Academic background, software engineering interests, and research contributions of Dhanush, Computer Science Engineering Student at Sahyadri College.",
};

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "900px" }}>
        <SectionHeading
          eyebrow="Background"
          title="About Me"
          subtitle="Computer Science Engineering student at Sahyadri College focused on backend software development, algorithms, and practical engineering solutions."
        />

        {/* Narrative & Profile Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "var(--space-8)",
            alignItems: "flex-start",
            marginBottom: "var(--space-12)",
          }}
        >
          {/* Photograph */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                position: "relative",
                width: "240px",
                height: "240px",
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
                sizes="240px"
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Core Introduction */}
          <div>
            <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 700, marginBottom: "var(--space-3)" }}>
              {personalData.name}
            </h3>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "var(--space-4)" }}>
              I am a Computer Science and Engineering undergraduate student at{" "}
              <strong style={{ color: "var(--text-primary)" }}>Sahyadri College of Engineering and Management</strong> in Mangalore, Karnataka, holding a first-year CGPA of <strong>8.85</strong>.
            </p>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "var(--space-6)" }}>
              My engineering focus centers on writing clean, maintainable software and building practical solutions. Through academic research and personal projects, I explore transportation delay estimation, electric vehicle charging discovery, and applied machine learning frameworks.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>
              <Button href="/projects" variant="primary">
                <span>View Projects</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Button>
              <Button
                href={personalData.resumeUrl || "/contact"}
                variant="secondary"
                download={personalData.resumeUrl ? "Dhanush_Resume.pdf" : undefined}
              >
                <FileDown size={14} aria-hidden="true" />
                <span>Download Resume</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Education Details */}
        <section style={{ marginBottom: "var(--space-12)" }}>
          <h3
            style={{
              fontSize: "var(--text-lg)",
              fontWeight: 700,
              marginBottom: "var(--space-4)",
              paddingBottom: "var(--space-2)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            Education & Academic Standing
          </h3>

          <div
            className="card"
            style={{
              padding: "var(--space-6)",
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "var(--space-2)", marginBottom: "var(--space-2)" }}>
              <div>
                <h4 style={{ fontSize: "var(--text-base)", fontWeight: 700, margin: 0 }}>
                  {educationData.institution}
                </h4>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--accent)", margin: "2px 0 0 0" }}>
                  {educationData.degree}
                </p>
              </div>
              <span className="badge badge-accent">
                {educationData.period}
              </span>
            </div>

            <div
              style={{
                display: "inline-block",
                padding: "0.25rem 0.6rem",
                backgroundColor: "var(--bg-tertiary)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-sm)",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                color: "var(--text-primary)",
                margin: "var(--space-2) 0 var(--space-4) 0",
              }}
            >
              Academic Performance: First-Year CGPA – {educationData.cgpa}
            </div>

            <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", margin: 0 }}>
              Location: {educationData.location} • Status: {educationData.status}
            </p>
          </div>
        </section>

        {/* Research Contribution Snapshot */}
        <section>
          <h3
            style={{
              fontSize: "var(--text-lg)",
              fontWeight: 700,
              marginBottom: "var(--space-4)",
              paddingBottom: "var(--space-2)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            Research Publications
          </h3>

          <div
            className="card"
            style={{
              padding: "var(--space-6)",
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-2)" }}>
              <span className="badge badge-accent">Journal Article</span>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>2026</span>
            </div>
            <h4 style={{ fontSize: "var(--text-base)", fontWeight: 700, marginBottom: "var(--space-1)" }}>
              {publishedPaper.title}
            </h4>
            <p style={{ fontSize: "var(--text-xs)", color: "var(--accent)", fontWeight: 600, marginBottom: "var(--space-3)" }}>
              {publishedPaper.journal} (Paper ID: {publishedPaper.paperId}, pp. {publishedPaper.pages})
            </p>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "var(--space-4)" }}>
              {publishedPaper.summary}
            </p>
            <div>
              <Button href={publishedPaper.publicationUrl} isExternal variant="outline" size="sm">
                <span>View Manuscript on IJIRT</span>
                <ArrowRight size={13} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
