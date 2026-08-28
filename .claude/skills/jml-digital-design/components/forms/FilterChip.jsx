import React from "react";

/** Pill filter used above the gallery grid. */
export function FilterChip({ active = false, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: "var(--radius-pill)", padding: "6px 16px", cursor: "pointer",
        fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: "var(--weight-medium)",
        border: "1px solid " + (active ? (hover ? "rgba(255,255,255,0.95)" : "var(--brand-600)") : hover ? "var(--brand-500)" : "var(--border-default)"),
        background: active ? "var(--brand-600)" : "var(--surface-glass)",
        color: active ? "#fff" : hover ? "var(--brand-700)" : "var(--text-muted)",
        transition: "all var(--duration-base) var(--ease-standard)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
