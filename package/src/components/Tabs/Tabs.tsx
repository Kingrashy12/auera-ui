import React, { useMemo, useState } from "react";
import { createStyle, defineClass, merge, tw } from "stywind";
import TabsProvider from "./Provider";
import Box from "../Box/Box";
import { getDisplayName } from "@/utils/displayname";
import { useMode } from "@/hook/use";
import { TabHandleProps, TabsProps } from "../../types/auera-ui";
import TabHandle from "./TabHandle";
import TabPanel from "./TabPanel";
import { ModeType } from "@/types/auera-system";
import { useTabsContainerRules, useTabsRules } from "@/hook/useStyleRules";

const getStylesWithMode = (
  mode: ModeType,
  variant: TabsProps<{}>["variant"],
  rounded: TabsProps<{}>["rounded"]
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
  variant: TabsProps<{}>["variant"],
  fullWidth: TabsProps<{}>["fullWidth"]
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

const Tabs = <T,>({
  children,
  variant = "line",
  mode,
  fullWidth,
  className,
  rounded,
  hideScrollBar,
  containerClass,
  hideBorder,
  panel,
  id,
}: TabsProps<T>) => {
  const { currentMode } = useMode(mode);

  const { appliedContainerClassName } = useTabsContainerRules(
    id!,
    containerClass
  );
  const { appliedClassName, appliedMode, appliedRounded, appliedVariant } =
    useTabsRules(id!, className, variant, mode!);

  const scrollBar = defineClass(
    `scrollbar:h-1 scrollbar-thumb:cursor-pointer scrollbar-thumb:rounded-[5px]
     scrollbar-track:bg-transparent scrollbar-thumb:bg-blue-500 scrollbar-thumb:hover:bg-blue-600`
  );

  const _variant = appliedVariant?.value || variant;
  const _mode = appliedMode?.value || currentMode;
  const _rounded = appliedRounded?.value || rounded;

  const TabList = useMemo(() => {
    return createStyle("div").classname(
      tw(
        "max-w-full overflow-x-auto flex items-center relative gap-[1px]",
        getStylesWithMode(_mode, _variant, _rounded),
        hideBorder && "border-none",
        hideScrollBar ? "scrollbar-none" : scrollBar,
        getTabWidth(_variant, fullWidth),
        appliedClassName?.value,
        className
      )
    );
  }, [
    className,
    _variant,
    _rounded,
    fullWidth,
    currentMode,
    hideBorder,
    hideScrollBar,
    appliedClassName?.value,
    _mode,
  ]);

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabs = React.Children.toArray(children).filter(
    (child) => (child as React.ReactElement).type === TabHandle
  );

  const Panel = panel ?? TabPanel;

  const tabsPanel = React.Children.toArray(children).filter(
    (child) => (child as React.ReactElement).type === Panel
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
        className={tw(
          "gap-3 overflow-hidden",
          appliedContainerClassName?.value,
          containerClass
        )}
        fullWidth
      >
        <TabList>
          {tabs.map((tab, index) => {
            const typedElement = tab as React.ReactElement<TabHandleProps>;
            const handleClick = () => {
              setActiveTabIndex(index);
              if (typedElement.props.onClick) {
                typedElement.props.onClick();
              }
            };

            return (
              <TabHandle
                key={index}
                {...typedElement.props}
                isActive={index === activeTabIndex}
                onClick={handleClick}
                // value={typedElement.props.value}
                // iconSize={typedElement.props.iconSize}
                // icon={typedElement.props.icon}
                // disabled={typedElement.props.disabled}
                // activeColor={typedElement.props.activeColor}
                // activeSolidColor={typedElement.props.activeSolidColor}
                // inActiveColor={typedElement.props.inActiveColor}
                // className={typedElement.props.className}
                // style={typedElement.props.style}
              >
                {typedElement.props.children}
              </TabHandle>
            );
          })}
        </TabList>
        {tabsPanel[activeTabIndex]}
      </Box>
    </TabsProvider>
  );
};

export default Tabs;
Tabs.displayName = getDisplayName("Tabs");
