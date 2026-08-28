import React from "react";

/** Scattered honeycomb graphic used as a section break. */
export function HexDivider({ src = "assets/images/JMLHex4.png", maxWidth = "768px", opacity = 0.8, style, ...rest }) {
  return (
    <div aria-hidden="true" style={{ display: "flex", justifyContent: "center", padding: "0 24px", ...style }} {...rest}>
      <img src={src} alt="" style={{ width: "100%", maxWidth, height: "auto", opacity }} />
    </div>
  );
}
