import Clipboard from "@/components/Clipboard";
import { Box, Tooltip } from "auera-ui";
import { Highlight, themes } from "prism-react-renderer";
import React, { useState } from "react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { tw } from "stywind";

type TerminalProps = {
  cmds: string[];
  script: string[];
};

const Terminal: React.FC<TerminalProps> = ({ cmds, script }) => {
  const [currentCmd, setCurrentCmd] = useState(cmds[0]);
  const index = cmds.indexOf(currentCmd);

  const code = `${currentCmd} ${script[index]}`;

  return (
    <Box fullWidth className="rounded-xl border border-neutral-800 flex-col">
      <Box
        className="px-4 py-2 bg-black rounded-t-xl border-b border-b-neutral-800"
        between
      >
        <Box className="gap-3 items-center">
          {cmds.map((cmd, index) => (
            <div
              key={index}
              onClick={() => setCurrentCmd(cmd)}
              className={tw(
                "font-mono text-[13px] cursor-pointer px-2 py-1 rounded-xl hover:bg-neutral-900 active:scale-90 transition-transform",
                currentCmd === cmd ? "text-white" : "text-neutral-500"
              )}
            >
              {cmd}
            </div>
          ))}
        </Box>

        <div>
          <Tooltip label="Copy" position="left" showPointer={false}>
            <Clipboard
              content={code}
              className="theme-light:hover:bg-neutral-800 !text-white"
            />
          </Tooltip>
        </div>
      </Box>
      <Box
        fullWidth
        className="px-4 py-4 bg-neutral-900 rounded-b-xl items-center"
      >
        {/* <SyntaxHighlighter
          language={"bash"}
          wrapLines
          wrapLongLines
          style={{
            ...a11yDark,
            hljs: {
              background: "#0000",
              color: "lightblue",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              lineHeight: "1.2rem",
              fontFamily: "monospace",
              fontSize: 13,
            },
          }}
        >
          {code}
        </SyntaxHighlighter> */}
        <Highlight theme={themes.vsDark} code={code} language="bash">
          {({ tokens, getLineProps, getTokenProps }) => (
            <pre
              style={{ background: "transparent" }}
              className="font-mono text-sm"
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} style={getTokenProps({ token }).style}>
                      {getTokenProps({ token }).children}
                    </span>
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </Box>
    </Box>
  );
};

export default Terminal;
