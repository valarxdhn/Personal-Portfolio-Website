"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { personalData } from "@/data/personal";

const navSections = [
  { id: "home", name: "Home", href: "#home" },
  { id: "about", name: "About", href: "#about" },
  { id: "education", name: "Education", href: "#education" },
  { id: "skills", name: "Skills", href: "#skills" },
  { id: "projects", name: "Projects", href: "#projects" },
  { id: "research", name: "Research", href: "#research" },
  { id: "contact", name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Background blur opacity on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section observer using native IntersectionObserver (no expensive scroll listeners)
  useEffect(() => {
    if (pathname !== "/") return;

    const observers = [];
    const sectionIds = navSections.map((s) => s.id);

    const observerCallback = (entries) => {
      // Find the topmost intersecting section
      const visibleEntries = entries.filter((e) => e.isIntersecting);
      if (visibleEntries.length > 0) {
        // Pick the one closest to the top of the viewport
        const best = visibleEntries.reduce((prev, current) =>
          prev.boundingClientRect.top > current.boundingClientRect.top ? prev : current
        );
        setActiveSection(best.target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-20% 0px -65% 0px",
      threshold: [0, 0.2, 0.5],
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  // Smooth navigation handler
  const handleNavClick = useCallback(
    (e, sectionId) => {
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `#${sectionId}`);
          setActiveSection(sectionId);
        }
      }
      setMobileMenuOpen(false);
    },
    [pathname]
  );

  // Close mobile drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(11, 15, 23, 0.94)" : "rgba(11, 15, 23, 0.82)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
        transition: "background-color var(--transition-fast), border-color var(--transition-fast)",
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
        {/* Brand Logo & Name */}
        <Link
          href="/#home"
          onClick={(e) => handleNavClick(e, "home")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-3)",
            textDecoration: "none",
            color: "var(--text-primary)",
            fontWeight: 700,
            fontSize: "var(--text-lg)",
            letterSpacing: "-0.01em",
          }}
          aria-label="Dhanush - Home"
        >
          <span
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              borderRadius: "var(--radius-md)",
              backgroundColor: "rgba(15, 20, 32, 0.85)",
              border: "1px solid var(--border)",
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.4)",
              flexShrink: 0,
            }}
          >
            <Image
              src={personalData.logoImage || "/images/logo-mark.png"}
              alt="Dhanush Logo"
              width={30}
              height={30}
              priority
              style={{ objectFit: "contain" }}
            />
          </span>
          <span>{personalData.name}</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav"
          style={{
            display: "none",
            alignItems: "center",
            gap: "4px",
          }}
          aria-label="Main Navigation"
        >
          {navSections.map((item) => {
            const isActive = activeSection === item.id;
            const targetHref = pathname === "/" ? item.href : `/${item.href}`;

            return (
              <a
                key={item.id}
                href={targetHref}
                onClick={(e) => handleNavClick(e, item.id)}
                className="btn btn-ghost btn-sm nav-section-link"
                style={{
                  fontSize: "13px",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "var(--accent)" : "var(--text-secondary)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.35rem 0.7rem",
                  backgroundColor: isActive ? "rgba(56, 189, 248, 0.08)" : "transparent",
                  border: isActive ? "1px solid rgba(56, 189, 248, 0.25)" : "1px solid transparent",
                  transition: "all var(--transition-fast)",
                }}
                aria-current={isActive ? "true" : undefined}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div
          className="mobile-nav-toggle-group"
          style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}
        >
          <button
            type="button"
            className="btn btn-ghost btn-icon mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            style={{
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              backgroundColor: "rgba(15, 20, 32, 0.6)",
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
          className="mobile-drawer-menu"
          style={{
            borderTop: "1px solid var(--border)",
            backgroundColor: "rgba(11, 15, 23, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            padding: "var(--space-4) var(--space-6)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-1)",
          }}
        >
          {navSections.map((item) => {
            const isActive = activeSection === item.id;
            const targetHref = pathname === "/" ? item.href : `/${item.href}`;

            return (
              <a
                key={item.id}
                href={targetHref}
                onClick={(e) => handleNavClick(e, item.id)}
                className="btn btn-ghost"
                style={{
                  justifyContent: "flex-start",
                  fontSize: "var(--text-sm)",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "var(--accent)" : "var(--text-primary)",
                  backgroundColor: isActive ? "rgba(56, 189, 248, 0.1)" : "transparent",
                  borderLeft: isActive ? "3px solid var(--accent)" : "3px solid transparent",
                  padding: "0.6rem 0.85rem",
                  borderRadius: "var(--radius-sm)",
                  width: "100%",
                  textAlign: "left",
                }}
                aria-current={isActive ? "true" : undefined}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      )}

      <style jsx>{`
        @media (min-width: 860px) {
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
