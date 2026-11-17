import { Mail, MapPin, GraduationCap, Clock, MessageSquare, Sparkles, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import { personalData } from "@/data/personal";

export const metadata = {
  title: "Contact | DHANUSH",
  description:
    "Get in touch with Dhanush for software engineering internships, research collaborations, hackathons, and project inquiries.",
};

export default function ContactPage() {
  return (
    <div className="section" style={{ paddingTop: "var(--space-12)", minHeight: "85vh" }}>
      <div className="container">
        <SectionHeading
          eyebrow="Direct Channel"
          title="Get In Touch & Connect"
          subtitle="Open for software developer internships, research discussions, academic projects, and engineering inquiries."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--space-10)",
            maxWidth: "1100px",
            margin: "0 auto",
            alignItems: "flex-start",
          }}
        >
          {/* Left Column: Direct Info & Social Connect */}
          <div>
            <div
              className="card"
              style={{
                padding: "var(--space-8)",
                background: "linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(11, 15, 25, 0.85) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "var(--radius-xl)",
                marginBottom: "var(--space-6)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Luminous accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "15%",
                  right: "15%",
                  height: "2px",
                  background: "var(--gradient-accent)",
                }}
              />

              <div className="flex items-center gap-2" style={{ marginBottom: "var(--space-3)" }}>
                <Sparkles size={18} color="var(--accent-light)" aria-hidden="true" />
                <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 700, margin: 0 }}>
                  Contact Information
                </h3>
              </div>

              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "var(--space-6)",
                }}
              >
                Whether you are a recruiter discussing upcoming software engineering internship openings, a faculty mentor, or a fellow student developer interested in research or hackathon collaboration, feel free to reach out.
              </p>

              <div style={{ display: "grid", gap: "var(--space-4)", marginBottom: "var(--space-8)" }}>
                <div
                  className="flex items-start gap-3"
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-lg)",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <div
                    style={{
                      padding: "0.5rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "var(--accent-subtle)",
                      color: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", display: "block" }}>
                      Primary Email
                    </span>
                    <a
                      href="mailto:contact@dhanush.dev"
                      style={{
                        fontSize: "var(--text-sm)",
                        fontWeight: 600,
                        color: "var(--accent-light)",
                        textDecoration: "none",
                      }}
                    >
                      contact@dhanush.dev
                    </a>
                  </div>
                </div>

                <div
                  className="flex items-start gap-3"
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-lg)",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <div
                    style={{
                      padding: "0.5rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "rgba(6, 182, 212, 0.12)",
                      color: "var(--accent-cyan)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", display: "block" }}>
                      Location
                    </span>
                    <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-primary)" }}>
                      {personalData.location}
                    </span>
                  </div>
                </div>

                <div
                  className="flex items-start gap-3"
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-lg)",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <div
                    style={{
                      padding: "0.5rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "rgba(139, 92, 246, 0.12)",
                      color: "var(--accent-purple)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <GraduationCap size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", display: "block" }}>
                      College & Program
                    </span>
                    <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-primary)" }}>
                      {personalData.college}
                    </span>
                  </div>
                </div>

                <div
                  className="flex items-start gap-3"
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-lg)",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <div
                    style={{
                      padding: "0.5rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "rgba(16, 185, 129, 0.12)",
                      color: "var(--status-success)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", display: "block" }}>
                      Response Commitment
                    </span>
                    <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-primary)" }}>
                      Typically within 24 to 48 hours
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <span
                  style={{
                    fontSize: "var(--text-xs)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--text-muted)",
                    display: "block",
                    marginBottom: "var(--space-3)",
                  }}
                >
                  Verified Professional Profiles
                </span>
                <SocialLinks showLabels />
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
