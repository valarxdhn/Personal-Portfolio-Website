import { BookOpen, ExternalLink, Calendar, FileText, Award, Users } from "lucide-react";
import Button from "./Button";

export default function ResearchCard({ paper, isConference = false }) {
  if (!paper) return null;

  if (isConference) {
    return (
      <div className="card card-hover" style={{ height: "100%" }}>
        <div className="card-header">
          <div className="flex items-center justify-between gap-2" style={{ marginBottom: "var(--space-2)" }}>
            <span className="badge badge-accent">
              <Award size={12} aria-hidden="true" />
              {paper.type || "Conference Presentation"}
            </span>
            <span className="badge badge-success">{paper.status || "Presented"}</span>
          </div>
          <h3 className="card-title" style={{ fontSize: "var(--text-lg)" }}>
            {paper.title}
          </h3>
          <p className="card-subtitle" style={{ color: "var(--accent-light)" }}>
            {paper.conferenceName}
          </p>
        </div>

        <div className="card-body">
          <div
            style={{
              display: "grid",
              gap: "var(--space-2)",
              backgroundColor: "var(--bg-secondary)",
              padding: "var(--space-4)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border)",
              marginBottom: "var(--space-4)",
              fontSize: "var(--text-xs)",
            }}
          >
            <div className="flex items-center gap-2">
              <strong style={{ color: "var(--text-primary)" }}>Location:</strong>
              <span>{paper.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <strong style={{ color: "var(--text-primary)" }}>Date:</strong>
              <span>{paper.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <strong style={{ color: "var(--text-primary)" }}>Proceedings:</strong>
              <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>
                Proceedings publication in review
              </span>
            </div>
          </div>

          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>
            {paper.note}
          </p>
        </div>

        <div className="card-footer">
          {paper.certificateUrl ? (
            <Button href={paper.certificateUrl} isExternal size="sm" variant="outline">
              <ExternalLink size={14} aria-hidden="true" />
              View Certificate
            </Button>
          ) : (
            <span
              className="badge"
              title="Official certificate / proceedings link will be attached once published"
              style={{ opacity: 0.8 }}
            >
              Proceedings Record Pending Publication
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
        borderLeft: "4px solid var(--accent)",
        height: "100%",
      }}
    >
      <div className="card-header">
        <div className="flex items-center justify-between gap-2" style={{ marginBottom: "var(--space-2)" }}>
          <span className="badge badge-accent">
            <BookOpen size={12} aria-hidden="true" />
            Published Research Paper
          </span>
          <span className="badge badge-success">Peer-Reviewed</span>
        </div>
        <h3 className="card-title" style={{ fontSize: "var(--text-xl)", lineHeight: 1.35 }}>
          {paper.title}
        </h3>
        <p className="card-subtitle" style={{ color: "var(--accent-light)", fontWeight: 600 }}>
          {paper.journal}
        </p>
      </div>

      <div className="card-body">
        {/* Research Publication Details Matrix */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "var(--space-3)",
            backgroundColor: "var(--bg-secondary)",
            padding: "var(--space-3) var(--space-4)",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border)",
            marginBottom: "var(--space-4)",
            fontSize: "var(--text-xs)",
          }}
        >
          <div>
            <span style={{ color: "var(--text-muted)", display: "block" }}>Publication Year</span>
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
            <span style={{ color: "var(--text-muted)", display: "block" }}>Paper ID</span>
            <strong style={{ color: "var(--text-primary)" }}>{paper.paperId}</strong>
          </div>
          <div>
            <span style={{ color: "var(--text-muted)", display: "block" }}>Authors</span>
            <strong style={{ color: "var(--text-primary)" }}>{paper.authorsCount}</strong>
          </div>
        </div>

        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginBottom: "var(--space-3)" }}>
          {paper.summary}
        </p>

        {paper.highlights && paper.highlights.length > 0 && (
          <ul
            style={{
              listStyle: "none",
              display: "grid",
              gap: "var(--space-1)",
              paddingLeft: 0,
              marginBottom: "var(--space-2)",
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
                }}
              >
                <span
                  style={{
                    color: "var(--accent)",
                    fontWeight: "bold",
                    marginTop: "-1px",
                  }}
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="card-footer" style={{ flexWrap: "wrap", gap: "var(--space-3)" }}>
        <Button
          href={paper.publicationUrl}
          isExternal
          variant="primary"
          size="sm"
          style={{ gap: "var(--space-2)" }}
        >
          <FileText size={14} aria-hidden="true" />
          Read Research Paper
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
            Publication Notice
          </Button>
        )}
      </div>
    </div>
  );
}
