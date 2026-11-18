"use client";

import { useState } from "react";
import { CheckCircle, ExternalLink, FileText } from "lucide-react";
import CertificateCard from "./CertificateCard";
import Button from "./Button";
import { certificatesData, certificateCategories } from "@/data/certificates";
import { achievementsData } from "@/data/achievements";

export default function CertificatesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCertificates =
    activeCategory === "All"
      ? certificatesData
      : certificatesData.filter((c) => c.category === activeCategory);

  return (
    <section id="achievements" className="section" style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "var(--space-10)",
            flexWrap: "wrap",
            gap: "var(--space-4)",
          }}
        >
          <div>
            <span className="section-eyebrow">06 // ACHIEVEMENTS &amp; CREDENTIALS</span>
            <h2 className="section-title">Certifications &amp; Achievements</h2>
            <p className="section-subtitle">
              Peer-reviewed scholarly output, academic distinctions, verified industry credentials, and competitive milestones.
            </p>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              padding: "0.4rem 0.8rem",
              borderRadius: "var(--radius-full)",
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              fontSize: "var(--text-xs)",
              color: "var(--text-secondary)",
            }}
          >
            <CheckCircle size={13} color="var(--status-success)" aria-hidden="true" />
            <span>
              <strong>10</strong> Documented Records ({achievementsData.length} Milestones · {certificatesData.length} Certificates)
            </span>
          </div>
        </div>

        {/* SUBSECTION A: Scholarly & Milestone Archive */}
        <div style={{ marginBottom: "var(--space-12)" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "var(--space-6)",
              paddingBottom: "var(--space-3)",
              borderBottom: "1px solid var(--border)",
              flexWrap: "wrap",
              gap: "var(--space-2)",
            }}
          >
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--accent)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                SUBSECTION A // MILESTONE ARCHIVE
              </span>
              <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
                Scholarly &amp; Collegiate Milestones
              </h3>
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)" }}>
              {achievementsData.length} Validated Milestones
            </span>
          </div>

          {/* Milestone List */}
          <div className="milestone-ledger">
            {achievementsData.map((item) => (
              <div key={item.id} className="milestone-row">
                {/* Period */}
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      color: "var(--text-muted)",
                      display: "block",
                    }}
                  >
                    {item.period}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--accent)",
                      letterSpacing: "0.05em",
                      fontWeight: 600,
                    }}
                  >
                    {item.track}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h4
                    style={{
                      fontSize: "var(--text-base)",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "4px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "var(--text-xs)",
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Status & Action */}
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", flexShrink: 0 }}>
                  <span
                    style={{
                      fontSize: "11px",
                      fontFamily: "var(--font-mono)",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "var(--radius-full)",
                      backgroundColor: "var(--accent-subtle)",
                      color: "var(--accent)",
                      border: "1px solid var(--accent-border)",
                    }}
                  >
                    {item.statusBadge}
                  </span>

                  {item.link && (
                    <Button
                      href={item.link}
                      isExternal={item.isExternal}
                      variant="outline"
                      size="sm"
                    >
                      <span>{item.linkLabel}</span>
                      {item.isExternal ? (
                        <ExternalLink size={12} aria-hidden="true" />
                      ) : (
                        <FileText size={12} aria-hidden="true" />
                      )}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SUBSECTION B: Verified Industry Credentials */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "var(--space-6)",
              paddingBottom: "var(--space-3)",
              borderBottom: "1px solid var(--border)",
              flexWrap: "wrap",
              gap: "var(--space-2)",
            }}
          >
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--accent)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                SUBSECTION B // DOCUMENTED TRAINING &amp; CERTIFICATIONS
              </span>
              <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
                Verified Industry Credentials
              </h3>
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)" }}>
              {certificatesData.length} Verified Certificates
            </span>
          </div>

          {/* Category Filter Pills */}
          <div
            className="certificates-filter-bar"
            role="tablist"
            aria-label="Filter certificates by category"
          >
            {certificateCategories.map((category) => {
              const count =
                category === "All"
                  ? certificatesData.length
                  : certificatesData.filter((c) => c.category === category).length;

              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`filter-pill ${isActive ? "active" : ""}`}
                >
                  <span>{category}</span>
                  <span className="filter-pill-count">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-3 certificates-grid">
            {filteredCertificates.map((cert) => (
              <CertificateCard key={cert.id} certificate={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
