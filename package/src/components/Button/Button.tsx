import { ButtonProps } from "../../types/auera-ui";
import { createStyle, defineClass, merge, tw } from "stywind";
import { getDisplayName } from "../../utils/displayname";
import Icon from "../Icon/Icon";
import { TbLoader2 } from "react-icons/tb";
import { useState } from "react";
import { useProvider } from "../../hook/provider";
import { useTheme } from "../../hook/useTheme";
import { generateFrostButton } from "../../flavours/frost/button/button.class";
import { generateNeumorphicButton } from "../../flavours/neumorphic/button/button.class";
import { generateButtonClass } from "../../flavours/corporate/button/button.class";

const rd = {
  none: defineClass("rounded-none"),
  sm: defineClass("rounded-[4px]"),
  md: defineClass("rounded-[6px]"),
  lg: defineClass("rounded-[8px]"),
  xl: defineClass("rounded-[12px]"),
  full: defineClass("rounded-full"),
};

const sz = {
  sm: defineClass("p-1"),
  md: defineClass("p-2"),
  lg: defineClass("p-3"),
  xl: defineClass("p-4"),
};

const Button = ({
  children,
  variant = "solid",
  colorScheme = "primary",
  radius = "sm",
  size = "md",
  leftIcon,
  rightIcon,
  rightIconColor,
  leftIconColor,
  rightIconSize,
  leftIconSize,
  flavour,
  spinner,
  mode,
  hideChildOnLoad,
  ...props
}: ButtonProps) => {
  const [moveIcon, setMoveIcon] = useState(false);
  const enter = () => setMoveIcon(true);
  const leave = () => setMoveIcon(false);
  const { flavour: Flavour } = useProvider();
  const { mode: AppMode } = useTheme();
  const mainClass = defineClass(
    "flex justify-center items-center flex-shrink-0 font-medium transition-layer duration-200 active:scale-95 gap-2"
  );
  const currentMode = mode ?? AppMode;
  const disabled = props.isLoading || props.disabled;
  const borderRadius = merge.single(rd, radius);
  const buttonSize = merge.single(sz, size);
  const bg_corp = generateButtonClass({ variant, colorScheme });
  const frostFlavour = generateFrostButton({
    variant,
    colorScheme,
    mode: currentMode,
  });
  const neumorphic_flavour = generateNeumorphicButton({
    variant,
    colorScheme,
    mode: currentMode,
  });
  const buttonStyle = {
    frost: frostFlavour,
    corporate: bg_corp,
    neumorphic: tw(neumorphic_flavour, "active:scale-70"),
  };
  const animateIconDir = () => {
    if (props.animate) {
      if (leftIcon) {
        return moveIcon ? "move-svg-left" : "move-svg-leave-left";
      } else if (rightIcon && moveIcon) {
        return "move-svg";
      } else {
        return "move-svg-leave";
      }
    }
  };
  const StyledButton = createStyle("button").classname(
    tw(
      merge.single(buttonStyle, flavour ?? Flavour),
      borderRadius,
      buttonSize,
      mainClass,
      animateIconDir() as string,
      props.fullWidth ? "w-full" : "w-auto",
      disabled
        ? defineClass("cursor-not-allowed pointer-events-none opacity-75")
        : ""
    )
  );
  return (
    <StyledButton {...props} onMouseEnter={enter} onMouseLeave={leave}>
      {props.isLoading ? (
        <>
          {spinner ?? <TbLoader2 size={20} className="animate-spin" />}
          {!hideChildOnLoad && children}
        </>
      ) : (
        <>
          {leftIcon && (
            <Icon size={leftIconSize} color={leftIconColor} icon={leftIcon} />
          )}
          {children}
          {rightIcon && (
            <Icon
              size={rightIconSize}
              color={rightIconColor}
              icon={rightIcon}
            />
          )}
        </>
      )}
    </StyledButton>
  );
};

export default Button;

Button.displayName = getDisplayName("Button");
