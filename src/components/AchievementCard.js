import { CheckCircle, ExternalLink } from "lucide-react";
import Button from "./Button";

export default function AchievementCard({
  title,
  category,
  description,
  status,
  link,
  issuer,
}) {
  return (
    <article
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "var(--space-2)",
          marginBottom: "var(--space-2)",
        }}
      >
        {category && <span className="badge badge-accent">{category}</span>}
        {status && <span className="badge badge-success">{status}</span>}
      </div>

      <h3
        style={{
          fontSize: "var(--text-base)",
          fontWeight: 700,
          lineHeight: 1.35,
          marginBottom: issuer ? "2px" : "var(--space-2)",
        }}
      >
        {title}
      </h3>

      {issuer && (
        <p style={{ fontSize: "var(--text-xs)", color: "var(--accent)", fontWeight: 600, marginBottom: "var(--space-2)" }}>
          {issuer}
        </p>
      )}

      <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
        {description}
      </p>

      {link && (
        <div style={{ marginTop: "auto", paddingTop: "var(--space-4)" }}>
          <Button href={link} isExternal size="sm" variant="outline">
            <ExternalLink size={13} aria-hidden="true" />
            <span>Verification Record</span>
          </Button>
        </div>
      )}
    </article>
  );
}
