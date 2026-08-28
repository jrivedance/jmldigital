import React from "react";

/** Small blue hexagon sticker pinned to photos for stat callouts. */
export function HexBadge({ value, label, size = "96px", style, ...rest }) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      width: size, aspectRatio: "var(--hex-ratio)", clipPath: "var(--hex-clip)",
      background: "var(--gradient-hex-badge)", color: "#fff", textAlign: "center",
      boxShadow: "var(--shadow-glow-brand)", ...style,
    }} {...rest}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-lg)", fontWeight: "var(--weight-bold)", lineHeight: 1 }}>{value}</span>
      {label ? <span style={{ marginTop: "4px", padding: "0 10px", fontFamily: "var(--font-body)", fontSize: "var(--text-3xs)", lineHeight: 1.2, opacity: 0.85 }}>{label}</span> : null}
    </div>
  );
}
