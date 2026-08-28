import React from "react";

/** Loading placeholder — pulsing 6% black block. */
export function Skeleton({ width = "100%", height = "16px", radius = "var(--radius-md)", style, ...rest }) {
  return (
    <>
      <style>{"@keyframes jml-pulse{0%,100%{opacity:1}50%{opacity:.5}}"}</style>
      <div aria-hidden="true" style={{ width, height, borderRadius: radius, background: "var(--ink-06)", animation: "jml-pulse 2s cubic-bezier(0.4,0,0.6,1) infinite", ...style }} {...rest} />
    </>
  );
}
