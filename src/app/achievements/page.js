import { BookOpen, Award, CheckCircle, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ResearchCard from "@/components/ResearchCard";
import CertificateCard from "@/components/CertificateCard";
import { publishedPaper, conferencePresentation } from "@/data/research";
import { achievementsData } from "@/data/achievements";
import { certificatesData } from "@/data/certificates";

export const metadata = {
  title: "Achievements & Research | Dhanush",
  description:
    "Published research paper, international conference presentation, and academic distinction of Dhanush.",
};

export default function AchievementsPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "860px" }}>
        <SectionHeading
          eyebrow="Milestones"
          title="Achievements & Research"
          subtitle="Verifiable record of peer-reviewed research publications, conference presentations, and academic performance."
        />

        {/* 1. Research Publication */}
        <div style={{ marginBottom: "var(--space-10)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
            <BookOpen size={20} color="var(--accent)" aria-hidden="true" />
            <h2 style={{ fontSize: "var(--text-xl)", fontWeight: 700, margin: 0 }}>
              1. Peer-Reviewed Journal Publication
            </h2>
          </div>
          <ResearchCard paper={publishedPaper} />
        </div>

        {/* 2. Conference Presentation */}
        <div style={{ marginBottom: "var(--space-10)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
            <Award size={20} color="var(--accent)" aria-hidden="true" />
            <h2 style={{ fontSize: "var(--text-xl)", fontWeight: 700, margin: 0 }}>
              2. International Conference Presentation
            </h2>
          </div>
          <ResearchCard paper={conferencePresentation} isConference />
        </div>

        {/* 3. Academic Distinctions */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
            <GraduationCap size={20} color="var(--accent)" aria-hidden="true" />
            <h2 style={{ fontSize: "var(--text-xl)", fontWeight: 700, margin: 0 }}>
              3. Academic Distinctions
            </h2>
          </div>

          <div
            className="card"
            style={{
              padding: "var(--space-6)",
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-2)" }}>
              <span className="badge badge-accent">Academic Standing</span>
              <span className="badge badge-success">First Year Completed</span>
            </div>
            <h3 style={{ fontSize: "var(--text-base)", fontWeight: 700, marginBottom: "var(--space-1)" }}>
              First-Year CGPA: 8.85 / 10.0
            </h3>
            <p style={{ fontSize: "var(--text-xs)", color: "var(--accent)", fontWeight: 600, marginBottom: "var(--space-3)" }}>
              Sahyadri College of Engineering and Management – Bachelor of Engineering (Computer Science & Engineering)
            </p>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
              Maintained strong academic performance across core subjects including Discrete Mathematics, Data Structures, Problem Solving with C, Object-Oriented Programming, and Engineering Fundamentals.
            </p>
          </div>
        </div>

        {/* 4. Documented Certifications */}
        <div style={{ marginTop: "var(--space-10)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
            <Award size={20} color="var(--accent)" aria-hidden="true" />
            <h2 style={{ fontSize: "var(--text-xl)", fontWeight: 700, margin: 0 }}>
              4. Documented Certifications & Training
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-5)" }}>
            {certificatesData.map((cert) => (
              <CertificateCard key={cert.id} certificate={cert} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
