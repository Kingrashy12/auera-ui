import { useIconButtonRules } from "@/hook/useStyleRules";
import { IconButtonPropsExtended } from "../../types/auera-ui";
import { getDisplayName } from "../../utils/displayname";
import { useComputeIButton } from "./iconbutton-variants";
import { useMode } from "@/hook/use";

const IconButton = <T extends "button" | "div">({
  variant = "subtle",
  radius,
  size,
  className,
  children,
  disabled,
  as = "button",
  themeVariant,
  ...props
}: IconButtonPropsExtended<T>) => {
  const { currentMode } = useMode(props.mode);
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
    id: props.id!,
    mode: currentMode,
  });

  const { appliedMode } = useIconButtonRules(
    props.id!,
    className,
    variant!,
    currentMode,
    "corporate"
  );

  return (
    <Comp
      mode={appliedMode?.value || props.mode}
      themeVariant={themeVariant}
      {...(props as any)}
    >
      {children}
    </Comp>
  );
};

export default IconButton;
IconButton.displayName = getDisplayName("IconButton");
