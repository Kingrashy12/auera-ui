import { Box, IconButton, openDrawer } from "auera-ui";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { createStyle } from "stywind";
import Breadcrumb from "../lib/Breadcrumb";
import { HiArrowUp } from "react-icons/hi";
import { useScrollTop } from "@/hooks/use";

const ToolBar = () => {
  const Bar = createStyle("div").classname(
    "hidden max-[1166px]:flex bg-sidebar border-b border-b-sidebar w-full h-auto px-4 py-3 justify-between items-center"
  );
  const { scrollToTop } = useScrollTop();

  return (
    <Bar>
      <Box className="gap-4 items-center w-full">
        <IconButton
          onClick={() => openDrawer("tool-bar")}
          variant="ghost"
          radius="xl"
        >
          <FiMenu size={19} />
        </IconButton>

        <Box fullWidth className=" overflow-x-auto">
          <Breadcrumb
            separator="splash"
            disableHref={[
              "/docs",
              "/docs/getting-started",
              "/docs/customization",
              "/docs/components",
            ]}
            exclude="Docs"
            replacePath={[
              { for: "Components", path: "/docs/components/overview" },
            ]}
          />
        </Box>
      </Box>
      <IconButton variant="ghost" radius="xl" onClick={scrollToTop}>
        <HiArrowUp />
      </IconButton>
    </Bar>
  );
};

export default ToolBar;
