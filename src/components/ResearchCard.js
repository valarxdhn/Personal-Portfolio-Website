import { BookOpen, ExternalLink, FileText, Award } from "lucide-react";
import Button from "./Button";

export default function ResearchCard({ paper, isConference = false }) {
  if (!paper) return null;

  if (isConference) {
    return (
      <article
        className="card"
        style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          padding: "var(--space-6)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-2)" }}>
          <span className="badge badge-accent">
            <Award size={12} aria-hidden="true" />
            International Academic Conference
          </span>
          <span className="badge">{paper.status || "Presented"}</span>
        </div>

        <h3
          style={{
            fontSize: "var(--text-lg)",
            fontWeight: 700,
            lineHeight: 1.35,
            marginBottom: "var(--space-2)",
          }}
        >
          {paper.title || "Academic Research Presentation"}
        </h3>

        <p
          style={{
            fontSize: "var(--text-sm)",
            color: "var(--text-secondary)",
            lineHeight: 1.65,
            marginBottom: "var(--space-3)",
          }}
        >
          {paper.description ||
            "Presented academic research analyzing computational and software engineering methodologies before peer reviewers at an international conference."}
        </p>

        <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", margin: 0, fontStyle: "italic" }}>
          {paper.note}
        </p>
      </article>
    );
  }

  // Published Journal Paper
  return (
    <article
      className="card"
      style={{
        background: "var(--bg-secondary)",
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
          marginBottom: "var(--space-3)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
          <span className="badge badge-accent">
            <BookOpen size={12} aria-hidden="true" />
            Published Journal Article
          </span>
          <span
            style={{
              fontSize: "var(--text-xs)",
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
            }}
          >
            Paper ID: {paper.paperId}
          </span>
        </div>

        <span className="badge badge-success">Peer-Reviewed</span>
      </div>

      <h3
        style={{
          fontSize: "var(--text-lg)",
          fontWeight: 700,
          lineHeight: 1.35,
          marginBottom: "var(--space-2)",
        }}
      >
        {paper.title}
      </h3>

      <p
        style={{
          fontSize: "var(--text-sm)",
          color: "var(--accent)",
          fontWeight: 600,
          marginBottom: "var(--space-4)",
        }}
      >
        {paper.journal}
      </p>

      {/* Publication Meta Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
          gap: "var(--space-2)",
          padding: "var(--space-3)",
          backgroundColor: "var(--bg-tertiary)",
          borderRadius: "var(--radius-sm)",
          border: "1px solid var(--border-subtle)",
          marginBottom: "var(--space-4)",
          fontSize: "var(--text-xs)",
        }}
      >
        <div>
          <span style={{ color: "var(--text-muted)", display: "block" }}>Year</span>
          <strong style={{ color: "var(--text-primary)" }}>{paper.year}</strong>
        </div>
        <div>
          <span style={{ color: "var(--text-muted)", display: "block" }}>Volume</span>
          <strong style={{ color: "var(--text-primary)" }}>Vol. {paper.volume}</strong>
        </div>
        <div>
          <span style={{ color: "var(--text-muted)", display: "block" }}>Pages</span>
          <strong style={{ color: "var(--text-primary)" }}>{paper.pages}</strong>
        </div>
        <div>
          <span style={{ color: "var(--text-muted)", display: "block" }}>Authors</span>
          <strong style={{ color: "var(--text-primary)" }}>{paper.authorsCount}</strong>
        </div>
      </div>

      <p
        style={{
          fontSize: "var(--text-sm)",
          color: "var(--text-secondary)",
          lineHeight: 1.65,
          marginBottom: "var(--space-4)",
        }}
      >
        {paper.summary}
      </p>

      {/* Highlights */}
      {paper.highlights && paper.highlights.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 var(--space-5) 0",
            display: "grid",
            gap: "0.35rem",
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
              <span style={{ color: "var(--accent)", fontWeight: 700 }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Verified Publication Links */}
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "var(--space-3)" }}>
        {paper.publicationUrl && (
          <Button href={paper.publicationUrl} isExternal variant="primary" size="sm">
            <FileText size={13} aria-hidden="true" />
            <span>Read on IJIRT</span>
          </Button>
        )}

        {paper.sharedUrl && (
          <Button href={paper.sharedUrl} isExternal variant="secondary" size="sm">
            <ExternalLink size={13} aria-hidden="true" />
            <span>Publication Announcement</span>
          </Button>
        )}
      </div>
    </article>
  );
}
