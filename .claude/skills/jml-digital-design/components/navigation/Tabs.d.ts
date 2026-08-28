import React from "react";

export interface TabItem {
  id: string;
  label: string;
  /** Pre-rendered 16px lucide glyph. */
  icon?: React.ReactNode;
  panel?: React.ReactNode;
  /** Renders disabled with a "Soon" badge. */
  comingSoon?: boolean;
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: TabItem[];
  /** Controlled mode. Omit to let the component manage selection. */
  activeId?: string;
  onChange?: (id: string) => void;
}

/** Underlined top tabs — the shell for every admin detail page. */
export declare function Tabs(props: TabsProps): JSX.Element;
