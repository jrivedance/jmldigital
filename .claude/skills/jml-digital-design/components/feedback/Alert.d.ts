import React from "react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "danger" | "success" | "warning" | "info";
  /** 16px lucide glyph — AlertCircle for danger, CheckCircle2 for success. */
  icon?: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
}

/** Inline message inside forms and admin panels. */
export declare function Alert(props: AlertProps): JSX.Element;
