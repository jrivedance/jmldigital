import React from "react";

export interface SidebarNavItem {
  label: string;
  href: string;
  /** 16px lucide glyph. */
  icon?: React.ReactNode;
}

export interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: SidebarNavItem[];
  activeHref?: string;
  /** Intercepts clicks for in-page prototypes. */
  onNavigate?: (href: string) => void;
}

/** Admin sidebar nav — brand-50 pill on the active route. */
export declare function SidebarNav(props: SidebarNavProps): JSX.Element;
