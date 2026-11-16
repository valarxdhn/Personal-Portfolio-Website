import { Award, CheckCircle, ExternalLink, ShieldCheck } from "lucide-react";
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
    <div className="card card-hover" style={{ height: "100%" }}>
      <div className="card-header">
        <div className="flex items-center justify-between gap-2" style={{ marginBottom: "var(--space-2)" }}>
          {category && <span className="badge badge-accent">{category}</span>}
          {status && (
            <span className="badge badge-success" style={{ gap: "var(--space-1)" }}>
              <CheckCircle size={11} aria-hidden="true" />
              {status}
            </span>
          )}
        </div>
        <h3 className="card-title" style={{ fontSize: "var(--text-lg)" }}>
          {title}
        </h3>
        {issuer && (
          <p className="card-subtitle" style={{ color: "var(--accent-light)" }}>
            {issuer}
          </p>
        )}
      </div>

      <div className="card-body">
        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>
          {description}
        </p>
      </div>

      {link && (
        <div className="card-footer">
          <Button href={link} isExternal size="sm" variant="outline">
            <ExternalLink size={13} aria-hidden="true" />
            Verification Link
          </Button>
        </div>
      )}
    </div>
  );
}
