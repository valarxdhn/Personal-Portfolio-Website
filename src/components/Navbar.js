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
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled
          ? "var(--bg-primary)"
          : "rgba(10, 15, 29, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        transition: "all var(--transition-normal)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "4.25rem",
        }}
      >
        {/* Brand / Logo */}
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
            letterSpacing: "-0.01em",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "32px",
              height: "32px",
              borderRadius: "var(--radius-md)",
              backgroundColor: "var(--accent)",
              color: "#ffffff",
            }}
          >
            <Code2 size={18} aria-hidden="true" />
          </span>
          <span>DHANUSH</span>
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
                className="btn btn-ghost"
                style={{
                  fontSize: "var(--text-sm)",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "var(--accent)" : "var(--text-secondary)",
                  backgroundColor: isActive ? "var(--accent-subtle)" : "transparent",
                  borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
                  borderRadius: "var(--radius-sm)",
                  padding: "0.5rem 0.85rem",
                }}
              >
                {link.name}
              </Link>
            );
          })}

          <div style={{ marginLeft: "var(--space-2)" }}>
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
          >
            {mobileMenuOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            backgroundColor: "var(--bg-primary)",
            padding: "var(--space-4) var(--space-6)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-2)",
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
                  fontSize: "var(--text-base)",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "var(--accent)" : "var(--text-primary)",
                  backgroundColor: isActive ? "var(--accent-subtle)" : "transparent",
                  padding: "0.75rem 1rem",
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
        @media (min-width: 769px) {
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
