import {
  BookOpen,
  Award,
  ShieldCheck,
  Trophy,
  CheckCircle,
  FileText,
  Calendar,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ResearchCard from "@/components/ResearchCard";
import AchievementCard from "@/components/AchievementCard";
import Button from "@/components/Button";
import { publishedPaper, conferencePresentation } from "@/data/research";
import { achievementsData } from "@/data/achievements";

export const metadata = {
  title: "Achievements & Research Publications | DHANUSH",
  description:
    "Peer-reviewed research publications, international conference presentation, verified academic milestones, certifications, and hackathon participation of Dhanush.",
};

export default function AchievementsPage() {
  return (
    <div className="section" style={{ paddingTop: "var(--space-12)", minHeight: "85vh" }}>
      <div className="container">
        <SectionHeading
          eyebrow="Milestones & Distinctions"
          title="Achievements & Research"
          subtitle="A comprehensive record of peer-reviewed journal publications, international conference presentations, certifications, and academic excellence."
        />

        {/* 1. PEER-REVIEWED RESEARCH PUBLICATION SECTION */}
        <div style={{ marginBottom: "var(--space-16)" }}>
          <div className="flex items-center gap-3" style={{ marginBottom: "var(--space-4)" }}>
            <span
              style={{
                padding: "0.5rem",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--accent-subtle)",
                color: "var(--accent)",
                display: "inline-flex",
                boxShadow: "0 0 12px rgba(59, 130, 246, 0.2)",
              }}
            >
              <BookOpen size={22} aria-hidden="true" />
            </span>
            <div>
              <span
                style={{
                  fontSize: "var(--text-xs)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--accent-light)",
                  fontWeight: 700,
                  display: "block",
                }}
              >
                Track 01 • Academic Research
              </span>
              <h3 style={{ fontSize: "var(--text-2xl)", fontWeight: 800, margin: 0 }}>
                Peer-Reviewed Journal Publication
              </h3>
            </div>
          </div>
          <p
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--text-secondary)",
              marginBottom: "var(--space-6)",
              maxWidth: "800px",
            }}
          >
            Published journal article indexed with official manuscript verification in IJIRT (Volume 13, 2026, Paper ID: 206803).
          </p>

          <div style={{ maxWidth: "1000px" }}>
            <ResearchCard paper={publishedPaper} />
          </div>
        </div>

        {/* 2. INTERNATIONAL CONFERENCE PRESENTATION SECTION */}
        <div style={{ marginBottom: "var(--space-16)" }}>
          <div className="flex items-center gap-3" style={{ marginBottom: "var(--space-4)" }}>
            <span
              style={{
                padding: "0.5rem",
                borderRadius: "var(--radius-md)",
                backgroundColor: "rgba(139, 92, 246, 0.15)",
                color: "var(--accent-purple)",
                display: "inline-flex",
                boxShadow: "0 0 12px rgba(139, 92, 246, 0.2)",
              }}
            >
              <Award size={22} aria-hidden="true" />
            </span>
            <div>
              <span
                style={{
                  fontSize: "var(--text-xs)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--accent-purple)",
                  fontWeight: 700,
                  display: "block",
                }}
              >
                Track 02 • Conference Defense
              </span>
              <h3 style={{ fontSize: "var(--text-2xl)", fontWeight: 800, margin: 0 }}>
                International Conference Presentation
              </h3>
            </div>
          </div>
          <p
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--text-secondary)",
              marginBottom: "var(--space-6)",
              maxWidth: "800px",
            }}
          >
            Academic research paper presented before international conference delegates and academic peers.
          </p>

          <div style={{ maxWidth: "1000px" }}>
            <ResearchCard paper={conferencePresentation} isConference />
          </div>
        </div>

        {/* 3. CERTIFICATIONS SECTION */}
        <div style={{ marginBottom: "var(--space-16)" }}>
          <div className="flex items-center gap-3" style={{ marginBottom: "var(--space-4)" }}>
            <span
              style={{
                padding: "0.5rem",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--accent-subtle)",
                color: "var(--accent-cyan)",
                display: "inline-flex",
              }}
            >
              <ShieldCheck size={22} aria-hidden="true" />
            </span>
            <div>
              <span
                style={{
                  fontSize: "var(--text-xs)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--accent-cyan)",
                  fontWeight: 700,
                  display: "block",
                }}
              >
                Track 03 • Continuous Learning
              </span>
              <h3 style={{ fontSize: "var(--text-2xl)", fontWeight: 800, margin: 0 }}>
                Certifications & Skill Verification
              </h3>
            </div>
          </div>
          <p
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--text-secondary)",
              marginBottom: "var(--space-6)",
            }}
          >
            Technical coursework and ongoing professional skill verifications.
          </p>

          <div className="grid grid-cols-2">
            {achievementsData.certifications.map((item, i) => (
              <AchievementCard
                key={i}
                title={item.title}
                category="Coursework & Certification"
                description={item.description}
                status={item.status}
                issuer={item.issuer}
              />
            ))}
          </div>
        </div>

        {/* 4. HACKATHON PARTICIPATION SECTION */}
        <div style={{ marginBottom: "var(--space-16)" }}>
          <div className="flex items-center gap-3" style={{ marginBottom: "var(--space-4)" }}>
            <span
              style={{
                padding: "0.5rem",
                borderRadius: "var(--radius-md)",
                backgroundColor: "rgba(245, 158, 11, 0.15)",
                color: "var(--status-warning)",
                display: "inline-flex",
              }}
            >
              <Trophy size={22} aria-hidden="true" />
            </span>
            <div>
              <span
                style={{
                  fontSize: "var(--text-xs)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--status-warning)",
                  fontWeight: 700,
                  display: "block",
                }}
              >
                Track 04 • Collaborative Sprints
              </span>
              <h3 style={{ fontSize: "var(--text-2xl)", fontWeight: 800, margin: 0 }}>
                Hackathons & Engineering Sprints
              </h3>
            </div>
          </div>
          <p
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--text-secondary)",
              marginBottom: "var(--space-6)",
            }}
          >
            Rapid prototyping, collegiate hackathon problem-solving, and team software development.
          </p>

          <div className="grid grid-cols-2">
            {achievementsData.hackathons.map((item, i) => (
              <AchievementCard
                key={i}
                title={item.title}
                category="Hackathon"
                description={item.description}
                status={item.status}
              />
            ))}
          </div>
        </div>

        {/* 5. AWARDS & SCHOLASTIC DISTINCTIONS */}
        <div>
          <div className="flex items-center gap-3" style={{ marginBottom: "var(--space-4)" }}>
            <span
              style={{
                padding: "0.5rem",
                borderRadius: "var(--radius-md)",
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                color: "var(--status-success)",
                display: "inline-flex",
              }}
            >
              <CheckCircle size={22} aria-hidden="true" />
            </span>
            <div>
              <span
                style={{
                  fontSize: "var(--text-xs)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--status-success)",
                  fontWeight: 700,
                  display: "block",
                }}
              >
                Track 05 • Scholastic Excellence
              </span>
              <h3 style={{ fontSize: "var(--text-2xl)", fontWeight: 800, margin: 0 }}>
                Academic Distinctions & Recognitions
              </h3>
            </div>
          </div>
          <p
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--text-secondary)",
              marginBottom: "var(--space-6)",
            }}
          >
            Verified collegiate milestones and scholastic honors at Sahyadri College of Engineering and Management.
          </p>

          <div className="grid grid-cols-2">
            {achievementsData.awards.map((item, i) => (
              <AchievementCard
                key={i}
                title={item.title}
                category="Academic Distinction"
                description={item.description}
                status={item.status}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
