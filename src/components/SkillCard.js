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
    <div className="card card-hover" style={{ height: "100%" }}>
      <div className="card-header" style={{ marginBottom: "var(--space-3)" }}>
        <div className="flex items-center gap-2" style={{ marginBottom: "var(--space-2)" }}>
          <span
            style={{
              padding: "0.45rem",
              borderRadius: "var(--radius-md)",
              backgroundColor: "var(--accent-subtle)",
              color: "var(--accent)",
              display: "inline-flex",
            }}
          >
            <Layers size={18} aria-hidden="true" />
          </span>
          <h3 className="card-title" style={{ fontSize: "var(--text-lg)", margin: 0 }}>
            {category.name}
          </h3>
        </div>
        <p className="card-subtitle" style={{ fontSize: "var(--text-xs)" }}>
          {category.description}
        </p>
      </div>

      <div className="card-body">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
            gap: "var(--space-3)",
            marginTop: "var(--space-2)",
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
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  transition: "all var(--transition-fast)",
                }}
              >
                <span
                  style={{
                    color: "var(--accent)",
                    display: "inline-flex",
                  }}
                >
                  <IconComponent size={16} aria-hidden="true" />
                </span>
                <span
                  style={{
                    fontSize: "var(--text-sm)",
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
