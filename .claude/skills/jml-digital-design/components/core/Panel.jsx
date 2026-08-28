import React from "react";

/** Frosted "liquid glass" surface — the single card treatment used everywhere. */
export function Panel({ hoverable = false, padding = "24px", tinted = false, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        borderRadius: "var(--radius-xl)",
        border: "1px solid " + (tinted ? "var(--border-accent)" : hoverable && hover ? "var(--border-default)" : "var(--border-hairline)"),
        background: tinted ? "rgba(242,248,253,0.6)" : hoverable && hover ? "var(--surface-card-hover)" : "var(--surface-card)",
        backdropFilter: "blur(var(--blur-panel))",
        boxShadow: hoverable && hover ? "var(--shadow-glow-brand)" : "var(--shadow-glass)",
        transition: "all var(--duration-slow) var(--ease-standard)",
        padding,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
