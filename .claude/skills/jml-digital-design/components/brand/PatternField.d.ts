import React from "react";

export interface PatternFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** matrix = hex-packed dot halftone (default); circuit = trace lines; hexMesh = outlined hexagons. */
  pattern?: "matrix" | "matrixFine" | "matrixBrand" | "hexMesh" | "circuit" | "circuitBrand";
  /** Mask applied so the texture dissolves instead of tiling flat. */
  fade?: "none" | "down" | "corner";
  opacity?: number;
  children?: React.ReactNode;
}

/**
 * Wraps content in a faded accent texture.
 * @startingPoint section="Brand" subtitle="Matrix, circuit and hex-mesh accent textures" viewport="700x260"
 */
export declare function PatternField(props: PatternFieldProps): JSX.Element;
