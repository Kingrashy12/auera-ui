import React from "react";
import { useTabList } from "./Provider";
import { createStyle, defineClass, merge, tw } from "stywind";
import { Icon } from "auera-ui";

type TabHandleType = {
  /**
   * The content to be rendered inside the tab.
   */
  children?: React.ReactNode;
  /**
   * The color to be applied when the tab is active.
   * @default "blue-500"
   */
  activeColor?: string;
  /**
   * The color to be applied when the tab is active on @param variant `solid`.
   * @default "black"
   */
  activeSolidColor?: string;
  /**
   * The color to be applied when the tab is inactive.
   * @default "neutral-400"
   */
  inActiveColor?: string;
  /**
   * The unique identifier or value for the tab, typically used to track the selected tab.
   */
  value: string;
  /**
   * The function to be called when the tab is clicked.
   */
  onClick?: () => void;
  /**
   * If true, disables the tab, preventing interaction.
   */
  disabled?: boolean;
  /**
   * Optional additional CSS class for styling the TabHandle.
   */
  className?: string;

  /**
   * Inline styles for the TabHandle.
   */
  style?: React.CSSProperties;

  /**
   * Indicates whether the TabHandle is currently active.
   * @default false
   */
  isActive?: boolean;

  /**
   * The icon component to be rendered in the TabHandle.
   * Can be any valid React component type.
   */
  icon?: React.ElementType;

  /**
   * The size of the icon in pixels.
   * @default 16
   */
  iconSize?: number;
};

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
  const shadow = defineClass(
    "filter-[drop-shadow(0_1px_2px rgb(0 0 0 / 0.1)) drop-shadow(0_1px_1px rgb(0 0 0 / 0.06))]"
  );
  const variantStyle = {
    line: tw(
      defineClass("bg-transparent border-b-2"),
      isCurrent
        ? `text-${activeColorScheme} border-b-${activeColorScheme}`
        : `text-${inActiveColor} border-b-transparent hover:border-b-gray-300`,
      disabled
        ? "opacity-50 cursor-default pointer-event-none"
        : "opacity-100 cursor-pointer point-event-all"
    ),
    solid: tw(
      isCurrent
        ? `text-${activeColorScheme} bg-white ${shadow}`
        : `text-${inActiveColor} bg-transparent`,
      rounded ? "rounded-full" : "rounded-md",
      disabled
        ? "opacity-50 cursor-default pointer-event-none"
        : "opacity-100 cursor-pointer point-event-all"
    ),
  };

  const switchTab = () => {
    onSwitch(value);
    if (onClick) {
      onClick();
    }
  };
  const defaultStyle = defineClass(
    "gap-[7px] flex items-center outline-none font-medium whitespace-nowrap font-sans p-2 justify-center leading-[1.2rem] text-[0.87rem] transition-all duration-500"
  );
  const Handle = createStyle("button").classname(
    tw(
      className,
      defaultStyle,
      merge.single(variantStyle, variant),
      fullWidth ? "w-full" : "w-auto",
      variant === "solid" ? "border-none" : ""
    )
  );
  return (
    <Handle style={style} onClick={switchTab}>
      {icon && <Icon icon={icon} size={iconSize} />}
      {children}
    </Handle>
  );
};

export default TabHandle;
// DispalyName
