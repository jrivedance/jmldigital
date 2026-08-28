import React from "react";

/** One line in an à la carte price list. */
export function PriceRow({ name, detail, price, priceSuffix, style, ...rest }) {
  return (
    <li style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px", padding: "12px 0", borderTop: "1px solid var(--border-hairline)", listStyle: "none", ...style }} {...rest}>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--ink-70)" }}>
        {name}{detail ? <span style={{ color: "var(--text-subtle)" }}> ({detail})</span> : null}
      </span>
      <span style={{ whiteSpace: "nowrap", fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)", color: "var(--brand-700)" }}>
        ${price}{priceSuffix ? <span style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-regular)", color: "var(--text-subtle)" }}>{priceSuffix}</span> : null}
      </span>
    </li>
  );
}
