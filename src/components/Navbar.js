"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { personalData } from "@/data/personal";

const navSections = [
  { id: "home", name: "Home", href: "#home" },
  { id: "about", name: "About", href: "#about" },
  { id: "education", name: "Education", href: "#education" },
  { id: "skills", name: "Skills", href: "#skills" },
  { id: "projects", name: "Projects", href: "#projects" },
  { id: "research", name: "Research", href: "#research" },
  { id: "achievements", name: "Achievements", href: "#achievements" },
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

    const sectionIds = navSections.map((s) => s.id);

    const observerCallback = (entries) => {
      const visibleEntries = entries.filter((e) => e.isIntersecting);
      if (visibleEntries.length > 0) {
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

  // Smooth navigation handler supporting Lenis inertial scrolling & native anchor fallback
  const handleNavClick = useCallback(
    (e, sectionId) => {
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
          if (typeof window !== "undefined" && window.__lenis) {
            window.__lenis.scrollTo(element, { offset: -80, duration: 1.0 });
          } else {
            element.scrollIntoView({ behavior: "smooth" });
          }
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

        {/* Desktop Navigation Links with Framer Motion Gliding Active Pill */}
        <nav
          className="desktop-nav"
          style={{
            display: "none",
            alignItems: "center",
            gap: "2px",
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
                  position: "relative",
                  fontSize: "13px",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "var(--accent)" : "var(--text-secondary)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.35rem 0.65rem",
                  transition: "color var(--transition-fast)",
                }}
                aria-current={isActive ? "true" : undefined}
              >
                {/* Smooth Gliding Active Background Pill */}
                {isActive && (
                  <motion.span
                    layoutId="activeSectionPill"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "rgba(56, 189, 248, 0.12)",
                      border: "1px solid rgba(56, 189, 248, 0.3)",
                      boxShadow: "0 0 12px rgba(56, 189, 248, 0.12)",
                      zIndex: 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    aria-hidden="true"
                  />
                )}
                <span style={{ position: "relative", zIndex: 1 }}>{item.name}</span>
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
                  position: "relative",
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
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>
      )}

      <style jsx>{`
        @media (min-width: 960px) {
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
