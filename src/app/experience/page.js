import { Terminal, Users, Code, Award, Calendar, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata = {
  title: "Experience & Technical Activities | DHANUSH",
  description:
    "Technical activities, hackathon participation, project collaboration, and engineering initiatives of Dhanush. Clear and transparent record without fabricated employment.",
};

export default function ExperiencePage() {
  const experiences = [
    {
      category: "Academic & Collaborative Research",
      title: "Co-Author & System Architecture Contributor",
      organization: "IJIRT Research Publication (Paper ID: 206803)",
      period: "2026",
      description:
        "Contributed to research, architecture, and conceptual development of an AI-Powered Rural Student Dropout Early Warning System with Explainable Predictions, SMS alerts, and government scheme recommendations.",
      skills: ["Research Methodology", "Explainable AI", "System Architecture", "Academic Writing"],
      isCurrent: false,
    },
    {
      category: "International Conference",
      title: "Research Paper Presenter",
      organization: "International Academic Conference",
      period: "Recent Presentation",
      description:
        "Prepared and presented independent academic research at an international conference, defending analytical methodologies and computational approaches in front of peer reviewers and delegates.",
      skills: ["Oral Defense", "Technical Communication", "Research Analysis"],
      isCurrent: false,
    },
    {
      category: "Technical Activities & Project Development",
      title: "Student Developer & Technical Collaborator",
      organization: "Sahyadri College of Engineering and Management",
      period: "Undergraduate Studies",
      description:
        "Designing and developing core software systems including Dynamic Train ETA (transportation intelligence), Sustainable Bharat (explainable AI for supplier evaluation), and CampusLoop (campus event aggregation platform).",
      skills: ["C/C++", "Python", "Supabase", "Git & GitHub", "Problem-Solving"],
      isCurrent: true,
    },
    {
      category: "Hackathons & Coding Initiatives",
      title: "Hackathon Participant & Problem Solver",
      organization: "Collegiate & Regional Hackathons",
      period: "Ongoing",
      description:
        "Participating in rapid prototyping, coding sprints, and team-based hackathons to build practical solutions for pressing community and campus challenges. (Specific hackathon titles and team awards will be documented upon event conclusion).",
      skills: ["Rapid Prototyping", "Teamwork", "Full-Stack Development"],
      isCurrent: true,
    },
  ];

  return (
    <div className="section" style={{ paddingTop: "var(--space-10)" }}>
      <div className="container">
        <SectionHeading
          eyebrow="Activities"
          title="Technical Experience & Activities"
          subtitle="A transparent record of research contributions, conference presentations, technical projects, and academic software engineering activities."
        />

        {/* Experience Timeline */}
        <div style={{ maxWidth: "860px", margin: "0 auto var(--space-12)" }}>
          <div style={{ display: "grid", gap: "var(--space-6)" }}>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="card card-hover"
                style={{
                  borderLeft: `4px solid ${exp.isCurrent ? "var(--accent)" : "var(--border-hover)"}`,
                }}
              >
                <div className="card-header">
                  <div className="flex items-center justify-between gap-2 flex-wrap" style={{ marginBottom: "var(--space-2)" }}>
                    <span className="badge badge-accent">{exp.category}</span>
                    <span
                      style={{
                        fontSize: "var(--text-xs)",
                        color: "var(--text-muted)",
                        display: "flex",
                        alignItems: "center",
                        gap: "var(--space-1)",
                      }}
                    >
                      <Calendar size={13} aria-hidden="true" />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="card-title" style={{ fontSize: "var(--text-xl)" }}>
                    {exp.title}
                  </h3>
                  <p className="card-subtitle" style={{ color: "var(--accent-light)", fontWeight: 600 }}>
                    {exp.organization}
                  </p>
                </div>

                <div className="card-body">
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "var(--space-4)" }}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note on Employment Transparency */}
        <div
          className="card"
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            backgroundColor: "var(--bg-secondary)",
            textAlign: "center",
            padding: "var(--space-6)",
          }}
        >
          <div className="flex items-center justify-center gap-2" style={{ marginBottom: "var(--space-2)" }}>
            <Sparkles size={16} color="var(--accent)" aria-hidden="true" />
            <h4 style={{ fontSize: "var(--text-base)", margin: 0 }}>
              Professional Transparency Note
            </h4>
          </div>
          <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", lineHeight: 1.6 }}>
            As a dedicated undergraduate student, no fictitious employment history or simulated job titles are listed. This portfolio is engineered to present genuine academic performance, verified research publications, and real software projects.
          </p>
        </div>
      </div>
    </div>
  );
}
