import React from "react";
import { CodeProps, tw } from "stywind";

const CodeTag = ({ children, ...props }: CodeProps) => {
  return (
    <code className={tw("cb", props.className)} {...props}>
      {children}
    </code>
  );
};

export default CodeTag;
