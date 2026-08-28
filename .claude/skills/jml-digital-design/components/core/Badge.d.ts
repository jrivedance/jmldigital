import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "brand" | "brandSolid" | "neutral" | "warning" | "danger" | "success";
  /** Uppercase + wide tracking — used for package taglines like "For $1M+ listings". */
  uppercase?: boolean;
  bordered?: boolean;
  children?: React.ReactNode;
}

/** Status pill: order state, follow-up urgency, service stat, package tagline. */
export declare function Badge(props: BadgeProps): JSX.Element;
