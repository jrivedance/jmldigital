import React from "react";

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** wordmark = dark lockup (default); wordmarkWhite = knockout on photos/dark; signature = script signature lockup; mark = the standalone JML monogram. */
  variant?: "wordmark" | "wordmarkWhite" | "signature" | "mark";
  height?: string;
  /** Prefix if the page is not at the project root, e.g. "../../". */
  basePath?: string;
}

/** The JML Digital logo, from the shipped raster files. */
export declare function Logo(props: LogoProps): JSX.Element;
