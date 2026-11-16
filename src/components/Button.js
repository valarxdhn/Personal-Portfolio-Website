import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary", // primary, secondary, outline, ghost
  size = "md",          // sm, md, lg
  className = "",
  disabled = false,
  isExternal = false,
  type = "button",
  onClick,
  ...props
}) {
  const sizeClass = size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "";
  const variantClass = `btn-${variant}`;
  const classes = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
