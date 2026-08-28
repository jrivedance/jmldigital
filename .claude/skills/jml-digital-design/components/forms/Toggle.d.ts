import React from "react";

export interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  /** Accessible name when there is no visible label beside it. */
  label?: string;
}

/** On/off switch — brand blue when on, 10% black when off. */
export declare function Toggle(props: ToggleProps): JSX.Element;
