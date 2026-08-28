import React from "react";

export interface HexDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Path to the honeycomb asset — JMLHex1–4.png differ in density. */
  src?: string;
  maxWidth?: string;
  opacity?: number;
}

/** Decorative honeycomb spacer between major sections. */
export declare function HexDivider(props: HexDividerProps): JSX.Element;
