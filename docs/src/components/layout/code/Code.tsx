import React, { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

type CodeProps = {
  code: string;
  lang: string;
};

const Code: React.FC<CodeProps> = ({ code, lang = "tsx" }) => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const highlightCode = async () => {
      const highlighter = await codeToHtml(code, {
        theme: "dark-plus",
        lang,
      });
      setHtml(highlighter);
    };

    highlightCode();
  }, [code, lang]);

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} className="!text-sm" />
  );
};

export default Code;
