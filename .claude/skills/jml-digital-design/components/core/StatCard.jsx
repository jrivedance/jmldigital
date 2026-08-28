import React from "react";
import { Panel } from "./Panel.jsx";

/** Icon + label + figure tile, used across the admin dashboard. */
export function StatCard({ label, value, icon, style, ...rest }) {
  return (
    <Panel padding="20px" style={style} {...rest}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {icon ? (
          <span style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, height: "40px", width: "40px", borderRadius: "var(--radius-lg)",
            background: "var(--gradient-brand-soft)", color: "var(--brand-700)",
          }}>{icon}</span>
        ) : null}
        <div>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", color: "var(--text-subtle)" }}>{label}</p>
          <p style={{ margin: "2px 0 0", fontFamily: "var(--font-display)", fontSize: "var(--text-2xl)", color: "var(--text-strong)" }}>{value}</p>
        </div>
      </div>
    </Panel>
  );
}
