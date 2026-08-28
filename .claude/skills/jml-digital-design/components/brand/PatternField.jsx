import React from "react";

const patterns = {
  matrix: { image: "var(--pattern-matrix)", size: "var(--pattern-matrix-size)", position: "var(--pattern-matrix-position)" },
  matrixFine: { image: "var(--pattern-matrix-fine)", size: "var(--pattern-matrix-fine-size)", position: "var(--pattern-matrix-fine-position)" },
  matrixBrand: { image: "var(--pattern-matrix-brand)", size: "var(--pattern-matrix-brand-size)", position: "var(--pattern-matrix-brand-position)" },
  hexMesh: { image: "var(--pattern-hex-mesh)" },
  circuit: { image: "var(--pattern-circuit)" },
  circuitBrand: { image: "var(--pattern-circuit-brand)" },
};

const fades = {
  none: null,
  down: "var(--pattern-fade-down)",
  corner: "var(--pattern-fade-corner)",
};

/** Decorative texture layer — the camera-wrap accents, kept quiet. */
export function PatternField({ pattern = "matrix", fade = "corner", opacity = 1, style, children, ...rest }) {
  const mask = fades[fade];
  const p = patterns[pattern] || patterns.matrix;
  return (
    <div style={{ position: "relative", ...style }} {...rest}>
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity,
        backgroundImage: p.image, backgroundSize: p.size, backgroundPosition: p.position,
        WebkitMaskImage: mask || undefined, maskImage: mask || undefined,
      }} />
      <div style={{ position: "relative" }}>{children}</div>
    </div>
  );
}
