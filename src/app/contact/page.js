import { Mail, MapPin, GraduationCap, Clock, MessageSquare } from "lucide-react";
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
    <div className="section" style={{ paddingTop: "var(--space-10)" }}>
      <div className="container">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact & Connect"
          subtitle="Open for software developer internships, research discussions, academic projects, and engineering inquiries."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--space-10)",
            maxWidth: "1050px",
            margin: "0 auto",
          }}
        >
          {/* Left Column: Direct Info & Social Connect */}
          <div>
            <div className="card" style={{ padding: "var(--space-8)", marginBottom: "var(--space-6)" }}>
              <div className="flex items-center gap-2" style={{ marginBottom: "var(--space-4)" }}>
                <MessageSquare size={20} color="var(--accent)" aria-hidden="true" />
                <h3 style={{ fontSize: "var(--text-xl)", margin: 0 }}>
                  Direct Contact Information
                </h3>
              </div>

              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "var(--space-6)" }}>
                Whether you are a recruiter discussing upcoming internship openings, a faculty mentor, or a fellow student engineer interested in hackathon collaboration, feel free to reach out.
              </p>

              <div style={{ display: "grid", gap: "var(--space-4)", marginBottom: "var(--space-6)" }}>
                <div className="flex items-start gap-3">
                  <div
                    style={{
                      padding: "0.5rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "var(--accent-subtle)",
                      color: "var(--accent)",
                    }}
                  >
                    <Mail size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", display: "block" }}>
                      Email Inquiry
                    </span>
                    <a
                      href="mailto:contact@dhanush.dev"
                      style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-primary)" }}
                    >
                      contact@dhanush.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div
                    style={{
                      padding: "0.5rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "var(--accent-subtle)",
                      color: "var(--accent)",
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

                <div className="flex items-start gap-3">
                  <div
                    style={{
                      padding: "0.5rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "var(--accent-subtle)",
                      color: "var(--accent)",
                    }}
                  >
                    <GraduationCap size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", display: "block" }}>
                      College & Department
                    </span>
                    <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-primary)" }}>
                      {personalData.college}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div
                    style={{
                      padding: "0.5rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "var(--accent-subtle)",
                      color: "var(--accent)",
                    }}
                  >
                    <Clock size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", display: "block" }}>
                      Response Time
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
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "var(--text-muted)",
                    display: "block",
                    marginBottom: "var(--space-3)",
                  }}
                >
                  Connect on Professional Networks
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
