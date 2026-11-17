"use client";

import Image from "next/image";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personalData } from "@/data/personal";
import { socialLinks } from "@/data/social";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const githubLink = socialLinks.find((l) => l.name === "GitHub")?.url || "https://github.com/valarxdhn";
  const linkedinLink = socialLinks.find((l) => l.name === "LinkedIn")?.url || "https://linkedin.com";
  const emailLink = socialLinks.find((l) => l.name === "Email")?.url || "mailto:dhanushmk95@gmail.com";

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        backgroundColor: "rgba(11, 15, 23, 0.78)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        marginTop: "auto",
        paddingTop: "var(--space-10)",
        paddingBottom: "var(--space-10)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "var(--space-6)",
          }}
        >
          {/* Identity & Short Description */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-1)" }}>
              <span
                style={{
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "28px",
                  height: "28px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "rgba(12, 16, 26, 0.75)",
                  border: "1px solid var(--border)",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={personalData.logoImage || "/images/logo-mark.png"}
                  alt="Dhanush Logo"
                  width={24}
                  height={24}
                  style={{ objectFit: "contain" }}
                />
              </span>
              <h3
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  margin: 0,
                }}
              >
                {personalData.name}
              </h3>
            </div>
            <p
              style={{
                fontSize: "var(--text-xs)",
                color: "var(--text-muted)",
                margin: 0,
                maxWidth: "480px",
                lineHeight: 1.5,
              }}
            >
              Computer Science Engineering Student at Sahyadri College of Engineering and Management.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-3)",
            }}
          >
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="btn btn-ghost btn-sm"
              style={{ padding: "0.4rem 0.6rem", color: "var(--text-secondary)" }}
            >
              <Github size={16} aria-hidden="true" />
            </a>

            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="btn btn-ghost btn-sm"
              style={{ padding: "0.4rem 0.6rem", color: "var(--text-secondary)" }}
            >
              <Linkedin size={16} aria-hidden="true" />
            </a>

            <a
              href={emailLink}
              aria-label="Send Email"
              className="btn btn-ghost btn-sm"
              style={{ padding: "0.4rem 0.6rem", color: "var(--text-secondary)" }}
            >
              <Mail size={16} aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="btn btn-ghost btn-sm"
              style={{
                padding: "0.4rem 0.6rem",
                color: "var(--text-secondary)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-sm)",
              }}
            >
              <ArrowUp size={16} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            marginTop: "var(--space-6)",
            paddingTop: "var(--space-4)",
            borderTop: "1px solid var(--border-subtle)",
            fontSize: "var(--text-xs)",
            color: "var(--text-muted)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "var(--space-2)",
          }}
        >
          <span>© {new Date().getFullYear()} {personalData.name}. All rights reserved.</span>
          <span>Built with Next.js & React</span>
        </div>
      </div>
    </footer>
  );
}
