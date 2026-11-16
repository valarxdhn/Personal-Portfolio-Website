import { Github, Linkedin, Mail, FileText, Globe, ExternalLink } from "lucide-react";
import { socialLinks } from "@/data/social";

const iconMap = {
  Github: Github,
  Linkedin: Linkedin,
  Mail: Mail,
  FileText: FileText,
  Globe: Globe,
};

export default function SocialLinks({ className = "", showLabels = false }) {
  return (
    <div
      className={`social-links-wrapper flex items-center gap-3 flex-wrap ${className}`}
      style={{ display: "inline-flex" }}
    >
      {socialLinks.map((item) => {
        const IconComponent = iconMap[item.icon] || Globe;
        return (
          <a
            key={item.name}
            href={item.url}
            target={item.url.startsWith("mailto:") ? "_self" : "_blank"}
            rel={item.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className={`btn btn-secondary ${showLabels ? "btn-sm" : "btn-icon"}`}
            aria-label={item.name}
            title={item.name}
            style={{ textDecoration: "none" }}
          >
            <IconComponent size={18} aria-hidden="true" />
            {showLabels && <span>{item.name}</span>}
          </a>
        );
      })}
    </div>
  );
}
