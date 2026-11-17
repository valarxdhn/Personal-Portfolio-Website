"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Github, Linkedin, Mail, FileText, ArrowUp } from "lucide-react";
import { socialLinks } from "@/data/social";

const iconMap = {
  Github: Github,
  Linkedin: Linkedin,
  Mail: Mail,
  FileText: FileText,
};

export default function FloatingDock() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside
      aria-label="Floating quick navigation and social profiles"
      className="floating-dock-container"
    >
      {/* Home Button */}
      <Link
        href="/"
        className="dock-icon-btn"
        aria-label="Navigate to Home"
        title="Home"
      >
        <Home size={19} aria-hidden="true" />
      </Link>

      <span className="dock-divider" aria-hidden="true" />

      {/* Social Profiles */}
      {socialLinks.map((item) => {
        const Icon = iconMap[item.icon] || FileText;
        return (
          <a
            key={item.name}
            href={item.url}
            target={item.url.startsWith("mailto:") ? "_self" : "_blank"}
            rel={item.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="dock-icon-btn"
            aria-label={item.name}
            title={item.name}
          >
            <Icon size={19} aria-hidden="true" />
          </a>
        );
      })}

      {showScrollTop && (
        <>
          <span className="dock-divider" aria-hidden="true" />
          <button
            type="button"
            onClick={scrollToTop}
            className="dock-icon-btn"
            aria-label="Back to top"
            title="Scroll to Top"
          >
            <ArrowUp size={19} aria-hidden="true" />
          </button>
        </>
      )}
    </aside>
  );
}
