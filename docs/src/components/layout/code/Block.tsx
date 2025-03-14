import Clipboard from "@/components/Clipboard";
import { useDocState } from "@/hooks/docs";
import { Box, Icon, Tooltip } from "auera-ui";
import React from "react";
import { BiLogoTailwindCss } from "react-icons/bi";
import { tw } from "stywind";
import Code from "./Code";

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
  const { lang } = useDocState();

  const getIcon = () => {
    if (lg === "css") return { icon: BiLogoTailwindCss, color: "blue" };
    else return lang;
  };

  const getFileExt = () => {
    if (lg === "css") return fileName;
    switch (lang.name) {
      case "TypeScript":
        return fileName;
      case "JavaScript":
        if (fileName.endsWith(".ts")) return fileName.replace(".ts", ".js");
        else if (fileName.endsWith(".tsx"))
          return fileName.replace(".tsx", ".jsx");
      default:
        return "";
    }
  };

  // const lgIcon = {
  //   tsx: { icon: BiLogoTypescript, color: "blue" },
  //   ts: { icon: BiLogoTypescript, color: "blue" },
  //   jsx: { icon: RiJavascriptFill, color: "yellow" },
  //   css: { icon: BiLogoTailwindCss, color: "blue" },
  //   bash: { icon: SiGnubash, color: "green" },
  // };

  const icon = getIcon();
  return (
    <Box
      direction="column"
      className="w-full h-auto max-h-[480px] rounded-xl block-cmd border relative overflow-y-hidden"
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
        <p className="font-mono text-[#aaa7b2] text-xs">{getFileExt()}</p>
      </Box>
      <Box className="w-full h-full overflow-y-auto p-4 max-w-full scrollbar:h-1">
        <Code code={code} lang={lg} />
      </Box>
      <div className="h-auto absolute text-white p-3 right-0 -top-[2px]">
        <Tooltip label="Copy" position="left" showPointer={false}>
          <Clipboard
            content={code}
            className="theme-light:hover:bg-neutral-800 !text-white"
          />
        </Tooltip>
      </div>
    </Box>
  );
};

export default CodeBlock;
