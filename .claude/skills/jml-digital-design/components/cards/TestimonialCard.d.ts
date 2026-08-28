import React from "react";

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  /** The agent's words, verbatim. */
  quote: string;
  /** Falls back to an initials avatar. */
  photo?: string | null;
}

/** Agent review card — always five stars; the product only publishes five-star reviews. */
export declare function TestimonialCard(props: TestimonialCardProps): JSX.Element;
