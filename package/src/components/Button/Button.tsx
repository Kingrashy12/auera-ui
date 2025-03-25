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
  design,
  spinner,
  hideChildOnLoad,
  className,
  ...props
}) => {
  const { Button, getContent } = useButton({
    radius,
    variant,
    size,
    colorScheme,
    design,
    className,
    ...props,
  });

  return (
    <Button {...props}>
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
    </Button>
  );
};

export default Button;

Button.displayName = getDisplayName("Button");
