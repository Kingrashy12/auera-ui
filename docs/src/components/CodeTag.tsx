import { useDocState } from "@/hooks/docs";
import React from "react";
import { CodeProps, tw } from "stywind";

const CodeTag = ({ children, ...props }: CodeProps) => {
  const { lang } = useDocState();

  const getFileExt = () => {
    const text = children?.toString() ?? "";

    if (text.includes("css")) return text;

    switch (lang.name) {
      case "TypeScript":
        return text;
      case "JavaScript":
        return text.endsWith(".ts")
          ? text.replace(".ts", ".js")
          : text.endsWith(".tsx")
            ? text.replace(".tsx", ".jsx")
            : text;
      default:
        return text;
    }
  };

  return (
    <code className={tw("cb", props.className)} {...props}>
      {getFileExt()}
    </code>
  );
};

export default CodeTag;
