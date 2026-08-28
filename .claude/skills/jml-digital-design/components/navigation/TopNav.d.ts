import React from "react";

export interface TopNavLink { label: string; href: string; }

export interface TopNavProps extends React.HTMLAttributes<HTMLElement> {
  /** Usually <Logo height="28px" />. */
  logo?: React.ReactNode;
  links?: TopNavLink[];
  activeHref?: string;
  /** Right-hand slot: the Login link and the "Book a Shoot" Button. */
  actions?: React.ReactNode;
}

/** Floating glass navigation bar, fixed 16px from the top of the marketing site. */
export declare function TopNav(props: TopNavProps): JSX.Element;
