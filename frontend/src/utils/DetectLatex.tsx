import React from "react";
import { InlineMath } from "react-katex";

export const detectLatex = (text: string) => {
  const parts = text.split(/(\\\(.*?\\\))/g);

  return parts.map((part, index) =>
    part.startsWith("\\(") && part.endsWith("\\)") ? (
      <InlineMath key={index}>{part.slice(2, -2)}</InlineMath>
    ) : (
      part
    )
  );
};
