import React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** primary = solid brand-blue CTA; secondary = glass outline; ghost = text; solid = black. */
  variant?: "primary" | "secondary" | "ghost" | "solid";
  size?: "sm" | "md" | "lg";
  /** Renders an <a> when set. */
  href?: string;
  as?: "button" | "a" | "span";
  disabled?: boolean;
  /** Pre-rendered icon element, usually a 16px lucide glyph. */
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  children?: React.ReactNode;
}

/**
 * The JML Digital call-to-action button.
 * @startingPoint section="Core" subtitle="Solid blue CTA, glass secondary, ghost and solid" viewport="700x150"
 */
export declare function Button(props: ButtonProps): JSX.Element;
