import { Box, Drawer, IconButton } from "auera-ui";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { createStyle } from "stywind";
import Breadcrumb from "../lib/Breadcrumb";
import { HiArrowUp } from "react-icons/hi";
import { useScrollTop } from "@/hooks/use";

const ToolBar = () => {
  const Bar = createStyle("div").classname(
    "hidden max-lg:flex bg-sidebar border-b border-b-sidebar w-full h-auto px-4 py-3 justify-between items-center"
  );
  const { scrollToTop } = useScrollTop();

  return (
    <Bar>
      <Box className="gap-4 items-center">
        <Drawer.Trigger value="tool-bar">
          <IconButton variants="ghost">
            <FiMenu size={19} />
          </IconButton>
        </Drawer.Trigger>
        <Breadcrumb
          separator="splash"
          disableHref={["/docs", "/docs/getting-started"]}
        />
      </Box>
      <IconButton variants="ghost" onClick={scrollToTop}>
        <HiArrowUp />
      </IconButton>
    </Bar>
  );
};

export default ToolBar;
