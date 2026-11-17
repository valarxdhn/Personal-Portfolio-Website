"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Achievements", href: "/achievements" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        transition: "all var(--transition-normal)",
        paddingTop: scrolled ? "0.6rem" : "1rem",
        paddingBottom: scrolled ? "0.6rem" : "1rem",
        backgroundColor: scrolled ? "var(--bg-card)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand Logo with Glow */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-2)",
            textDecoration: "none",
            color: "var(--text-primary)",
            fontWeight: 800,
            fontSize: "var(--text-lg)",
            letterSpacing: "-0.02em",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "34px",
              height: "34px",
              borderRadius: "var(--radius-md)",
              background: "var(--gradient-accent)",
              color: "#ffffff",
              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)",
            }}
          >
            <Code2 size={18} aria-hidden="true" />
          </span>
          <span className="text-gradient" style={{ fontWeight: 800, letterSpacing: "0.05em" }}>
            DHANUSH
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav"
          style={{
            display: "none",
            alignItems: "center",
            gap: "var(--space-1)",
            padding: "0.3rem 0.6rem",
            backgroundColor: "var(--bg-glass)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-full)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 8px 24px -4px rgba(0, 0, 0, 0.4)",
          }}
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className="btn btn-ghost btn-sm"
                style={{
                  fontSize: "var(--text-xs)",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "#ffffff" : "var(--text-secondary)",
                  background: isActive ? "var(--gradient-accent)" : "transparent",
                  borderRadius: "var(--radius-full)",
                  padding: "0.45rem 0.95rem",
                  transition: "all var(--transition-fast)",
                  boxShadow: isActive ? "0 2px 10px rgba(59, 130, 246, 0.4)" : "none",
                }}
              >
                {link.name}
              </Link>
            );
          })}

          <div style={{ marginLeft: "var(--space-1)", paddingLeft: "var(--space-2)", borderLeft: "1px solid var(--border)" }}>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Nav Controls */}
        <div
          className="mobile-nav-toggle-group"
          style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}
        >
          <ThemeToggle />
          <button
            type="button"
            className="btn btn-ghost btn-icon mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
            }}
          >
            {mobileMenuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            backgroundColor: "var(--bg-secondary)",
            padding: "var(--space-4) var(--space-6)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-2)",
            backdropFilter: "blur(20px)",
          }}
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-ghost"
                style={{
                  justifyContent: "flex-start",
                  fontSize: "var(--text-sm)",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "var(--accent-light)" : "var(--text-primary)",
                  backgroundColor: isActive ? "var(--accent-subtle)" : "transparent",
                  borderLeft: isActive ? "3px solid var(--accent)" : "3px solid transparent",
                  padding: "0.65rem 1rem",
                  borderRadius: "var(--radius-sm)",
                  width: "100%",
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}

      <style jsx>{`
        @media (min-width: 820px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
