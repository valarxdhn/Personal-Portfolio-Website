import Link from "next/link";
import { ArrowUpRight, GraduationCap, BookOpen, Award, Code2, FolderGit2 } from "lucide-react";

/**
 * TelemetryRibbon Component
 * Inspired by AURAL's precision hardware spec ribbon.
 * Presents verifiable engineering and academic benchmarks with architectural hairline borders.
 */
export default function TelemetryRibbon() {
  const telemetryItems = [
    {
      index: "01",
      icon: GraduationCap,
      label: "ACADEMIC RECORD",
      value: "8.85 CGPA",
      detail: "First-Year Distinction • SCEM",
      href: "/achievements",
    },
    {
      index: "02",
      icon: BookOpen,
      label: "PEER-REVIEWED PAPER",
      value: "IJIRT #206803",
      detail: "Rural Dropout Early Warning AI",
      href: "https://ijirt.org/article?manuscript=206803",
      external: true,
    },
    {
      index: "03",
      icon: Award,
      label: "CONFERENCE DEFENSE",
      value: "ICRICS 2026",
      detail: "Oral Defense • SIT Mangaluru",
      href: "/certificates/academic/icrics-2026-research-paper-presentation.pdf",
      external: true,
    },
    {
      index: "04",
      icon: Code2,
      label: "DOCUMENTED CREDENTIALS",
      value: "6 Certifications",
      detail: "Infosys • CodeChef • Unstop",
      href: "#certifications",
    },
    {
      index: "05",
      icon: FolderGit2,
      label: "SYSTEM PROJECTS",
      value: "3 Engineering Repos",
      detail: "Transit ETA • EV Routing • Event Sync",
      href: "#projects",
    },
  ];

  return (
    <section className="aural-telemetry-ribbon-section" aria-label="Engineering Benchmarks">
      <div className="container">
        <div className="aural-telemetry-grid">
          {telemetryItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <div className="aural-telemetry-item-top">
                  <span className="aural-telemetry-index">{item.index} //</span>
                  <Icon size={14} className="aural-telemetry-item-icon" aria-hidden="true" />
                </div>
                <div className="aural-telemetry-item-body">
                  <span className="aural-telemetry-label">{item.label}</span>
                  <span className="aural-telemetry-value">{item.value}</span>
                  <span className="aural-telemetry-detail">{item.detail}</span>
                </div>
                <div className="aural-telemetry-arrow" aria-hidden="true">
                  <ArrowUpRight size={12} />
                </div>
              </>
            );

            return item.external ? (
              <a
                key={item.index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="aural-telemetry-card"
                title={`${item.label}: ${item.value}`}
              >
                {content}
              </a>
            ) : (
              <Link
                key={item.index}
                href={item.href}
                className="aural-telemetry-card"
                title={`${item.label}: ${item.value}`}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
