import React from "react";

/** Underlined top tabs used across admin detail pages. */
export function Tabs({ tabs = [], activeId, onChange, style, ...rest }) {
  const [internal, setInternal] = React.useState(activeId || (tabs.find((t) => !t.comingSoon) || tabs[0] || {}).id);
  const active = activeId !== undefined ? activeId : internal;
  const select = (id) => { setInternal(id); if (onChange) onChange(id); };
  const current = tabs.find((t) => t.id === active);
  return (
    <div style={style} {...rest}>
      <div style={{ display: "flex", gap: "4px", overflowX: "auto", borderBottom: "1px solid var(--border-hairline)" }}>
        {tabs.map((tab) => tab.comingSoon ? (
          <span key={tab.id} style={{ display: "flex", flexShrink: 0, alignItems: "center", gap: "8px", padding: "12px 16px", borderBottom: "2px solid transparent", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: "var(--weight-medium)", color: "var(--text-faint)", cursor: "not-allowed" }}>
            {tab.icon}{tab.label}
            <span style={{ borderRadius: "var(--radius-pill)", border: "1px solid var(--border-default)", padding: "1px 6px", fontSize: "var(--text-3xs)", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)" }}>Soon</span>
          </span>
        ) : (
          <button key={tab.id} onClick={() => select(tab.id)} style={{
            display: "flex", flexShrink: 0, alignItems: "center", gap: "8px", padding: "12px 16px",
            background: "none", cursor: "pointer",
            border: "none", borderBottom: "2px solid " + (active === tab.id ? "var(--brand-600)" : "transparent"),
            fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: "var(--weight-medium)",
            color: active === tab.id ? "var(--text-strong)" : "var(--ink-50)",
            transition: "color var(--duration-base) var(--ease-standard)",
          }}>{tab.icon}{tab.label}</button>
        ))}
      </div>
      <div style={{ marginTop: "32px" }}>{current ? current.panel : null}</div>
    </div>
  );
}
