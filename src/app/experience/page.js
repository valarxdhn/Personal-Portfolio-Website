import { Calendar, MapPin, GraduationCap, FileText, Code2, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Experience & Activities | Dhanush",
  description:
    "Academic research, software engineering coursework, and technical activities of Dhanush, Computer Science Engineering Student at Sahyadri College.",
};

export default function ExperiencePage() {
  const experiences = [
    {
      role: "Student Researcher & Co-Author",
      organization: "IJIRT Peer-Reviewed Journal Publication",
      period: "2026",
      type: "Academic Research",
      details: [
        "Collaborated on an applied research paper titled 'AI-Powered Rural Student Dropout Early Warning System with Explainable Predictions, SMS Alerts, and Government Scheme Recommendations'.",
        "Assisted in analyzing risk indicators, formulating the early-warning logic, and structuring the notification workflow.",
        "Published in the International Journal of Innovative Research in Technology (IJIRT), Volume 13, Paper ID: 206803.",
      ],
      technologies: ["Machine Learning", "Explainable AI", "Data Analysis", "Research Writing"],
    },
    {
      role: "Research Paper Presenter",
      organization: "International Academic Conference",
      period: "Recent Presentation",
      type: "Conference Defense",
      details: [
        "Delivered oral research presentation defending computational problem-solving and software methodologies.",
        "Addressed technical methodology questions from academic reviewers and conference delegates.",
      ],
      technologies: ["Technical Communication", "Methodology Defense", "Data Presentation"],
    },
    {
      role: "Undergraduate Computer Science Student",
      organization: "Sahyadri College of Engineering and Management",
      period: "2024 – Present",
      type: "Degree Coursework",
      details: [
        "Pursuing Bachelor of Engineering in Computer Science and Engineering with a First-Year CGPA of 8.85.",
        "Completed foundational coursework in data structures, algorithms, object-oriented programming (C++, Java), and discrete mathematics.",
        "Developing practical software applications including Dynamic Train ETA, VoltCharge, and CampusLoop.",
      ],
      technologies: ["C", "C++", "Python", "Java", "Data Structures", "Git"],
    },
    {
      role: "Hackathon Participant & Student Developer",
      organization: "Collegiate & Regional Hackathons",
      period: "Ongoing",
      type: "Team Projects",
      details: [
        "Participated in collegiate hackathons focusing on practical web development and problem-solving under time constraints.",
        "Collaborated in student teams using Git and GitHub for version control, task distribution, and rapid prototyping.",
      ],
      technologies: ["Team Collaboration", "Rapid Prototyping", "Full-Stack Web", "Git"],
    },
  ];

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "860px" }}>
        <SectionHeading
          eyebrow="Timeline"
          title="Experience & Technical Activities"
          subtitle="An honest record of academic research, undergraduate coursework, and collaborative engineering projects."
        />

        <div style={{ display: "grid", gap: "var(--space-6)" }}>
          {experiences.map((exp, idx) => (
            <article
              key={idx}
              className="card"
              style={{
                padding: "var(--space-6)",
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "var(--space-2)",
                  marginBottom: "var(--space-2)",
                }}
              >
                <span className="badge badge-accent">{exp.type}</span>
                <span
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--text-muted)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <Calendar size={13} aria-hidden="true" />
                  {exp.period}
                </span>
              </div>

              <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, marginBottom: "2px" }}>
                {exp.role}
              </h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--accent)", fontWeight: 600, marginBottom: "var(--space-4)" }}>
                {exp.organization}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 var(--space-4) 0",
                  display: "grid",
                  gap: "var(--space-2)",
                }}
              >
                {exp.details.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "var(--space-2)",
                    }}
                  >
                    <span style={{ color: "var(--text-muted)", marginTop: "-1px" }}>–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-1)" }}>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: "0.72rem",
                      padding: "0.15rem 0.5rem",
                      backgroundColor: "var(--bg-tertiary)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-sm)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
