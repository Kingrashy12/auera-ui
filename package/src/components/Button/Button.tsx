import { ButtonProps } from "../../types/auera-ui";
import { getDisplayName } from "../../utils/displayname";
import Icon from "../Icon/Icon";
import { TbLoader2 } from "react-icons/tb";
import { useButton } from "./use-button";

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
  const { Component } = useButton({
    radius,
    variant,
    size,
    colorScheme,
    flavour,
    ...props,
  });

  return (
    <Component {...props}>
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
    </Component>
  );
};

export default Button;

Button.displayName = getDisplayName("Button");
