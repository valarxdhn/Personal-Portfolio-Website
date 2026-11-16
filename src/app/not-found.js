import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div
      className="section"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
      }}
    >
      <div className="container" style={{ maxWidth: "560px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            backgroundColor: "var(--accent-subtle)",
            color: "var(--accent)",
            marginBottom: "var(--space-4)",
          }}
        >
          <Compass size={32} aria-hidden="true" />
        </div>

        <h1 style={{ fontSize: "var(--text-4xl)", marginBottom: "var(--space-2)" }}>404</h1>
        <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)", color: "var(--text-primary)" }}>
          Page Not Found
        </h2>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginBottom: "var(--space-6)" }}>
          The requested page could not be located. It might have been moved or does not exist.
        </p>

        <div className="flex justify-center gap-3">
          <Button href="/" variant="primary">
            <Home size={16} aria-hidden="true" />
            <span>Return Home</span>
          </Button>
          <Button href="/projects" variant="secondary">
            <span>Explore Projects</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
