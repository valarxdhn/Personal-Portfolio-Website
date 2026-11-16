export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignClass = align === "left" ? "text-left" : "";

  return (
    <div className={`section-heading ${alignClass} ${className}`.trim()}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
