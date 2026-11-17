"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2 } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
        backgroundColor: scrolled ? "var(--bg-card)" : "var(--bg-primary)",
        borderBottom: "1px solid var(--border)",
        transition: "background-color var(--transition-fast)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-2)",
            textDecoration: "none",
            color: "var(--text-primary)",
            fontWeight: 700,
            fontSize: "var(--text-lg)",
            letterSpacing: "-0.01em",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              borderRadius: "var(--radius-sm)",
              backgroundColor: "var(--accent)",
              color: "#ffffff",
            }}
          >
            <Code2 size={16} aria-hidden="true" />
          </span>
          <span>Dhanush</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav"
          style={{
            display: "none",
            alignItems: "center",
            gap: "var(--space-1)",
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
                  fontSize: "var(--text-sm)",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "var(--accent)" : "var(--text-secondary)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.4rem 0.75rem",
                  backgroundColor: isActive ? "var(--accent-subtle)" : "transparent",
                }}
              >
                {link.name}
              </Link>
            );
          })}

          <div style={{ marginLeft: "var(--space-2)", paddingLeft: "var(--space-2)", borderLeft: "1px solid var(--border)" }}>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div
          className="mobile-nav-toggle-group"
          style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}
        >
          <div className="mobile-theme-toggle">
            <ThemeToggle />
          </div>
          <button
            type="button"
            className="btn btn-ghost btn-icon mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            style={{
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
            }}
          >
            {mobileMenuOpen ? (
              <X size={18} aria-hidden="true" />
            ) : (
              <Menu size={18} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            backgroundColor: "var(--bg-secondary)",
            padding: "var(--space-4) var(--space-6)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-1)",
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
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "var(--accent)" : "var(--text-primary)",
                  backgroundColor: isActive ? "var(--accent-subtle)" : "transparent",
                  padding: "0.6rem 0.85rem",
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
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-theme-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
