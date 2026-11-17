import {
  Code2,
  Cpu,
  Terminal,
  Coffee,
  Database,
  GitBranch,
  Github,
  Layers,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import Button from "@/components/Button";
import { skillCategories } from "@/data/skills";

export const metadata = {
  title: "Technical Skills | DHANUSH",
  description:
    "Confirmed technical skills of Dhanush: C, C++, Python, Java, Supabase, Git, and GitHub. Organized by category without fabricated percentages.",
};

const marqueeSkills = [
  "C Programming",
  "C++ Algorithms",
  "Python",
  "Java",
  "Supabase Database",
  "Git Version Control",
  "GitHub Collaboration",
  "Data Structures",
  "Transportation Intelligence",
  "Explainable AI",
];

export default function SkillsPage() {
  return (
    <div className="section" style={{ paddingTop: "var(--space-12)" }}>
      <div className="container">
        <SectionHeading
          eyebrow="Competencies ⚡"
          title="Technical Skills & Stack"
          subtitle="Confirmed programming languages, database architectures, and developer tooling. Organized cleanly into core domains without arbitrary percentage bars."
        />

        {/* Marquee Ticker (Velocity Text inspired by reference) */}
        <div
          style={{
            marginBottom: "var(--space-12)",
            padding: "var(--space-4) 0",
            backgroundColor: "rgba(11, 15, 25, 0.5)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div className="marquee-container">
            <div className="marquee-track">
              {marqueeSkills.concat(marqueeSkills).map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-2)",
                    padding: "0.35rem 0.85rem",
                    borderRadius: "var(--radius-full)",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--border)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--accent)" }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-3" style={{ marginBottom: "var(--space-12)" }}>
          {skillCategories.map((category) => (
            <SkillCard key={category.name} category={category} />
          ))}
        </div>

        {/* Technical Philosophy Card */}
        <div
          className="card"
          style={{
            borderLeft: "5px solid var(--accent)",
            padding: "var(--space-8)",
            backgroundColor: "var(--bg-glass)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 16px 36px -8px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="flex items-center gap-3" style={{ marginBottom: "var(--space-3)" }}>
            <span
              style={{
                padding: "0.5rem",
                borderRadius: "var(--radius-md)",
                background: "var(--accent-subtle)",
                color: "var(--accent-light)",
                display: "inline-flex",
              }}
            >
              <Code2 size={22} aria-hidden="true" />
            </span>
            <h3 style={{ fontSize: "var(--text-2xl)", margin: 0, fontWeight: 800 }}>
              Practical Engineering Mindset
            </h3>
          </div>

          <p style={{ fontSize: "var(--text-base)", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "var(--space-6)" }}>
            My technical foundation emphasizes mastery of fundamental concepts rather than buzzwords. Memory management and algorithmic efficiency are explored through C/C++, while object-oriented software engineering and AI implementations are built using Python and Java, backed by Supabase relational cloud databases and Git workflows.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "var(--space-4)",
            }}
          >
            <div
              style={{
                padding: "var(--space-4)",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-center gap-2" style={{ marginBottom: "var(--space-1)" }}>
                <CheckCircle2 size={16} color="var(--accent)" />
                <strong style={{ fontSize: "var(--text-sm)", color: "var(--text-primary)" }}>
                  Algorithmic Rigor
                </strong>
              </div>
              <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Deep grounding in data structures, time/space complexity analysis, and pointer operations in C & C++.
              </p>
            </div>

            <div
              style={{
                padding: "var(--space-4)",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-center gap-2" style={{ marginBottom: "var(--space-1)" }}>
                <CheckCircle2 size={16} color="var(--accent)" />
                <strong style={{ fontSize: "var(--text-sm)", color: "var(--text-primary)" }}>
                  Data & Applied AI
                </strong>
              </div>
              <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Python applied toward transportation intelligence, delay calculation, and explainable AI pipelines.
              </p>
            </div>

            <div
              style={{
                padding: "var(--space-4)",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-center gap-2" style={{ marginBottom: "var(--space-1)" }}>
                <CheckCircle2 size={16} color="var(--accent)" />
                <strong style={{ fontSize: "var(--text-sm)", color: "var(--text-primary)" }}>
                  Modern Cloud Persistence
                </strong>
              </div>
              <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Postgres-backed Supabase cloud database architectures, schema validation, and real-time event tables.
              </p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "var(--space-12)" }}>
          <Button href="/projects" variant="primary" size="lg" className="btn-pill btn-gradient">
            <span>Explore Projects Built With These Technologies</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
