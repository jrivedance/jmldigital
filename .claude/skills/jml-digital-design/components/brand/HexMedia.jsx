import React from "react";

/** Photo cropped to the JML hexagon — the brand's signature image shape. */
export function HexMedia({ src, alt = "", width = "100%", objectPosition = "center", style, children, ...rest }) {
  return (
    <div style={{ position: "relative", width, aspectRatio: "var(--hex-ratio)", clipPath: "var(--hex-clip)", overflow: "hidden", background: "var(--ink-05)", ...style }} {...rest}>
      {src ? <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition, display: "block" }} /> : children}
    </div>
  );
}
