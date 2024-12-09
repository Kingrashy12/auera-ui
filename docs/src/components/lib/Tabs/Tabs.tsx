import React, { useState } from "react";
import { createStyle, defineClass, merge, tw } from "stywind";
import TabsProvider from "./Provider";
import TabHandle from "./TabHandle";
import TabPanel from "./TabPanel";
import { Box } from "auera-ui";

export type TabsType = {
  children?: React.ReactNode;
  variant?: "line" | "solid";
  mode?: "light" | "dark";
  fullWidth?: boolean;
  className?: string;
  rounded?: boolean;
  hideScrollBar?: boolean;
  containerClass?: string;
};
const getStylesWithMode = (
  mode: TabsType["mode"],
  variant: TabsType["variant"],
  rounded: TabsType["rounded"]
) => {
  const sharedStyle = {
    line: "bg-transparent rounded-none p-0 border-t-none border-b",
    solid: `${rounded ? "rounded-full" : "rounded-md"} border-none p-[5px]`,
  };
  const styles = {
    light: {
      line: tw(sharedStyle.line, defineClass("border-b-neutral-200")),
      solid: tw(sharedStyle.solid, defineClass("bg-gray-100")),
    },
    dark: {
      line: tw(sharedStyle.line, defineClass("border-b-neutral-700")),
      solid: tw(sharedStyle.solid, defineClass("bg-neutral-800")),
    },
  };

  return merge.multi(styles, mode as string, variant);
};
type TabsChilds = {
  Handle: typeof TabHandle;
  Panel: typeof TabPanel;
};

const Tabs: React.FC<TabsType> & TabsChilds = ({
  children,
  variant = "line",
  mode = "light",
  fullWidth,
  className,
  rounded,
  hideScrollBar,
  containerClass,
}) => {
  //TODO: import global mode
  const defaultStyle = defineClass(
    "max-w-full overflow-x-auto flex items-center relative gap-[1px]"
  );
  const scrollBar = defineClass(
    "[&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:cursor-pointer [&::-webkit-scrollbar-thumb]:rounded-[5px]"
  );

  const TabList = createStyle("div").classname(
    tw(
      className,
      defaultStyle,
      getStylesWithMode(mode, variant, rounded),
      hideScrollBar
        ? "[&::-webkit-scrollbar]:appearance-none [&::-webkit-scrollbar]:hidden"
        : scrollBar,
      fullWidth && variant === "solid" ? "w-auto" : "w-fit",
      variant === "line" ? "w-auto" : ""
    )
  );
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabs = React.Children.toArray(children).filter(
    (child) => (child as React.ReactElement).type === TabHandle
  );

  const tabsPanel = React.Children.toArray(children).filter(
    (child) => (child as React.ReactElement).type === TabPanel
  );

  return (
    <TabsProvider
      mode={mode}
      tabVariant={variant}
      useFullWidth={fullWidth}
      useRounded={rounded as boolean}
    >
      <Box direction="column" className={tw(containerClass, "gap-3")}>
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

Tabs.Handle = TabHandle;
Tabs.Panel = TabPanel;

export default Tabs;
// displayname
