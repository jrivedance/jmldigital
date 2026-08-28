import React from "react";

const sources = {
  wordmark: "assets/images/JMLOrderLogo.png",
  wordmarkWhite: "assets/images/JMLOrderLogoWht.png",
  signature: "assets/images/JMLDigitalLogoSigSm.png",
  mark: "assets/logo/JML Digital Logo.png",
};

/** The JML Digital logo. Never redraw it — always one of the shipped files. */
export function Logo({ variant = "wordmark", height = "28px", basePath = "", style, ...rest }) {
  return <img src={basePath + (sources[variant] || sources.wordmark)} alt="JML Digital" style={{ height, width: "auto", display: "block", ...style }} {...rest} />;
}
