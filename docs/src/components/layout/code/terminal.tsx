import Clipboard from "@/components/Clipboard";
import { Box, Tooltip } from "auera-ui";
import React, { useState } from "react";
import { tw } from "stywind";
import Code from "./Code";

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
        <Code code={code} lang="bash" />
      </Box>
    </Box>
  );
};

export default Terminal;
