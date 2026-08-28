import React from "react";

export interface PriceRowProps extends React.LiHTMLAttributes<HTMLLIElement> {
  name: string;
  /** Parenthetical scope: "6-8 photos", "30 sec". */
  detail?: string;
  price: number;
  /** e.g. "/photo". */
  priceSuffix?: string;
}

/** À la carte line item. Render inside a <ul> in a Panel. */
export declare function PriceRow(props: PriceRowProps): JSX.Element;
