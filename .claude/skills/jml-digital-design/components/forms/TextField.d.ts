import React from "react";

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** Parenthetical after the label, e.g. "optional". */
  hint?: string;
  multiline?: boolean;
  rows?: number;
  error?: string;
}

/**
 * Text input / textarea with the uppercase field label.
 * @startingPoint section="Forms" subtitle="Labelled input, textarea, error state" viewport="700x260"
 */
export declare function TextField(props: TextFieldProps): JSX.Element;
