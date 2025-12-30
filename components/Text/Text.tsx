import React from "react";

interface TextProps {
  text: string;
  className?: string;
}

function Text({ text, className }: TextProps) {
  return <h1 className={`${className} text-5xl font-medium tracking-wide`}>{text}</h1>;
}

export default React.memo(Text);
