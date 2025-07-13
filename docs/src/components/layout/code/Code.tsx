import { Box, Skeleton } from "auera-ui";
import React, { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

type CodeProps = {
  code: string;
  lang: string;
};

const Code: React.FC<CodeProps> = ({ code, lang = "tsx" }) => {
  const [html, setHtml] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const highlightCode = async () => {
      const highlighter = await codeToHtml(code, {
        theme: "dark-plus",
        lang,
      });
      setHtml(highlighter);
      setIsLoading(false);
    };

    highlightCode();
  }, [code, lang]);

  return (
    <>
      {isLoading ? (
        <Box className="flex-col gap-6" fullWidth>
          <Skeleton width={`100%`} height={15} />
          <Skeleton width={`90%`} height={15} />
          <Skeleton width={`80%`} height={15} />
          <Skeleton width={`70%`} height={15} />
          <Skeleton width={`60%`} height={15} />
          <Skeleton width={`50%`} height={15} />
          <Skeleton width={`40%`} height={15} />
          <Skeleton width={`30%`} height={15} />
        </Box>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: html }} className="text-sm!" />
      )}
    </>
  );
};

export default Code;
