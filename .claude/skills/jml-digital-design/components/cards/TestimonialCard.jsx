import React from "react";
import { Panel } from "../core/Panel.jsx";

function Stars() {
  return (
    <div style={{ display: "flex", gap: "2px", marginTop: "2px" }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--star)" stroke="var(--star)" strokeWidth="1.5" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
      ))}
    </div>
  );
}

/** Agent testimonial with avatar, five stars and the oversized quote glyph. */
export function TestimonialCard({ name, quote, photo, style, ...rest }) {
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
  return (
    <Panel hoverable style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%", ...style }} {...rest}>
      <span aria-hidden="true" style={{ position: "absolute", right: "20px", top: "12px", pointerEvents: "none", fontFamily: "var(--font-display)", fontSize: "60px", lineHeight: 1, color: "var(--brand-100)" }}>&rdquo;</span>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {photo
          ? <img src={photo} alt={name} style={{ height: "56px", width: "56px", flexShrink: 0, borderRadius: "var(--radius-pill)", objectFit: "cover" }} />
          : <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "56px", width: "56px", flexShrink: 0, borderRadius: "var(--radius-pill)", background: "var(--gradient-brand-soft)", fontFamily: "var(--font-display)", fontSize: "var(--text-sm)", color: "var(--brand-700)" }}>{initials}</div>}
        <div>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)", color: "var(--text-strong)" }}>{name}</p>
          <Stars />
        </div>
      </div>
      <p style={{ position: "relative", margin: "20px 0 0", flex: 1, fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--ink-65)" }}>{quote}</p>
    </Panel>
  );
}
