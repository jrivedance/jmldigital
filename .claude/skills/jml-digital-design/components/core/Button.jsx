import React from "react";

const base = {
  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
  fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)",
  borderRadius: "var(--radius-pill)", border: "1px solid transparent",
  cursor: "pointer", whiteSpace: "nowrap", textDecoration: "none",
  transition: "transform var(--duration-base) var(--ease-standard), background-color var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard)",
};

const sizes = {
  sm: { padding: "8px 20px", fontSize: "var(--text-xs)" },
  md: { padding: "12px 24px", fontSize: "var(--text-sm)" },
  lg: { padding: "14px 28px", fontSize: "var(--text-base)" },
};

const variants = {
  primary: { background: "var(--brand-600)", color: "var(--text-on-brand)", boxShadow: "var(--shadow-glow-brand)" },
  secondary: { background: "var(--surface-glass)", color: "var(--ink-80)", borderColor: "var(--border-default)", backdropFilter: "blur(var(--blur-panel))" },
  ghost: { background: "transparent", color: "var(--text-muted)" },
  solid: { background: "var(--ink-1000)", color: "#fff" },
};

/** Primary call to action across marketing and admin (`.btn-primary` / `.btn-secondary`). */
export function Button({ variant = "primary", size = "md", as = "button", href, disabled, icon, iconPosition = "end", style, children, ...rest }) {
  const Tag = href ? "a" : as;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const transform = disabled ? "none" : press ? "var(--press-scale)" : hover && variant === "primary" ? "var(--hover-lift)" : "none";
  const hoverStyle = !disabled && hover
    ? variant === "primary" ? { background: "var(--brand-700)", borderColor: "rgba(255,255,255,0.95)", boxShadow: "none" }
    : variant === "secondary" ? { background: "#fff", borderColor: "var(--brand-500)", color: "var(--brand-700)" }
    : variant === "ghost" ? { color: "var(--text-strong)" }
    : variant === "solid" ? { background: "var(--ink-80)" } : {}
    : {};
  return (
    <Tag
      href={href} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{ ...base, ...sizes[size], ...v, ...hoverStyle, transform, opacity: disabled ? 0.6 : 1, cursor: disabled ? "not-allowed" : "pointer", ...style }}
      {...rest}
    >
      {icon && iconPosition === "start" ? icon : null}
      {children}
      {icon && iconPosition === "end" ? icon : null}
    </Tag>
  );
}
