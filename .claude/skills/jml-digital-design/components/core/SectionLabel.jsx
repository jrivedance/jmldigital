import React from "react";

/** Uppercase, letter-spaced eyebrow in a glass pill — opens every section. */
export function SectionLabel({ children, style, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: "8px",
        borderRadius: "var(--radius-pill)", border: "1px solid var(--border-default)",
        background: "var(--surface-glass)", backdropFilter: "blur(var(--blur-panel))",
        padding: "6px 16px", fontFamily: "var(--font-body)", fontSize: "var(--text-xs)",
        fontWeight: "var(--weight-medium)", textTransform: "uppercase",
        letterSpacing: "var(--tracking-eyebrow)", color: "var(--ink-50)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
