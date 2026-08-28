import React from "react";

const tones = {
  brand: { bg: "var(--brand-50)", fg: "var(--brand-700)", border: "var(--brand-200)" },
  brandSolid: { bg: "var(--brand-100)", fg: "var(--brand-700)", border: "transparent" },
  neutral: { bg: "var(--ink-05)", fg: "var(--ink-50)", border: "var(--border-default)" },
  warning: { bg: "var(--warning-bg)", fg: "var(--warning-fg)", border: "var(--warning-border)" },
  danger: { bg: "var(--danger-bg)", fg: "var(--danger-fg)", border: "var(--danger-border)" },
  success: { bg: "var(--success-bg)", fg: "var(--success-fg)", border: "var(--success-border)" },
};

/** Small status/stat pill used on orders, leads, packages and service cards. */
export function Badge({ tone = "brand", uppercase = false, bordered = true, style, children, ...rest }) {
  const t = tones[tone] || tones.brand;
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: "6px",
        borderRadius: "var(--radius-pill)", padding: "2px 10px",
        border: "1px solid " + (bordered ? t.border : "transparent"),
        background: t.bg, color: t.fg,
        fontFamily: "var(--font-body)", fontSize: "var(--text-xs)",
        fontWeight: "var(--weight-semibold)",
        textTransform: uppercase ? "uppercase" : "none",
        letterSpacing: uppercase ? "var(--tracking-wide)" : "0",
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
