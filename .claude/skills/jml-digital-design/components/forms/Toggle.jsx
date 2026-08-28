import React from "react";

/** On/off switch for settings and notification preferences. */
export function Toggle({ checked = false, onChange, disabled, label, style, ...rest }) {
  return (
    <button
      type="button" role="switch" aria-checked={checked} aria-label={label} disabled={disabled}
      onClick={() => !disabled && onChange && onChange(!checked)}
      style={{
        width: 40, height: 22, flexShrink: 0, padding: 2, border: "none",
        borderRadius: "var(--radius-pill)", cursor: disabled ? "not-allowed" : "pointer",
        background: checked ? "var(--brand-600)" : "var(--ink-10)", opacity: disabled ? 0.5 : 1,
        transition: "background-color var(--duration-base) var(--ease-standard)",
        ...style,
      }}
      {...rest}
    >
      <span style={{ display: "block", width: 18, height: 18, borderRadius: "var(--radius-pill)", background: "#fff", transform: checked ? "translateX(18px)" : "none", transition: "transform var(--duration-base) var(--ease-standard)" }} />
    </button>
  );
}
