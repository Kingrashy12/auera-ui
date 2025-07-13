import { ButtonProps } from "../../types/auera-ui";
import { getDisplayName } from "../../utils/displayname";
import { useButton } from "./use-button";

const Button = <T extends React.ElementType = "button">({
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
}: ButtonProps<T>) => {
  const { Button, getContent } = useButton({
    radius,
    variant,
    size,
    colorScheme,
    design,
    className,
    ...props,
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (props.disabled) return;

    if (props.onClick) {
      props.onClick(event);
    }
  };

  return (
    <Button onClick={handleClick} {...props}>
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
