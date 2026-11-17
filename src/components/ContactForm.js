"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail } from "lucide-react";
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botcheck: "", // Honeypot field
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Full name (at least 2 characters) is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please provide a valid email address.";
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = "Subject (at least 3 characters) is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message content is required.";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Message must be at least 15 characters.";
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
          data.message || "Your message has been received! Dhanush will review it shortly."
        );
        setFormData({ name: "", email: "", subject: "", message: "", botcheck: "" });
      } else {
        setStatus("error");
        setStatusMessage(
          data.message ||
            "Unable to deliver message through the form. Please reach out directly at contact@dhanush.dev."
        );
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        "Network connection error. Please verify your connection or email directly at contact@dhanush.dev."
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
        background: "var(--bg-secondary)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
      }}
    >
      <div style={{ marginBottom: "var(--space-6)" }}>
        <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 700, marginBottom: "var(--space-2)" }}>
          Send a Message
        </h3>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0 }}>
          Reach out regarding software internships, project inquiries, or technical collaborations.
        </p>
      </div>

      {/* Honeypot field (hidden from real users) */}
      <input
        type="text"
        name="botcheck"
        value={formData.botcheck}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
        aria-hidden="true"
      />

      {status === "success" && (
        <div
          role="status"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "var(--space-3)",
            padding: "var(--space-4)",
            borderRadius: "var(--radius-md)",
            backgroundColor: "var(--status-success-bg)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            marginBottom: "var(--space-6)",
          }}
        >
          <CheckCircle2 size={20} color="var(--status-success)" style={{ flexShrink: 0, marginTop: "2px" }} />
          <div>
            <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--status-success)", marginBottom: "2px" }}>
              Message Received
            </h4>
            <p style={{ fontSize: "var(--text-xs)", color: "var(--text-primary)", margin: 0 }}>
              {statusMessage}
            </p>
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
            backgroundColor: "var(--status-danger-bg)",
            border: "1px solid rgba(239, 68, 68, 0.3)",
            marginBottom: "var(--space-6)",
          }}
        >
          <AlertCircle size={20} color="var(--status-danger)" style={{ flexShrink: 0, marginTop: "2px" }} />
          <div>
            <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--status-danger)", marginBottom: "2px" }}>
              Notice
            </h4>
            <p style={{ fontSize: "var(--text-xs)", color: "var(--text-primary)", margin: 0 }}>
              {statusMessage}
            </p>
            <div style={{ marginTop: "var(--space-2)" }}>
              <a
                href="mailto:contact@dhanush.dev"
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--accent)",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Mail size={12} />
                Open Email Client
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Name Input */}
      <div style={{ marginBottom: "var(--space-4)" }}>
        <label
          htmlFor="contact-name"
          style={{
            display: "block",
            fontSize: "var(--text-xs)",
            fontWeight: 600,
            color: "var(--text-secondary)",
            marginBottom: "var(--space-2)",
          }}
        >
          Your Name <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Alex Chen"
          aria-invalid={errors.name ? "true" : "false"}
          disabled={status === "loading"}
          required
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            backgroundColor: "var(--bg-tertiary)",
            border: errors.name ? "1px solid var(--status-danger)" : "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
            color: "var(--text-primary)",
            fontSize: "var(--text-sm)",
            outline: "none",
            transition: "border-color var(--transition-fast)",
          }}
        />
        {errors.name && (
          <span style={{ color: "var(--status-danger)", fontSize: "var(--text-xs)", marginTop: "4px", display: "block" }}>
            {errors.name}
          </span>
        )}
      </div>

      {/* Email Input */}
      <div style={{ marginBottom: "var(--space-4)" }}>
        <label
          htmlFor="contact-email"
          style={{
            display: "block",
            fontSize: "var(--text-xs)",
            fontWeight: 600,
            color: "var(--text-secondary)",
            marginBottom: "var(--space-2)",
          }}
        >
          Your Email Address <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          aria-invalid={errors.email ? "true" : "false"}
          disabled={status === "loading"}
          required
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            backgroundColor: "var(--bg-tertiary)",
            border: errors.email ? "1px solid var(--status-danger)" : "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
            color: "var(--text-primary)",
            fontSize: "var(--text-sm)",
            outline: "none",
            transition: "border-color var(--transition-fast)",
          }}
        />
        {errors.email && (
          <span style={{ color: "var(--status-danger)", fontSize: "var(--text-xs)", marginTop: "4px", display: "block" }}>
            {errors.email}
          </span>
        )}
      </div>

      {/* Subject Input */}
      <div style={{ marginBottom: "var(--space-4)" }}>
        <label
          htmlFor="contact-subject"
          style={{
            display: "block",
            fontSize: "var(--text-xs)",
            fontWeight: 600,
            color: "var(--text-secondary)",
            marginBottom: "var(--space-2)",
          }}
        >
          Subject <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Internship inquiry / Project discussion"
          aria-invalid={errors.subject ? "true" : "false"}
          disabled={status === "loading"}
          required
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            backgroundColor: "var(--bg-tertiary)",
            border: errors.subject ? "1px solid var(--status-danger)" : "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
            color: "var(--text-primary)",
            fontSize: "var(--text-sm)",
            outline: "none",
            transition: "border-color var(--transition-fast)",
          }}
        />
        {errors.subject && (
          <span style={{ color: "var(--status-danger)", fontSize: "var(--text-xs)", marginTop: "4px", display: "block" }}>
            {errors.subject}
          </span>
        )}
      </div>

      {/* Message Input */}
      <div style={{ marginBottom: "var(--space-6)" }}>
        <label
          htmlFor="contact-message"
          style={{
            display: "block",
            fontSize: "var(--text-xs)",
            fontWeight: 600,
            color: "var(--text-secondary)",
            marginBottom: "var(--space-2)",
          }}
        >
          Message <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your inquiry, role, or project..."
          aria-invalid={errors.message ? "true" : "false"}
          disabled={status === "loading"}
          required
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            backgroundColor: "var(--bg-tertiary)",
            border: errors.message ? "1px solid var(--status-danger)" : "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
            color: "var(--text-primary)",
            fontSize: "var(--text-sm)",
            fontFamily: "inherit",
            resize: "vertical",
            outline: "none",
            transition: "border-color var(--transition-fast)",
          }}
        />
        {errors.message && (
          <span style={{ color: "var(--status-danger)", fontSize: "var(--text-xs)", marginTop: "4px", display: "block" }}>
            {errors.message}
          </span>
        )}
      </div>

      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === "loading"}
          style={{ width: "100%", gap: "var(--space-2)" }}
        >
          {status === "loading" ? (
            <>
              <Loader2 size={18} className="animate-spin" aria-hidden="true" />
              <span>Sending Message...</span>
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
          margin: "var(--space-4) 0 0 0",
        }}
      >
        Direct email alternative:{" "}
        <a href="mailto:contact@dhanush.dev" style={{ color: "var(--accent)", textDecoration: "underline" }}>
          contact@dhanush.dev
        </a>
      </p>
    </form>
  );
}
