import React from "react";

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Adds the lift: border darkens, background goes opaque, brand glow appears. */
  hoverable?: boolean;
  /** CSS padding shorthand. Use "0" when the panel wraps full-bleed media. */
  padding?: string;
  /** Brand-tinted variant used for the featured pricing tier. */
  tinted?: boolean;
  children?: React.ReactNode;
}

/**
 * Frosted glass card — the only card treatment in the system.
 * @startingPoint section="Core" subtitle="Frosted glass card, default and hoverable" viewport="700x220"
 */
export declare function Panel(props: PanelProps): JSX.Element;
