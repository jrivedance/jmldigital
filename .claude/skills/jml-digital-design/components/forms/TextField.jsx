import React from "react";

/** Light text input (`.input-light`) plus its uppercase label. */
export function TextField({ label, hint, id, multiline = false, rows = 4, error, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const field = {
    width: "100%", boxSizing: "border-box",
    borderRadius: "var(--radius-lg)",
    border: "1px solid " + (error ? "var(--danger-border)" : focus ? "var(--border-focus)" : "var(--border-default)"),
    background: "var(--surface-sunken)", padding: "12px 16px",
    fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--text-strong)",
    outline: "none", transition: "border-color var(--duration-base) var(--ease-standard)",
    resize: multiline ? "none" : undefined,
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", ...style }}>
      {label ? (
        <label htmlFor={id} style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", fontWeight: "var(--weight-medium)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", color: "var(--text-subtle)" }}>
          {label}{hint ? <span style={{ textTransform: "none", letterSpacing: 0, color: "var(--ink-25)" }}> ({hint})</span> : null}
        </label>
      ) : null}
      {multiline
        ? <textarea id={id} rows={rows} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={field} {...rest} />
        : <input id={id} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={field} {...rest} />}
      {error ? <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", color: "var(--danger-fg)" }}>{error}</span> : null}
    </div>
  );
}
