"use client";

import { useState } from "react";
import { Award, CheckCircle } from "lucide-react";
import CertificateCard from "./CertificateCard";
import { certificatesData, certificateCategories } from "@/data/certificates";

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
            marginBottom: "var(--space-8)",
            flexWrap: "wrap",
            gap: "var(--space-4)",
          }}
        >
          <div>
            <span className="section-eyebrow">Verified Credentials</span>
            <h2 className="section-title">Certifications & Achievements</h2>
            <p className="section-subtitle">
              Authentic certifications, peer-reviewed international conference presentation, and technical competitions validated by official credential IDs, QR codes, and institutional records.
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
            <span><strong>{certificatesData.length}</strong> Documented Credentials</span>
          </div>
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
    </section>
  );
}
