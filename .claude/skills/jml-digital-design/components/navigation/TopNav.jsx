import React from "react";

/** Fixed, floating glass top bar from the marketing site. */
export function TopNav({ logo, links = [], activeHref, actions, style, ...rest }) {
  const [hover, setHover] = React.useState(null);
  return (
    <header style={{ display: "flex", justifyContent: "center", padding: "16px", ...style }} {...rest}>
      <nav style={{
        display: "flex", width: "100%", maxWidth: "1024px", alignItems: "center", justifyContent: "space-between",
        borderRadius: "var(--radius-xl)", border: "1px solid var(--border-hairline)",
        background: "var(--surface-glass-strong)", backdropFilter: "blur(var(--blur-panel))",
        boxShadow: "var(--shadow-glass)", padding: "12px 20px",
      }}>
        {logo}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href}
              onMouseEnter={() => setHover(l.href)} onMouseLeave={() => setHover(null)}
              style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", textDecoration: "none",
                color: l.href === activeHref || hover === l.href ? "var(--text-strong)" : "var(--text-muted)",
                transition: "color var(--duration-base) var(--ease-standard)" }}>{l.label}</a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>{actions}</div>
      </nav>
    </header>
  );
}
