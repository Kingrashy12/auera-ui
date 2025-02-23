import { IconButtonPropsExtended } from "../../types/auera-ui";
import { getDisplayName } from "../../utils/displayname";
import { useComputeIButton } from "./iconbutton-variants";

const IconButton = <T extends "button" | "div">({
  variant = "subtle",
  radius,
  size,
  className,
  children,
  disabled,
  as,
  ...props
}: IconButtonPropsExtended<T>) => {
  const Comp = useComputeIButton({
    className,
    variant,
    radius,
    size,
    disabled,
    ghost_active: props.active && variant === "ghost",
    subtle_active: props.active && variant === "subtle",
    outline_active: props.active && variant === "outline",
    as,
  });

  return (
    <Comp mode={props.mode} {...(props as any)}>
      {children}
    </Comp>
  );
};

export default IconButton;
IconButton.displayName = getDisplayName("IconButton");
