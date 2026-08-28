import React from "react";

export interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  /** Figure only — "30%". Rendered in the mono face. */
  statValue?: string;
  /** Continues the sentence: "increase in buyer interest". */
  statLabel?: string;
  coverImage?: string;
}

/**
 * One of the four services: Photography, Video, Drone / Aerial, 3D Tours & Floor Plans.
 * @startingPoint section="Cards" subtitle="Service tile with hex cover and stat pill" viewport="700x400"
 */
export declare function ServiceCard(props: ServiceCardProps): JSX.Element;
