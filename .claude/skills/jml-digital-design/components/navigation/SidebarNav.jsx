import React from "react";

/** Admin sidebar navigation list. */
export function SidebarNav({ items = [], activeHref, onNavigate, style, ...rest }) {
  const [hover, setHover] = React.useState(null);
  return (
    <nav style={{ display: "flex", flexDirection: "column", gap: "4px", ...style }} {...rest}>
      {items.map((item) => {
        const active = item.href === activeHref;
        return (
          <a key={item.label} href={item.href}
            onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate(item.href); } }}
            onMouseEnter={() => setHover(item.href)} onMouseLeave={() => setHover(null)}
            style={{
              display: "flex", alignItems: "center", gap: "10px",
              borderRadius: "var(--radius-lg)", padding: "10px 14px",
              fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", textDecoration: "none",
              background: active ? "var(--brand-50)" : hover === item.href ? "var(--ink-03)" : "transparent",
              color: active ? "var(--brand-700)" : hover === item.href ? "var(--text-strong)" : "var(--text-muted)",
              transition: "background-color var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard)",
            }}>
            {item.icon}{item.label}
          </a>
        );
      })}
    </nav>
  );
}
