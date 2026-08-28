import React from "react";

export interface PackageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  /** Whole dollars — formatted with thousands separators by the card. */
  price: number;
  /** Short qualifier, e.g. "For $1M+ listings". */
  tagline?: string;
  features?: string[];
  /** 8:3 banner image. */
  banner?: string;
  /** Brand-tinted treatment for the Luxury / Elevated Luxury tiers. */
  featured?: boolean;
  ctaLabel?: string;
  onSelect?: () => void;
}

/**
 * A pricing tier from the /pricing page.
 * @startingPoint section="Cards" subtitle="Pricing tier with banner, price and checklist" viewport="700x520"
 */
export declare function PackageCard(props: PackageCardProps): JSX.Element;
