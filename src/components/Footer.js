"use client";

import Link from "next/link";
import { ArrowUp, Code2, MapPin, GraduationCap } from "lucide-react";
import SocialLinks from "./SocialLinks";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Achievements", href: "/achievements" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--bg-secondary)",
        marginTop: "auto",
        paddingTop: "var(--space-16)",
        paddingBottom: "var(--space-24)", // Extra padding for the floating dock
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "var(--space-8)",
            paddingBottom: "var(--space-10)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {/* Brand & Summary */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-2)",
                fontWeight: 800,
                fontSize: "var(--text-xl)",
                color: "var(--text-primary)",
                marginBottom: "var(--space-3)",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "30px",
                  height: "30px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--gradient-accent)",
                  color: "#ffffff",
                }}
              >
                <Code2 size={16} aria-hidden="true" />
              </span>
              <span className="text-gradient">DHANUSH</span>
            </div>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginBottom: "var(--space-4)", lineHeight: 1.65 }}>
              Computer Science Engineering student at Sahyadri College of Engineering and Management.
              Crafting reliable software solutions across algorithms, transportation intelligence, and explainable AI.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
              <span className="flex items-center gap-1">
                <MapPin size={13} color="var(--accent)" aria-hidden="true" />
                Mangalore, Karnataka, India
              </span>
              <span className="flex items-center gap-1">
                <GraduationCap size={13} color="var(--accent)" aria-hidden="true" />
                Sahyadri College of Engineering and Management
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-primary)",
                marginBottom: "var(--space-4)",
              }}
            >
              Navigation
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "var(--space-2)",
                paddingLeft: 0,
              }}
            >
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      transition: "color var(--transition-fast)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social */}
          <div>
            <h4
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-primary)",
                marginBottom: "var(--space-4)",
              }}
            >
              Connect & Inquiries
            </h4>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginBottom: "var(--space-4)" }}>
              Open for software development internships, academic research discussions, and hackathons.
            </p>
            <SocialLinks />
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "var(--space-4)",
            paddingTop: "var(--space-6)",
          }}
        >
          <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} DHANUSH. Built with Next.js & React. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm btn-pill"
            style={{ gap: "var(--space-2)" }}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
