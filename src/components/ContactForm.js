"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, Copy, Check, ExternalLink } from "lucide-react";
import Button from "./Button";
import { personalData } from "@/data/personal";

/**
 * ContactForm Component
 *
 * Provides a genuine, verifiable contact interface:
 * 1. If backend email provider is configured: Renders the validated interactive form that dispatches
 *    real emails via Resend.
 * 2. If backend email provider is NOT configured: Replaces the form with a clean, high-utility
 *    direct contact panel with copy-to-clipboard and working mailto triggers. Zero fake confirmations.
 */
export default function ContactForm({ isConfigured = false }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botcheck: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [copied, setCopied] = useState(false);

  const contactEmail = personalData.email || "dhanushmk95@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback if clipboard API is blocked
      setCopied(false);
    }
  };

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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", botcheck: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // =========================================================================
  // STATE A: Email Integration NOT Configured (Clean Direct Contact Panel)
  // =========================================================================
  if (!isConfigured) {
    return (
      <div
        className="card"
        style={{
          padding: "var(--space-8)",
          background: "var(--bg-secondary)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
        }}
      >
        <div style={{ marginBottom: "var(--space-6)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "var(--space-2)" }}>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "var(--status-success)",
                boxShadow: "0 0 8px var(--status-success)",
              }}
              aria-hidden="true"
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontWeight: 600,
              }}
            >
              Direct Transmission Channel
            </span>
          </div>
          <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 700, marginBottom: "var(--space-2)", color: "var(--text-primary)" }}>
            Direct Contact Panel
          </h3>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
            To ensure immediate and reliable message delivery without intermediary relays, reach out directly via your preferred email application.
          </p>
        </div>

        {/* Email Address Display Box */}
        <div
          style={{
            padding: "var(--space-4) var(--space-5)",
            backgroundColor: "var(--bg-tertiary)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
            marginBottom: "var(--space-6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "var(--space-3)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "var(--accent-subtle)",
                border: "1px solid var(--accent-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent)",
              }}
            >
              <Mail size={18} aria-hidden="true" />
            </div>
            <div>
              <span style={{ display: "block", fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Primary Inbox
              </span>
              <a
                href={`mailto:${contactEmail}`}
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  textDecoration: "none",
                }}
              >
                {contactEmail}
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="btn btn-secondary btn-sm"
            style={{ gap: "6px" }}
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <Check size={14} color="var(--status-success)" aria-hidden="true" />
                <span style={{ color: "var(--status-success)" }}>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} aria-hidden="true" />
                <span>Copy Address</span>
              </>
            )}
          </button>
        </div>

        {/* Primary Action Button */}
        <div style={{ marginBottom: "var(--space-6)" }}>
          <Button
            href={`mailto:${contactEmail}?subject=Portfolio%20Inquiry%20-%20Dhanush`}
            variant="primary"
            size="lg"
            style={{ width: "100%", justifyContent: "center", gap: "var(--space-2)" }}
          >
            <Send size={16} aria-hidden="true" />
            <span>Open in Email Client</span>
          </Button>
        </div>

        {/* Inquiry Quick-Links */}
        <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "var(--space-4)" }}>
          <span style={{ display: "block", fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--text-muted)", marginBottom: "var(--space-2)" }}>
            QUICK SUBJECT PRESETS:
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
            <a
              href={`mailto:${contactEmail}?subject=Software%20Engineering%20Internship%20Inquiry%20-%20Dhanush`}
              className="aural-spec-chip"
              style={{ textDecoration: "none", color: "var(--text-secondary)", transition: "color var(--transition-fast)" }}
            >
              <span>+ Internship Inquiry</span>
            </a>
            <a
              href={`mailto:${contactEmail}?subject=Engineering%20Collaboration%20-%20Dhanush`}
              className="aural-spec-chip"
              style={{ textDecoration: "none", color: "var(--text-secondary)", transition: "color var(--transition-fast)" }}
            >
              <span>+ Engineering Collaboration</span>
            </a>
            <a
              href={`mailto:${contactEmail}?subject=Research%20Discussion%20-%20Dhanush`}
              className="aural-spec-chip"
              style={{ textDecoration: "none", color: "var(--text-secondary)", transition: "color var(--transition-fast)" }}
            >
              <span>+ Research Discussion</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // STATE B: Email Integration IS Configured (Genuine Validated Resend Form)
  // =========================================================================
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

      {/* Success Notification */}
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
              Your message has been submitted successfully.
            </p>
          </div>
        </div>
      )}

      {/* Failure Notification */}
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
              Unable to send your message right now. Please contact me directly by email.
            </p>
            <div style={{ marginTop: "var(--space-2)" }}>
              <a
                href={`mailto:${contactEmail}`}
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
              <span>Sending your message...</span>
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
        <a href={`mailto:${contactEmail}`} style={{ color: "var(--accent)", textDecoration: "underline" }}>
          {contactEmail}
        </a>
      </p>
    </form>
  );
}
