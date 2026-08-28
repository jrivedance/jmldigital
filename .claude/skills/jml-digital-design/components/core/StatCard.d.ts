import React from "react";

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  /** Pre-formatted — "$4,280", "12". */
  value: string;
  /** 16–18px lucide glyph. */
  icon?: React.ReactNode;
}

/** Dashboard metric tile: soft-blue icon chip, uppercase label, display-face figure. */
export declare function StatCard(props: StatCardProps): JSX.Element;
