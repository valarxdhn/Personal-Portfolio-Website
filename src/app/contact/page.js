import { Mail, MapPin, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { personalData } from "@/data/personal";

export const metadata = {
  title: "Contact | Dhanush",
  description:
    "Contact Dhanush for software developer internships, research collaborations, and engineering inquiries.",
};

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact"
          subtitle="Open for software engineering internships, technical collaborations, and project inquiries."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-10)",
            maxWidth: "960px",
            margin: "0 auto",
            alignItems: "flex-start",
          }}
        >
          {/* Left Column: Direct Info */}
          <div>
            <div
              className="card"
              style={{
                padding: "var(--space-6)",
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border)",
              }}
            >
              <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, marginBottom: "var(--space-3)" }}>
                Direct Contact
              </h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "var(--space-6)" }}>
                Whether you are a recruiter discussing internship openings, a faculty mentor, or a fellow student engineer interested in collaborating, feel free to reach out.
              </p>

              <div style={{ display: "grid", gap: "var(--space-4)" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-3)" }}>
                  <Mail size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
                  <div>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", display: "block" }}>
                      Email
                    </span>
                    <a
                      href="mailto:contact@dhanush.dev"
                      style={{ fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--text-primary)" }}
                    >
                      contact@dhanush.dev
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-3)" }}>
                  <MapPin size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
                  <div>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", display: "block" }}>
                      Location
                    </span>
                    <span style={{ fontSize: "var(--text-sm)", color: "var(--text-primary)" }}>
                      {personalData.location}
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-3)" }}>
                  <GraduationCap size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
                  <div>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", display: "block" }}>
                      Institution
                    </span>
                    <span style={{ fontSize: "var(--text-sm)", color: "var(--text-primary)" }}>
                      {personalData.college}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
