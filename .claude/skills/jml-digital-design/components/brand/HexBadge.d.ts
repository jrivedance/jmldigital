import React from "react";

export interface HexBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The figure — "403%", "73%". Rendered in the mono face. */
  value: string;
  label?: string;
  /** CSS width; 80px on mobile, 96px desktop in the product. */
  size?: string;
}

/** Blue hexagon sticker for a stat, pinned to the corner of a photo. */
export declare function HexBadge(props: HexBadgeProps): JSX.Element;
