import Clipboard from "@/components/Clipboard";
import { Box } from "auera-ui";
import { Highlight, themes } from "prism-react-renderer";
import React from "react";

const Bash = ({ code }: { code: string }) => {
  return (
    <Box
      direction="column"
      className="w-full h-auto max-h-[480px] rounded-[5px] block-cmd border relative overflow-y-hidden"
    >
      <Box className="w-10/12 max-[550px]:w-[80%] h-full p-4 overflow-x-auto">
        <Highlight theme={themes.vsDark} code={code} language="bash">
          {({ tokens, getLineProps, getTokenProps }) => (
            <pre
              style={{ background: "transparent" }}
              className="font-mono text-sm"
            >
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
      <div className="h-auto absolute text-white p-3 hover:text-black bg-[var(--block)] right-0 -top-[2px]">
        <Clipboard content={code} />
      </div>
    </Box>
  );
};

export default Bash;
