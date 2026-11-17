import { Code2, Cpu, Terminal, Coffee, Database, GitBranch, Github, Layers, Sparkles } from "lucide-react";

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
      className="card card-hover"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(11, 15, 25, 0.85) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "var(--radius-xl)",
        padding: "var(--space-6)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative top border accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "20%",
          right: "20%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
        }}
      />

      <div className="card-header" style={{ marginBottom: "var(--space-4)" }}>
        <div className="flex items-center gap-3" style={{ marginBottom: "var(--space-2)" }}>
          <span
            style={{
              padding: "0.5rem",
              borderRadius: "var(--radius-md)",
              backgroundColor: "var(--accent-subtle)",
              color: "var(--accent)",
              display: "inline-flex",
              boxShadow: "0 0 10px rgba(59, 130, 246, 0.2)",
            }}
          >
            <Layers size={18} aria-hidden="true" />
          </span>
          <h3 className="card-title" style={{ fontSize: "var(--text-lg)", fontWeight: 700, margin: 0 }}>
            {category.name}
          </h3>
        </div>
        <p className="card-subtitle" style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
          {category.description}
        </p>
      </div>

      <div className="card-body">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(115px, 1fr))",
            gap: "var(--space-2)",
            marginTop: "var(--space-1)",
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
                  padding: "0.6rem 0.75rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  transition: "all var(--transition-fast)",
                }}
              >
                <span
                  style={{
                    color: "var(--accent-light)",
                    display: "inline-flex",
                  }}
                >
                  <IconComponent size={15} aria-hidden="true" />
                </span>
                <span
                  style={{
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
