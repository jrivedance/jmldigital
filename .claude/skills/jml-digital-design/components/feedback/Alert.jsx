import React from "react";

const tones = {
  danger: { bg: "var(--danger-bg)", border: "var(--danger-border)", fg: "var(--danger-fg)" },
  success: { bg: "rgba(240,253,244,0.7)", border: "var(--success-border)", fg: "var(--success-fg)" },
  warning: { bg: "var(--warning-bg)", border: "var(--warning-border)", fg: "var(--warning-fg)" },
  info: { bg: "var(--info-bg)", border: "var(--info-border)", fg: "var(--info-fg)" },
};

/** Inline form/page message. */
export function Alert({ tone = "danger", icon, title, children, style, ...rest }) {
  const t = tones[tone] || tones.danger;
  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: "8px",
      borderRadius: "var(--radius-lg)", border: "1px solid " + t.border, background: t.bg,
      padding: "12px 14px", color: t.fg,
      fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", lineHeight: "var(--leading-snug)",
      ...style,
    }} {...rest}>
      {icon ? <span style={{ flexShrink: 0, marginTop: "2px", display: "flex" }}>{icon}</span> : null}
      <span>
        {title ? <strong style={{ display: "block", fontWeight: "var(--weight-semibold)" }}>{title}</strong> : null}
        {children}
      </span>
    </div>
  );
}
