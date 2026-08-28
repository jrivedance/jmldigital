import React from "react";

export interface SectionLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

/** Uppercase eyebrow pill that opens every section ("What We Offer", "Dashboard"). */
export declare function SectionLabel(props: SectionLabelProps): JSX.Element;
