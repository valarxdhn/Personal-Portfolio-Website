import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import { skillCategories } from "@/data/skills";

export const metadata = {
  title: "Technical Skills | Dhanush",
  description:
    "Confirmed technical skills of Dhanush: C, C++, Python, Java, Supabase, Git, and GitHub. Organized by domain without fabricated proficiency bars.",
};

export default function SkillsPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "960px" }}>
        <SectionHeading
          eyebrow="Competencies"
          title="Technical Skills"
          subtitle="Programming languages, database frameworks, and developer tools applied in coursework, academic research, and software projects."
        />

        {/* Categorized Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-6)",
            marginBottom: "var(--space-12)",
          }}
        >
          {skillCategories.map((category, idx) => (
            <SkillCard key={category.name} category={category} index={idx} />
          ))}
        </div>

        {/* Applied Engineering Focus */}
        <div
          className="card"
          style={{
            padding: "var(--space-6)",
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--border)",
          }}
        >
          <h3 style={{ fontSize: "var(--text-base)", fontWeight: 700, marginBottom: "var(--space-2)" }}>
            Practical Application
          </h3>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
            Skills listed reflect active, hands-on experience in college coursework, competitive programming problems, and project development. No artificial percentage bars or simulated metrics are displayed.
          </p>
        </div>
      </div>
    </div>
  );
}
