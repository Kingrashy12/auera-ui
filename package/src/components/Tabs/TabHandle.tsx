import React from "react";
import { useTabList } from "./Provider";
import { createStyle, merge, tw } from "stywind";
import { TabHandleType } from "../../types/auera-ui";
import Icon from "../Icon/Icon";
import { getDisplayName } from "@/utils/displayname";

const TabHandle: React.FC<TabHandleType> = ({
  children,
  activeColor,
  activeSolidColor,
  inActiveColor = "neutral-400",
  value,
  onClick,
  disabled = false,
  className,
  style,
  isActive,
  icon,
  iconSize = 16,
}) => {
  const { onSwitch, variant, themeMode, fullWidth, rounded } = useTabList();

  const modeColors = {
    light: {
      active: "blue-500",
      activeSolid: "black",
    },
    dark: {
      active: "white",
      activeSolid: "black",
    },
  };

  const vcolor = modeColors[themeMode];

  const getColor = {
    active: activeColor || vcolor.active,
    activeSolid: activeSolidColor || vcolor.activeSolid,
  };

  const activeColorScheme =
    variant === "solid" ? getColor.activeSolid : getColor.active;

  const isCurrent = isActive as boolean;
  const variantStyle = {
    line: tw(
      "bg-transparent border-b-2",
      isCurrent
        ? `text-${activeColorScheme} border-b-${activeColorScheme}`
        : `text-${inActiveColor} border-b-transparent hover:border-b-gray-300`,
      disabled
        ? "opacity-50 cursor-not-allowed pointer-events-none"
        : "opacity-100 cursor-pointer"
    ),
    solid: tw(
      isCurrent
        ? `text-${activeColorScheme} bg-white shadow drop-shadow-tab`
        : `text-${inActiveColor} bg-transparent hover:bg-gray-200 tone-dark:hover:bg-gray-500`,
      rounded ? "rounded-full" : "rounded-md",
      disabled
        ? "opacity-50 cursor-not-allowed pointer-events-none select-none"
        : "opacity-100 cursor-pointer"
    ),
  };

  const switchTab = () => {
    onSwitch(value);
    if (onClick) {
      onClick();
    }
  };

  const Handle = createStyle("button").classname(
    tw(
      `gap-[7px] flex items-center outline-none font-medium whitespace-nowrap font-inter p-[9px]
       h-[30px] justify-center leading-[1.2rem] text-sm transition-all duration-500`,
      fullWidth ? "w-full" : "w-auto",
      variant === "solid" ? "border-none" : "",
      merge.single(variantStyle, variant),
      className
    )
  );
  return (
    <Handle style={style} onClick={switchTab} data-theme={themeMode}>
      {icon && <Icon icon={icon} size={iconSize} />}
      {children}
    </Handle>
  );
};

export default TabHandle;
TabHandle.displayName = getDisplayName("TabHandle");
