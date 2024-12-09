import Clipboard from "@/components/Clipboard";
import { Box, Icon } from "auera-ui";
import { Highlight, themes } from "prism-react-renderer";
import React from "react";
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { SiGnubash } from "react-icons/si";
import { tw } from "stywind";

const CodeBlock = ({
  code,
  lg = "jsx",
  showHeader = true,
  fileName,
}: {
  code: string;
  lg?: "bash" | "tsx" | "jsx" | "ts" | "css";
  showHeader?: boolean;
  fileName: string;
}) => {
  const lgIcon = {
    tsx: { icon: BiLogoTypescript, color: "blue" },
    ts: { icon: BiLogoTypescript, color: "blue" },
    jsx: { icon: RiJavascriptFill, color: "yellow" },
    css: { icon: BiLogoTailwindCss, color: "blue" },
    bash: { icon: SiGnubash, color: "green" },
  };
  const icon = lgIcon[lg];
  return (
    <Box
      direction="column"
      className="w-full h-auto max-h-[480px] rounded-[5px] block-cmd border relative overflow-y-hidden"
    >
      <Box
        fullWidth
        className={tw(
          showHeader
            ? "items-center gap-2 border-b p-4 w-full border-neutral-800"
            : "hidden"
        )}
      >
        <Icon icon={icon.icon} color={icon.color} size={19} />
        <p className="font-mono text-[#aaa7b2] text-xs">{fileName}</p>
      </Box>
      <Box className="w-full h-full overflow-y-auto p-4">
        <Highlight theme={themes.vsDark} code={code} language={lg}>
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
      <div className="h-auto absolute text-white p-3 hover:text-black /sticky right-0 -top-[2px]">
        <Clipboard content={code} />
      </div>
    </Box>
  );
};

export default CodeBlock;
