import Clipboard from "@/components/Clipboard";
import { Box } from "auera-ui";
import { Highlight, themes } from "prism-react-renderer";
import React from "react";

const CodeBlock = ({
  code,
  lg = "jsx",
}: {
  code: string;
  lg?: "bash" | "tsx" | "jsx" | "json" | "ts";
}) => {
  return (
    <Box className="w-full h-auto p-4 rounded-[5px] block-cmd border overflow-x-auto justify-between relative overflow-y-hidden">
      <Box className="w-full h-full overflow-y-auto">
        <Highlight theme={themes.vsDark} code={code} language={lg}>
          {({ tokens, getLineProps, getTokenProps }) => (
            <pre style={{ background: "transparent" }} className="font-mono">
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </Box>
      <div className="h-auto absolute text-white p-3 hover:text-black /sticky right-0 top-0">
        <Clipboard content={code} />
      </div>
    </Box>
  );
};

export default CodeBlock;
