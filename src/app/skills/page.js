import { Code2, Cpu, Terminal, Coffee, Database, GitBranch, Github, Layers, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import Button from "@/components/Button";
import { skillCategories } from "@/data/skills";

export const metadata = {
  title: "Technical Skills | DHANUSH",
  description:
    "Confirmed technical skills of Dhanush: C, C++, Python, Java, Supabase, Git, and GitHub. Organized by category without fabricated percentages.",
};

export default function SkillsPage() {
  return (
    <div className="section" style={{ paddingTop: "var(--space-10)" }}>
      <div className="container">
        <SectionHeading
          eyebrow="Skill Set"
          title="Technical Skills"
          subtitle="Confirmed programming languages, database systems, and developer tools. Structured cleanly by technical category without arbitrary ratings."
        />

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-3" style={{ marginBottom: "var(--space-12)" }}>
          {skillCategories.map((category) => (
            <SkillCard key={category.name} category={category} />
          ))}
        </div>

        {/* Technical Philosophy & Implementation Card */}
        <div
          className="card"
          style={{
            borderLeft: "4px solid var(--accent)",
            padding: "var(--space-8)",
            backgroundColor: "var(--bg-secondary)",
          }}
        >
          <div className="flex items-center gap-2" style={{ marginBottom: "var(--space-3)" }}>
            <span
              style={{
                padding: "0.4rem",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--accent-subtle)",
                color: "var(--accent)",
                display: "inline-flex",
              }}
            >
              <Code2 size={20} aria-hidden="true" />
            </span>
            <h3 style={{ fontSize: "var(--text-xl)", margin: 0 }}>
              Practical Technical Approach
            </h3>
          </div>

          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "var(--space-4)" }}>
            Rather than accumulating superficial keywords, my focus is directed on mastering foundational algorithms in C/C++, writing maintainable object-oriented software in Java and Python, managing cloud databases with Supabase, and adopting rigorous Git version control practices for every collaborative and solo project.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "var(--space-4)",
              marginTop: "var(--space-2)",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-2)" }}>
              <CheckCircle size={16} color="var(--accent)" style={{ marginTop: "2px" }} />
              <div>
                <strong style={{ fontSize: "var(--text-sm)", color: "var(--text-primary)" }}>Algorithmic Thinking:</strong>
                <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
                  Deep conceptual grounding in C and C++ memory management, pointers, and data structures.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-2)" }}>
              <CheckCircle size={16} color="var(--accent)" style={{ marginTop: "2px" }} />
              <div>
                <strong style={{ fontSize: "var(--text-sm)", color: "var(--text-primary)" }}>Data & AI Applications:</strong>
                <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
                  Python applied to transportation modeling, delay prediction, and explainable AI algorithms.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-2)" }}>
              <CheckCircle size={16} color="var(--accent)" style={{ marginTop: "2px" }} />
              <div>
                <strong style={{ fontSize: "var(--text-sm)", color: "var(--text-primary)" }}>Cloud Backend & Persistence:</strong>
                <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
                  Supabase database schemas, authentication, and structured real-time data stores.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "var(--space-10)" }}>
          <Button href="/projects" variant="primary">
            <span>See These Skills Applied In Featured Projects</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
