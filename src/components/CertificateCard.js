"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FileText,
  ExternalLink,
  Award,
  CheckCircle2,
  Calendar,
  Hash,
  Eye,
  X,
} from "lucide-react";
import Button from "./Button";

export default function CertificateCard({ certificate }) {
  const [modalOpen, setModalOpen] = useState(false);

  if (!certificate) return null;

  return (
    <>
      <article className="certificate-card">
        {/* Certificate Preview Frame */}
        <div
          className="certificate-preview-container"
          onClick={() => setModalOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setModalOpen(true);
            }
          }}
          aria-label={`Preview certificate for ${certificate.title}`}
          title="Click to view enlarged certificate preview"
        >
          <Image
            src={certificate.previewUrl}
            alt={`${certificate.title} - ${certificate.issuer}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover", objectPosition: "top center" }}
          />
          <div className="certificate-preview-overlay">
            <span className="certificate-preview-badge">
              <Eye size={13} aria-hidden="true" />
              <span>Preview</span>
            </span>
          </div>
        </div>

        {/* Certificate Card Content */}
        <div className="certificate-body">
          {/* Top Metadata: Issuer & Category */}
          <div className="certificate-header">
            <span className="badge badge-accent">
              <Award size={11} aria-hidden="true" />
              <span>{certificate.category}</span>
            </span>
            <span className="certificate-issuer">{certificate.issuer}</span>
          </div>

          {/* Title */}
          <h3 className="certificate-title">{certificate.title}</h3>

          {/* Meta Information: Date and Credential ID */}
          <div className="certificate-meta">
            <span className="certificate-meta-item">
              <Calendar size={12} aria-hidden="true" />
              <span>{certificate.issueDate}</span>
            </span>
            {certificate.credentialId && (
              <span className="certificate-meta-item" title="Credential ID">
                <Hash size={12} aria-hidden="true" />
                <span>ID: {certificate.credentialId}</span>
              </span>
            )}
          </div>

          {/* Factual Description */}
          <p className="certificate-description">{certificate.description}</p>

          {/* Demonstrated Skills */}
          {certificate.skills && certificate.skills.length > 0 && (
            <div className="certificate-skills">
              {certificate.skills.map((skill) => (
                <span key={skill} className="certificate-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          )}

          {/* Action Controls */}
          <div className="certificate-actions">
            <Button
              href={certificate.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
            >
              <FileText size={14} aria-hidden="true" />
              <span>View Certificate</span>
            </Button>

            {certificate.verificationUrl && (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                title="Verify credential at issuing platform"
              >
                <span>Verify</span>
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </article>

      {/* Accessible Enlarged Preview Lightbox */}
      {modalOpen && (
        <div
          className="certificate-modal-backdrop"
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged certificate: ${certificate.title}`}
        >
          <div
            className="certificate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="certificate-modal-header">
              <div>
                <h4 style={{ margin: 0, fontSize: "var(--text-base)", fontWeight: 700, color: "var(--text-primary)" }}>
                  {certificate.title}
                </h4>
                <p style={{ margin: "2px 0 0", fontSize: "var(--text-xs)", color: "var(--text-secondary)" }}>
                  {certificate.issuer} • Issued: {certificate.issueDate}
                  {certificate.credentialId ? ` • ID: ${certificate.credentialId}` : ""}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                <a
                  href={certificate.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <FileText size={13} aria-hidden="true" />
                  <span>Open Full PDF</span>
                </a>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="certificate-modal-close"
                  aria-label="Close certificate preview"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="certificate-modal-body">
              <div style={{ position: "relative", width: "100%", height: "70vh" }}>
                <Image
                  src={certificate.previewUrl}
                  alt={`${certificate.title} - ${certificate.issuer}`}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
