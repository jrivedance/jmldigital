import React from "react";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  radius?: string;
}

/** Pulsing loading block. Compose several to shape a page skeleton. */
export declare function Skeleton(props: SkeletonProps): JSX.Element;
