import {
  BookOpen,
  Award,
  ShieldCheck,
  Trophy,
  CheckCircle,
  FileText,
  Calendar,
  ExternalLink,
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
    "Research publications, international conference presentation, certifications, academic distinctions, and hackathon participation of Dhanush.",
};

export default function AchievementsPage() {
  return (
    <div className="section" style={{ paddingTop: "var(--space-10)" }}>
      <div className="container">
        <SectionHeading
          eyebrow="Milestones"
          title="Achievements & Publications"
          subtitle="A comprehensive record of peer-reviewed research publications, international conference presentations, certifications, and academic excellence."
        />

        {/* 1. RESEARCH & PUBLICATIONS SECTION */}
        <div style={{ marginBottom: "var(--space-16)" }}>
          <div className="flex items-center gap-2" style={{ marginBottom: "var(--space-4)" }}>
            <span
              style={{
                padding: "0.4rem",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--accent-subtle)",
                color: "var(--accent)",
                display: "inline-flex",
              }}
            >
              <BookOpen size={20} aria-hidden="true" />
            </span>
            <h3 style={{ fontSize: "var(--text-2xl)", margin: 0 }}>
              1. Peer-Reviewed Research Publication
            </h3>
          </div>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginBottom: "var(--space-6)" }}>
            Published journal article indexed with official manuscript ID and peer-reviewed verification.
          </p>

          <div style={{ maxWidth: "960px" }}>
            <ResearchCard paper={publishedPaper} />
          </div>
        </div>

        {/* 2. INTERNATIONAL CONFERENCE PRESENTATION SECTION */}
        <div style={{ marginBottom: "var(--space-16)" }}>
          <div className="flex items-center gap-2" style={{ marginBottom: "var(--space-4)" }}>
            <span
              style={{
                padding: "0.4rem",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--accent-subtle)",
                color: "var(--accent)",
                display: "inline-flex",
              }}
            >
              <Award size={20} aria-hidden="true" />
            </span>
            <h3 style={{ fontSize: "var(--text-2xl)", margin: 0 }}>
              2. International Conference Presentation
            </h3>
          </div>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginBottom: "var(--space-6)" }}>
            Academic research paper presented before international conference peers. Proceedings details are documented below with editable placeholder fields.
          </p>

          <div style={{ maxWidth: "960px" }}>
            <ResearchCard paper={conferencePresentation} isConference />
          </div>
        </div>

        {/* 3. CERTIFICATIONS SECTION */}
        <div style={{ marginBottom: "var(--space-16)" }}>
          <div className="flex items-center gap-2" style={{ marginBottom: "var(--space-4)" }}>
            <span
              style={{
                padding: "0.4rem",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--accent-subtle)",
                color: "var(--accent)",
                display: "inline-flex",
              }}
            >
              <ShieldCheck size={20} aria-hidden="true" />
            </span>
            <h3 style={{ fontSize: "var(--text-2xl)", margin: 0 }}>
              3. Certifications & Verified Learning
            </h3>
          </div>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginBottom: "var(--space-6)" }}>
            Technical courses and verified coursework credentials.
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
          <div className="flex items-center gap-2" style={{ marginBottom: "var(--space-4)" }}>
            <span
              style={{
                padding: "0.4rem",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--accent-subtle)",
                color: "var(--accent)",
                display: "inline-flex",
              }}
            >
              <Trophy size={20} aria-hidden="true" />
            </span>
            <h3 style={{ fontSize: "var(--text-2xl)", margin: 0 }}>
              4. Hackathon Participation & Sprints
            </h3>
          </div>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginBottom: "var(--space-6)" }}>
            Competitive engineering sprints and hackathon collaboration activities.
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

        {/* 5. AWARDS & RECOGNITIONS SECTION */}
        <div>
          <div className="flex items-center gap-2" style={{ marginBottom: "var(--space-4)" }}>
            <span
              style={{
                padding: "0.4rem",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--accent-subtle)",
                color: "var(--accent)",
                display: "inline-flex",
              }}
            >
              <CheckCircle size={20} aria-hidden="true" />
            </span>
            <h3 style={{ fontSize: "var(--text-2xl)", margin: 0 }}>
              5. Academic Awards & Recognitions
            </h3>
          </div>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginBottom: "var(--space-6)" }}>
            Verified scholastic achievements and honors.
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
