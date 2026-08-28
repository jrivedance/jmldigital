import React from "react";

export interface FilterChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children?: React.ReactNode;
}

/** Gallery category filter and time-slot picker — solid brand blue when active, glass outline otherwise. */
export declare function FilterChip(props: FilterChipProps): JSX.Element;
