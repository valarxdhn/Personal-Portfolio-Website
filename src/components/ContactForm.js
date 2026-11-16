"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
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
    <form onSubmit={handleSubmit} noValidate className="card" style={{ padding: "var(--space-8)" }}>
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
            backgroundColor: "var(--status-danger-bg)",
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
      <div className="form-group">
        <label htmlFor="contact-name" className="form-label">
          Full Name <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          aria-invalid={errors.name ? "true" : "false"}
          className="form-input"
          disabled={status === "loading"}
          required
        />
        {errors.name && <span className="form-error">{errors.name}</span>}
      </div>

      {/* Email Input */}
      <div className="form-group">
        <label htmlFor="contact-email" className="form-label">
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
          disabled={status === "loading"}
          required
        />
        {errors.email && <span className="form-error">{errors.email}</span>}
      </div>

      {/* Subject Input */}
      <div className="form-group">
        <label htmlFor="contact-subject" className="form-label">
          Subject <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Inquiry regarding internship, project, or collaboration"
          aria-invalid={errors.subject ? "true" : "false"}
          className="form-input"
          disabled={status === "loading"}
          required
        />
        {errors.subject && <span className="form-error">{errors.subject}</span>}
      </div>

      {/* Message Input */}
      <div className="form-group">
        <label htmlFor="contact-message" className="form-label">
          Message <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          aria-invalid={errors.message ? "true" : "false"}
          className="form-textarea"
          disabled={status === "loading"}
          required
        />
        {errors.message && <span className="form-error">{errors.message}</span>}
      </div>

      <div style={{ marginTop: "var(--space-2)" }}>
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
        }}
      >
        Verified API handler. You can also contact directly at{" "}
        <a href="mailto:contact@dhanush.dev" style={{ color: "var(--accent)" }}>
          contact@dhanush.dev
        </a>
      </p>
    </form>
  );
}
