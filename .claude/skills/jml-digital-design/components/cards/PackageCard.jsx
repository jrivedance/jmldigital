import React from "react";
import { Panel } from "../core/Panel.jsx";
import { Badge } from "../core/Badge.jsx";
import { Button } from "../core/Button.jsx";

/** Pricing tier card with 8:3 banner, price, feature checklist and CTA. */
export function PackageCard({ name, price, tagline, features = [], banner, featured = false, ctaLabel = "Book This Package", onSelect, style, ...rest }) {
  return (
    <Panel hoverable tinted={featured} padding="0" style={{ display: "flex", flexDirection: "column", overflow: "hidden", height: "100%", ...style }} {...rest}>
      {banner ? <img src={banner} alt={name + " package"} style={{ width: "100%", aspectRatio: "8/3", objectFit: "cover", display: "block" }} /> : null}
      <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "24px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
          <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-strong)" }}>{name}</h3>
          <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: "var(--text-2xl)", fontWeight: "var(--weight-bold)", color: "var(--brand-700)" }}>${price.toLocaleString()}</p>
        </div>
        {tagline ? <Badge tone="brandSolid" uppercase bordered={false} style={{ marginTop: "8px", alignSelf: "flex-start", fontSize: "var(--text-2xs)" }}>{tagline}</Badge> : null}
        <ul style={{ margin: "20px 0 0", padding: 0, listStyle: "none", flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
          {features.map((f) => (
            <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--ink-65)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand-600)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "2px", flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <Button onClick={onSelect} style={{ marginTop: "24px", width: "100%" }}>{ctaLabel}</Button>
      </div>
    </Panel>
  );
}
