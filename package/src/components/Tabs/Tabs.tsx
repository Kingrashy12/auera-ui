import React, { useMemo, useState } from "react";
import { createStyle, defineClass, merge, tw } from "stywind";
import TabsProvider from "./Provider";
import Box from "../Box/Box";
import { getDisplayName } from "@/utils/displayname";
import { useMode } from "@/hook/use";
import { TabsType } from "../../types/auera-ui";
import TabHandle from "./TabHandle";
import TabPanel from "./TabPanel";

const getStylesWithMode = (
  mode: TabsType["mode"],
  variant: TabsType["variant"],
  rounded: TabsType["rounded"]
) => {
  const sharedStyle = {
    line: "bg-transparent rounded-none p-0 border-t-none border-b",
    solid: `${rounded ? "rounded-full" : "rounded-[9px]"} border-none p-[3px]`,
  };
  const styles = {
    light: {
      line: tw(sharedStyle.line, "border-b-neutral-200"),
      solid: tw(sharedStyle.solid, "bg-gray-100"),
    },
    dark: {
      line: tw(sharedStyle.line, "border-b-neutral-700"),
      solid: tw(sharedStyle.solid, "bg-neutral-800"),
    },
  };

  return merge.multi(styles, mode as string, variant);
};

const getTabWidth = (
  variant: TabsType["variant"],
  fullWidth: TabsType["fullWidth"]
) => {
  switch (variant) {
    case "line":
      return "w-auto";
    case "solid":
      return fullWidth ? "w-auto" : "w-fit";
    default:
      return "w-auto";
  }
};

const Tabs: React.FC<TabsType> = ({
  children,
  variant = "line",
  mode,
  fullWidth,
  className,
  rounded,
  hideScrollBar,
  containerClass,
  hideBorder,
}) => {
  const { currentMode } = useMode(mode);
  const defaultStyle = defineClass(
    "max-w-full overflow-x-auto flex items-center relative gap-[1px]"
  );
  const scrollBar = defineClass(
    `scrollbar:h-1 scrollbar-thumb:cursor-pointer scrollbar-thumb:rounded-[5px]
     scrollbar-track:bg-transparent scrollbar-thumb:bg-blue-500 scrollbar-thumb:hover:bg-blue-600`
  );

  const TabList = useMemo(() => {
    return createStyle("div").classname(
      tw(
        defaultStyle,
        getStylesWithMode(currentMode, variant, rounded),
        hideBorder && "border-none",
        hideScrollBar ? "scrollbar-none" : scrollBar,
        getTabWidth(variant, fullWidth),
        className
      )
    );
  }, [
    className,
    variant,
    rounded,
    fullWidth,
    currentMode,
    hideBorder,
    hideScrollBar,
    mode,
  ]);

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabs = React.Children.toArray(children).filter(
    (child) => (child as React.ReactElement).type === TabHandle
  );

  const tabsPanel = React.Children.toArray(children).filter(
    (child) => (child as React.ReactElement).type === TabPanel
  );

  return (
    <TabsProvider
      mode={currentMode}
      tabVariant={variant}
      useFullWidth={fullWidth}
      useRounded={rounded as boolean}
    >
      <Box
        direction="column"
        className={tw("gap-3 overflow-hidden", containerClass)}
        fullWidth
      >
        <TabList>
          {tabs.map((tab, index) => (
            <TabHandle
              key={index}
              value={(tab as React.ReactElement).props.value}
              isActive={index === activeTabIndex}
              iconSize={(tab as React.ReactElement).props.iconSize}
              icon={(tab as React.ReactElement).props.icon}
              onClick={() => setActiveTabIndex(index)}
              disabled={(tab as React.ReactElement).props.disabled}
              activeColor={(tab as React.ReactElement).props.activeColor}
              activeSolidColor={
                (tab as React.ReactElement).props.activeSolidColor
              }
              inActiveColor={(tab as React.ReactElement).props.inActiveColor}
              className={(tab as React.ReactElement).props.className}
              style={(tab as React.ReactElement).props.style}
            >
              {(tab as React.ReactElement).props.children}
            </TabHandle>
          ))}
        </TabList>
        {tabsPanel[activeTabIndex]}
      </Box>
    </TabsProvider>
  );
};

export default Tabs;
Tabs.displayName = getDisplayName("Tabs");
