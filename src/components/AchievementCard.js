import { Award, CheckCircle, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
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
    <div
      className="card card-hover"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(11, 15, 25, 0.8) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--space-6)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative subtle border line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "20%",
          right: "20%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), transparent)",
        }}
      />

      <div className="card-header" style={{ marginBottom: "var(--space-3)" }}>
        <div
          className="flex items-center justify-between gap-2 flex-wrap"
          style={{ marginBottom: "var(--space-3)" }}
        >
          {category && (
            <span
              className="badge badge-accent"
              style={{
                fontSize: "0.72rem",
                padding: "0.25rem 0.65rem",
                fontWeight: 600,
              }}
            >
              {category}
            </span>
          )}

          {status && (
            <span
              className="badge"
              style={{
                fontSize: "0.72rem",
                padding: "0.25rem 0.65rem",
                backgroundColor: "rgba(16, 185, 129, 0.12)",
                color: "var(--status-success)",
                border: "1px solid rgba(16, 185, 129, 0.25)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
                fontWeight: 600,
              }}
            >
              <CheckCircle size={11} aria-hidden="true" />
              {status}
            </span>
          )}
        </div>

        <h3
          className="card-title"
          style={{
            fontSize: "var(--text-lg)",
            fontWeight: 700,
            lineHeight: 1.35,
            marginBottom: issuer ? "var(--space-1)" : 0,
          }}
        >
          {title}
        </h3>

        {issuer && (
          <p
            className="card-subtitle"
            style={{
              color: "var(--accent-light)",
              fontSize: "var(--text-xs)",
              fontWeight: 600,
            }}
          >
            {issuer}
          </p>
        )}
      </div>

      <div className="card-body" style={{ flex: 1 }}>
        <p
          style={{
            fontSize: "var(--text-sm)",
            color: "var(--text-secondary)",
            lineHeight: 1.65,
          }}
        >
          {description}
        </p>
      </div>

      {link && (
        <div
          className="card-footer"
          style={{
            marginTop: "var(--space-4)",
            paddingTop: "var(--space-3)",
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          <Button href={link} isExternal size="sm" variant="outline" style={{ gap: "0.35rem" }}>
            <ExternalLink size={13} aria-hidden="true" />
            <span>Verification Link</span>
          </Button>
        </div>
      )}
    </div>
  );
}
