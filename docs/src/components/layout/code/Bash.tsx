import Clipboard from "@/components/Clipboard";
import { Box } from "auera-ui";
import React from "react";
import Code from "./Code";

const Bash = ({ code }: { code: string }) => {
  return (
    <Box
      direction="column"
      className="w-full h-auto max-h-[480px] rounded-[5px] block-cmd border relative overflow-y-hidden"
    >
      <Box className="w-10/12 max-[550px]:w-[80%] h-full p-4 overflow-x-auto">
        <Code code={code} lang="bash" />
      </Box>
      <div className="h-auto absolute text-white p-3 bg-[var(--block)] right-0 -top-[2px]">
        <Clipboard
          content={code}
          className="theme-light:hover:bg-neutral-800"
        />
      </div>
    </Box>
  );
};

export default Bash;
