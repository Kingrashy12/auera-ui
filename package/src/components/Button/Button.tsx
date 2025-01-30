import { ButtonProps } from "../../types/auera-ui";
import { getDisplayName } from "../../utils/displayname";
import { useButton } from "./use-button";

const Button: React.FC<ButtonProps> = ({
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
  hideChildOnLoad,
  className,
  trigger,
  withTrigger,
  ...props
}) => {
  const { Component, getContent } = useButton({
    radius,
    variant,
    size,
    colorScheme,
    flavour,
    className,
    trigger,
    ...props,
  });

  return (
    <Component withTrigger={withTrigger} trigger={trigger} {...props}>
      {getContent({
        spinner,
        hideChildOnLoad,
        children,
        leftIcon,
        leftIconColor,
        leftIconSize,
        rightIcon,
        rightIconColor,
        rightIconSize,
      })}
    </Component>
  );
};

export default Button;

Button.displayName = getDisplayName("Button");
