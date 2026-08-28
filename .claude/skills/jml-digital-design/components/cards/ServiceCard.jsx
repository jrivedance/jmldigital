import React from "react";
import { Panel } from "../core/Panel.jsx";
import { Badge } from "../core/Badge.jsx";
import { HexMedia } from "../brand/HexMedia.jsx";

/** Service tile: hex-cropped cover, title, description, stat pill. */
export function ServiceCard({ title, description, statValue, statLabel, coverImage, style, ...rest }) {
  return (
    <Panel hoverable padding="0" style={{ display: "flex", flexDirection: "column", alignItems: "center", overflow: "hidden", textAlign: "center", height: "100%", ...style }} {...rest}>
      {coverImage ? <HexMedia src={coverImage} alt={title} /> : null}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, padding: "24px" }}>
        <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-strong)" }}>{title}</h3>
        <p style={{ margin: "8px 0 0", flex: 1, fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-muted)" }}>{description}</p>
        {statValue ? (
          <Badge bordered={false} style={{ marginTop: "20px", background: "var(--brand-50)", padding: "4px 12px" }}>
            <span style={{ fontFamily: "var(--font-mono)" }}>{statValue}</span>{statLabel}
          </Badge>
        ) : null}
      </div>
    </Panel>
  );
}
