import { Terminal, Users, Code, Award, Calendar, Sparkles, BookOpen, Layers, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata = {
  title: "Experience & Technical Activities | DHANUSH",
  description:
    "Technical activities, research contributions, project development, and engineering initiatives of Dhanush. Transparent record without fabricated employment.",
};

export default function ExperiencePage() {
  const experiences = [
    {
      category: "Academic & Collaborative Research",
      title: "Co-Author & System Architecture Contributor",
      organization: "IJIRT Research Publication (Paper ID: 206803)",
      period: "2026",
      icon: BookOpen,
      iconColor: "var(--accent)",
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
      icon: Award,
      iconColor: "var(--accent-purple)",
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
      icon: Code,
      iconColor: "var(--accent-cyan)",
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
      icon: Terminal,
      iconColor: "var(--status-warning)",
      description:
        "Participating in rapid prototyping, coding sprints, and team-based hackathons to build practical solutions for pressing community and campus challenges.",
      skills: ["Rapid Prototyping", "Teamwork", "Full-Stack Development"],
      isCurrent: true,
    },
  ];

  return (
    <div className="section" style={{ paddingTop: "var(--space-12)", minHeight: "85vh" }}>
      <div className="container">
        <SectionHeading
          eyebrow="Timeline & History"
          title="Experience & Technical Activities"
          subtitle="A transparent record of peer-reviewed research contributions, conference presentations, technical projects, and academic software engineering activities."
        />

        {/* Experience Timeline */}
        <div style={{ maxWidth: "900px", margin: "0 auto var(--space-16)", position: "relative" }}>
          {/* Vertical Glowing Timeline Line for Desktop */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              bottom: "40px",
              left: "28px",
              width: "2px",
              background: "linear-gradient(180deg, var(--accent) 0%, var(--accent-purple) 60%, rgba(59, 130, 246, 0.1) 100%)",
              zIndex: 0,
            }}
          />

          <div style={{ display: "grid", gap: "var(--space-8)" }}>
            {experiences.map((exp, index) => {
              const IconComp = exp.icon || Sparkles;
              return (
                <div
                  key={index}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "56px 1fr",
                    gap: "var(--space-4)",
                    alignItems: "flex-start",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {/* Left Timeline Node */}
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(11, 15, 25, 0.95)",
                      border: `2px solid ${exp.iconColor}`,
                      boxShadow: `0 0 16px ${exp.iconColor}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: exp.iconColor,
                      flexShrink: 0,
                    }}
                  >
                    <IconComp size={22} aria-hidden="true" />
                  </div>

                  {/* Right Experience Card */}
                  <div
                    className="card card-hover"
                    style={{
                      background: "linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(11, 15, 25, 0.85) 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "var(--radius-xl)",
                      padding: "var(--space-6)",
                    }}
                  >
                    <div className="card-header" style={{ marginBottom: "var(--space-3)" }}>
                      <div
                        className="flex items-center justify-between gap-2 flex-wrap"
                        style={{ marginBottom: "var(--space-2)" }}
                      >
                        <span
                          className="badge badge-accent"
                          style={{
                            fontSize: "0.72rem",
                            padding: "0.25rem 0.65rem",
                            fontWeight: 600,
                          }}
                        >
                          {exp.category}
                        </span>
                        <span
                          style={{
                            fontSize: "var(--text-xs)",
                            color: "var(--text-muted)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.35rem",
                            backgroundColor: "rgba(255, 255, 255, 0.04)",
                            padding: "0.2rem 0.6rem",
                            borderRadius: "var(--radius-full)",
                            border: "1px solid rgba(255, 255, 255, 0.06)",
                          }}
                        >
                          <Calendar size={12} aria-hidden="true" />
                          {exp.period}
                        </span>
                      </div>

                      <h3
                        className="card-title"
                        style={{
                          fontSize: "var(--text-xl)",
                          fontWeight: 700,
                          lineHeight: 1.3,
                          marginBottom: "var(--space-1)",
                        }}
                      >
                        {exp.title}
                      </h3>
                      <p
                        className="card-subtitle"
                        style={{
                          color: "var(--accent-light)",
                          fontWeight: 600,
                          fontSize: "var(--text-sm)",
                        }}
                      >
                        {exp.organization}
                      </p>
                    </div>

                    <div className="card-body">
                      <p
                        style={{
                          fontSize: "var(--text-sm)",
                          color: "var(--text-secondary)",
                          lineHeight: 1.7,
                          marginBottom: "var(--space-4)",
                        }}
                      >
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="badge"
                            style={{
                              fontSize: "0.72rem",
                              backgroundColor: "rgba(255, 255, 255, 0.04)",
                              border: "1px solid rgba(255, 255, 255, 0.08)",
                              color: "var(--text-secondary)",
                              padding: "0.22rem 0.55rem",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Note on Employment Transparency */}
        <div
          className="card"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            textAlign: "center",
            padding: "var(--space-8)",
            borderRadius: "var(--radius-xl)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "25%",
              right: "25%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
            }}
          />
          <div
            className="flex items-center justify-center gap-2"
            style={{ marginBottom: "var(--space-2)" }}
          >
            <ShieldCheck size={18} color="var(--accent-light)" aria-hidden="true" />
            <h4 style={{ fontSize: "var(--text-base)", fontWeight: 700, margin: 0 }}>
              Professional Transparency Standard
            </h4>
          </div>
          <p
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: "650px",
              margin: "0 auto",
            }}
          >
            As a dedicated undergraduate student, no fictitious employment history or simulated job titles are listed. This portfolio is engineered to present genuine academic performance, verified research publications, and real software projects.
          </p>
        </div>
      </div>
    </div>
  );
}
