import { Code2, Cpu, Terminal, Coffee, Database, GitBranch, Github, Layers } from "lucide-react";

const skillIconMap = {
  Code2,
  Cpu,
  Terminal,
  Coffee,
  Database,
  GitBranch,
  Github,
};

export default function SkillCard({ category }) {
  if (!category) return null;

  return (
    <div
      className="card"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--bg-secondary)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--space-6)",
      }}
    >
      <div style={{ marginBottom: "var(--space-3)" }}>
        <h3 style={{ fontSize: "var(--text-base)", fontWeight: 700, margin: "0 0 2px 0" }}>
          {category.name}
        </h3>
        <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", margin: 0 }}>
          {category.description}
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
          gap: "var(--space-2)",
          marginTop: "auto",
          paddingTop: "var(--space-3)",
        }}
      >
        {category.skills.map((skill) => {
          const IconComponent = skillIconMap[skill.icon] || Code2;
          return (
            <div
              key={skill.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-2)",
                padding: "0.5rem 0.65rem",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "var(--bg-tertiary)",
                border: "1px solid var(--border)",
              }}
            >
              <span style={{ color: "var(--accent)", display: "inline-flex" }}>
                <IconComponent size={14} aria-hidden="true" />
              </span>
              <span style={{ fontSize: "var(--text-xs)", fontWeight: 500, color: "var(--text-primary)" }}>
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
