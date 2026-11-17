"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, MessageSquare } from "lucide-react";
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please provide a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message content is required.";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Message must be at least 15 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate() || status === "loading") {
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setStatusMessage(
          data.message ||
            "Your message has been received! Thank you for getting in touch."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(
          data.message || "Failed to deliver message. Please try again or email directly."
        );
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage(
        "Network connection issue. Please verify your connection or reach out directly via email."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="card"
      style={{
        padding: "var(--space-8)",
        background: "linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(11, 15, 25, 0.9) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "var(--radius-xl)",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 16px 36px -10px rgba(0, 0, 0, 0.6)",
      }}
    >
      {/* Decorative top accent glow */}
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

      <div style={{ marginBottom: "var(--space-6)" }}>
        <div className="flex items-center gap-2" style={{ marginBottom: "var(--space-2)" }}>
          <MessageSquare size={18} color="var(--accent-light)" aria-hidden="true" />
          <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 700, margin: 0 }}>
            Send a Direct Message
          </h3>
        </div>
        <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", margin: 0 }}>
          Fill out the form below to initiate discussion. All fields marked with * are required.
        </p>
      </div>

      {status === "success" && (
        <div
          role="status"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "var(--space-3)",
            padding: "var(--space-4)",
            borderRadius: "var(--radius-md)",
            backgroundColor: "rgba(16, 185, 129, 0.12)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            marginBottom: "var(--space-6)",
          }}
        >
          <CheckCircle2 size={20} color="var(--status-success)" style={{ flexShrink: 0, marginTop: "2px" }} />
          <div>
            <h4 style={{ fontSize: "var(--text-sm)", color: "var(--status-success)", marginBottom: "4px" }}>
              Message Received
            </h4>
            <p style={{ fontSize: "var(--text-xs)", color: "var(--text-primary)" }}>{statusMessage}</p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "var(--space-3)",
            padding: "var(--space-4)",
            borderRadius: "var(--radius-md)",
            backgroundColor: "rgba(239, 68, 68, 0.12)",
            border: "1px solid rgba(239, 68, 68, 0.3)",
            marginBottom: "var(--space-6)",
          }}
        >
          <AlertCircle size={20} color="var(--status-danger)" style={{ flexShrink: 0, marginTop: "2px" }} />
          <div>
            <h4 style={{ fontSize: "var(--text-sm)", color: "var(--status-danger)", marginBottom: "4px" }}>
              Submission Alert
            </h4>
            <p style={{ fontSize: "var(--text-xs)", color: "var(--text-primary)" }}>{statusMessage}</p>
          </div>
        </div>
      )}

      {/* Name Input */}
      <div className="form-group" style={{ marginBottom: "var(--space-4)" }}>
        <label htmlFor="contact-name" className="form-label" style={{ display: "block", fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "var(--space-2)" }}>
          Full Name <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Alex Morgan"
          aria-invalid={errors.name ? "true" : "false"}
          className="form-input"
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            border: errors.name ? "1px solid var(--status-danger)" : "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "var(--radius-md)",
            color: "var(--text-primary)",
            fontSize: "var(--text-sm)",
            transition: "all var(--transition-fast)",
            outline: "none",
          }}
          disabled={status === "loading"}
          required
        />
        {errors.name && <span className="form-error" style={{ color: "var(--status-danger)", fontSize: "var(--text-xs)", marginTop: "4px", display: "block" }}>{errors.name}</span>}
      </div>

      {/* Email Input */}
      <div className="form-group" style={{ marginBottom: "var(--space-4)" }}>
        <label htmlFor="contact-email" className="form-label" style={{ display: "block", fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "var(--space-2)" }}>
          Email Address <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          aria-invalid={errors.email ? "true" : "false"}
          className="form-input"
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            border: errors.email ? "1px solid var(--status-danger)" : "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "var(--radius-md)",
            color: "var(--text-primary)",
            fontSize: "var(--text-sm)",
            transition: "all var(--transition-fast)",
            outline: "none",
          }}
          disabled={status === "loading"}
          required
        />
        {errors.email && <span className="form-error" style={{ color: "var(--status-danger)", fontSize: "var(--text-xs)", marginTop: "4px", display: "block" }}>{errors.email}</span>}
      </div>

      {/* Subject Input */}
      <div className="form-group" style={{ marginBottom: "var(--space-4)" }}>
        <label htmlFor="contact-subject" className="form-label" style={{ display: "block", fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "var(--space-2)" }}>
          Subject <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Software Engineering Internship / Research Collaboration"
          aria-invalid={errors.subject ? "true" : "false"}
          className="form-input"
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            border: errors.subject ? "1px solid var(--status-danger)" : "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "var(--radius-md)",
            color: "var(--text-primary)",
            fontSize: "var(--text-sm)",
            transition: "all var(--transition-fast)",
            outline: "none",
          }}
          disabled={status === "loading"}
          required
        />
        {errors.subject && <span className="form-error" style={{ color: "var(--status-danger)", fontSize: "var(--text-xs)", marginTop: "4px", display: "block" }}>{errors.subject}</span>}
      </div>

      {/* Message Input */}
      <div className="form-group" style={{ marginBottom: "var(--space-6)" }}>
        <label htmlFor="contact-message" className="form-label" style={{ display: "block", fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "var(--space-2)" }}>
          Message <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Share details regarding your team, the project, or the collaborative opportunity..."
          aria-invalid={errors.message ? "true" : "false"}
          className="form-textarea"
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            border: errors.message ? "1px solid var(--status-danger)" : "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "var(--radius-md)",
            color: "var(--text-primary)",
            fontSize: "var(--text-sm)",
            fontFamily: "inherit",
            resize: "vertical",
            transition: "all var(--transition-fast)",
            outline: "none",
          }}
          disabled={status === "loading"}
          required
        />
        {errors.message && <span className="form-error" style={{ color: "var(--status-danger)", fontSize: "var(--text-xs)", marginTop: "4px", display: "block" }}>{errors.message}</span>}
      </div>

      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === "loading"}
          style={{ width: "100%", gap: "var(--space-2)", borderRadius: "var(--radius-md)" }}
        >
          {status === "loading" ? (
            <>
              <Loader2 size={18} className="animate-spin" aria-hidden="true" />
              <span>Transmitting Message...</span>
            </>
          ) : (
            <>
              <Send size={18} aria-hidden="true" />
              <span>Send Message</span>
            </>
          )}
        </Button>
      </div>

      <p
        style={{
          marginTop: "var(--space-4)",
          fontSize: "var(--text-xs)",
          color: "var(--text-muted)",
          textAlign: "center",
          lineHeight: 1.5,
        }}
      >
        Submissions handled securely via verified server endpoint. You can also contact directly at{" "}
        <a href="mailto:contact@dhanush.dev" style={{ color: "var(--accent-light)", fontWeight: 600 }}>
          contact@dhanush.dev
        </a>
      </p>
    </form>
  );
}
