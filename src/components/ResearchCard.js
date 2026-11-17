import { BookOpen, ExternalLink, Calendar, FileText, Award, Users, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import Button from "./Button";

export default function ResearchCard({ paper, isConference = false }) {
  if (!paper) return null;

  if (isConference) {
    return (
      <div
        className="card card-hover"
        style={{
          background: "linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(11, 15, 25, 0.85) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "var(--radius-xl)",
          padding: "var(--space-8)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "10%",
            right: "10%",
            height: "2px",
            background: "linear-gradient(90deg, transparent, var(--accent-purple), transparent)",
          }}
        />

        <div className="card-header" style={{ marginBottom: "var(--space-4)" }}>
          <div className="flex items-center justify-between gap-2 flex-wrap" style={{ marginBottom: "var(--space-3)" }}>
            <span
              className="badge badge-accent"
              style={{
                gap: "0.35rem",
                padding: "0.35rem 0.75rem",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
              }}
            >
              <Award size={13} aria-hidden="true" />
              {paper.type || "International Conference Presentation"}
            </span>
            <span
              className="badge"
              style={{
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                color: "var(--status-success)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
              }}
            >
              <CheckCircle2 size={13} aria-hidden="true" />
              {paper.status || "Presented"}
            </span>
          </div>

          <h3
            className="card-title"
            style={{
              fontSize: "var(--text-xl)",
              lineHeight: 1.35,
              fontWeight: 700,
              marginBottom: "var(--space-2)",
            }}
          >
            {paper.title}
          </h3>

          <p
            className="card-subtitle"
            style={{
              color: "var(--accent-light)",
              fontSize: "var(--text-base)",
              fontWeight: 600,
            }}
          >
            {paper.conferenceName}
          </p>
        </div>

        <div className="card-body">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "var(--space-3)",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              padding: "var(--space-4)",
              borderRadius: "var(--radius-md)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              marginBottom: "var(--space-5)",
              fontSize: "var(--text-xs)",
            }}
          >
            <div>
              <span style={{ color: "var(--text-muted)", display: "block", marginBottom: "2px" }}>
                Location
              </span>
              <strong style={{ color: "var(--text-primary)" }}>{paper.location}</strong>
            </div>
            <div>
              <span style={{ color: "var(--text-muted)", display: "block", marginBottom: "2px" }}>
                Presentation Date
              </span>
              <strong style={{ color: "var(--text-primary)" }}>{paper.date}</strong>
            </div>
            <div>
              <span style={{ color: "var(--text-muted)", display: "block", marginBottom: "2px" }}>
                Conference Proceedings
              </span>
              <span style={{ color: "var(--text-secondary)", fontStyle: "italic" }}>
                Proceedings publication in review
              </span>
            </div>
          </div>

          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.7 }}>
            {paper.note}
          </p>
        </div>

        <div
          className="card-footer"
          style={{
            marginTop: "var(--space-5)",
            paddingTop: "var(--space-4)",
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          {paper.certificateUrl ? (
            <Button href={paper.certificateUrl} isExternal size="sm" variant="outline">
              <ExternalLink size={14} aria-hidden="true" />
              <span>View Certificate</span>
            </Button>
          ) : (
            <span
              className="badge"
              style={{
                padding: "0.45rem 0.85rem",
                fontSize: "var(--text-xs)",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                color: "var(--text-muted)",
              }}
            >
              Official proceedings link will be attached once published
            </span>
          )}
        </div>
      </div>
    );
  }

  // Published Journal Paper
  return (
    <div
      className="card card-hover"
      style={{
        background: "linear-gradient(180deg, rgba(15, 23, 42, 0.85) 0%, rgba(11, 15, 25, 0.95) 100%)",
        border: "1px solid rgba(59, 130, 246, 0.3)",
        borderRadius: "var(--radius-xl)",
        padding: "var(--space-8)",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.2)",
      }}
    >
      {/* Luminous top border accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "var(--gradient-accent)",
        }}
      />

      <div className="card-header" style={{ marginBottom: "var(--space-4)" }}>
        <div
          className="flex items-center justify-between gap-2 flex-wrap"
          style={{ marginBottom: "var(--space-3)" }}
        >
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="badge badge-accent"
              style={{
                gap: "0.35rem",
                padding: "0.35rem 0.75rem",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
              }}
            >
              <BookOpen size={13} aria-hidden="true" />
              Published Peer-Reviewed Paper
            </span>
            <span
              className="badge"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                backgroundColor: "rgba(59, 130, 246, 0.15)",
                color: "var(--accent-light)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                fontWeight: 700,
              }}
            >
              Paper ID: {paper.paperId}
            </span>
          </div>

          <span
            className="badge"
            style={{
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              color: "var(--status-success)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              fontSize: "var(--text-xs)",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            <ShieldCheck size={14} aria-hidden="true" />
            Peer-Reviewed & Indexed
          </span>
        </div>

        <h3
          className="card-title"
          style={{
            fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
            lineHeight: 1.35,
            fontWeight: 800,
            marginBottom: "var(--space-3)",
            letterSpacing: "-0.02em",
          }}
        >
          {paper.title}
        </h3>

        <p
          className="card-subtitle"
          style={{
            color: "var(--accent-light)",
            fontWeight: 600,
            fontSize: "var(--text-base)",
          }}
        >
          {paper.journal}
        </p>
      </div>

      <div className="card-body">
        {/* Research Publication Details Matrix */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "var(--space-3)",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            padding: "var(--space-4)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            marginBottom: "var(--space-5)",
            fontSize: "var(--text-xs)",
          }}
        >
          <div>
            <span style={{ color: "var(--text-muted)", display: "block", marginBottom: "2px" }}>
              Publication Year
            </span>
            <strong style={{ color: "var(--text-primary)", fontSize: "var(--text-sm)" }}>
              {paper.year}
            </strong>
          </div>
          <div>
            <span style={{ color: "var(--text-muted)", display: "block", marginBottom: "2px" }}>
              Volume
            </span>
            <strong style={{ color: "var(--text-primary)", fontSize: "var(--text-sm)" }}>
              Vol. {paper.volume}
            </strong>
          </div>
          <div>
            <span style={{ color: "var(--text-muted)", display: "block", marginBottom: "2px" }}>
              Pages
            </span>
            <strong style={{ color: "var(--text-primary)", fontSize: "var(--text-sm)" }}>
              {paper.pages}
            </strong>
          </div>
          <div>
            <span style={{ color: "var(--text-muted)", display: "block", marginBottom: "2px" }}>
              Paper ID
            </span>
            <strong style={{ color: "var(--accent-light)", fontSize: "var(--text-sm)", fontFamily: "var(--font-mono)" }}>
              {paper.paperId}
            </strong>
          </div>
          <div>
            <span style={{ color: "var(--text-muted)", display: "block", marginBottom: "2px" }}>
              Authors
            </span>
            <strong style={{ color: "var(--text-primary)", fontSize: "var(--text-sm)" }}>
              {paper.authorsCount}
            </strong>
          </div>
        </div>

        {/* Abstract */}
        <p
          style={{
            fontSize: "var(--text-sm)",
            color: "var(--text-secondary)",
            lineHeight: 1.75,
            marginBottom: "var(--space-5)",
          }}
        >
          {paper.summary}
        </p>

        {/* Key Highlights */}
        {paper.highlights && paper.highlights.length > 0 && (
          <div
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.4)",
              padding: "var(--space-4)",
              borderRadius: "var(--radius-md)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              marginBottom: "var(--space-4)",
            }}
          >
            <span
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--accent-light)",
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                marginBottom: "var(--space-3)",
              }}
            >
              <Sparkles size={12} aria-hidden="true" />
              Core Research Contributions
            </span>
            <ul
              style={{
                listStyle: "none",
                display: "grid",
                gap: "var(--space-2)",
                paddingLeft: 0,
              }}
            >
              {paper.highlights.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--space-2)",
                    lineHeight: 1.5,
                  }}
                >
                  <CheckCircle2
                    size={14}
                    color="var(--accent-cyan)"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div
        className="card-footer"
        style={{
          marginTop: "var(--space-4)",
          paddingTop: "var(--space-4)",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "var(--space-3)",
        }}
      >
        <Button
          href={paper.publicationUrl}
          isExternal
          variant="primary"
          size="sm"
          style={{ gap: "var(--space-2)" }}
        >
          <FileText size={14} aria-hidden="true" />
          <span>Read Research Paper (IJIRT)</span>
        </Button>

        {paper.sharedUrl && (
          <Button
            href={paper.sharedUrl}
            isExternal
            variant="outline"
            size="sm"
            style={{ gap: "var(--space-2)" }}
          >
            <ExternalLink size={14} aria-hidden="true" />
            <span>Publication Notice</span>
          </Button>
        )}
      </div>
    </div>
  );
}
