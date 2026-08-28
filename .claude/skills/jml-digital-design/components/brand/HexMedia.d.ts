import React from "react";

export interface HexMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  /** Any CSS width. The 7:6.13 aspect ratio is fixed. */
  width?: string;
  objectPosition?: string;
  /** Rendered instead of an <img> when `src` is omitted. */
  children?: React.ReactNode;
}

/**
 * Hexagon-cropped photo.
 * @startingPoint section="Brand" subtitle="Signature hexagon photo crop" viewport="700x300"
 */
export declare function HexMedia(props: HexMediaProps): JSX.Element;
