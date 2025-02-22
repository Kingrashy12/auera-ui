import { IconButtonPropsExtended } from "../../types/auera-ui";
import { getDisplayName } from "../../utils/displayname";
import { FC } from "react";
import { ModalTrigger } from "../Modal";
import { DrawerTrigger } from "../Drawer";
import { throwTriggerError } from "../../utils/component.err";
import { useComputeIButton } from "./iconbutton-variants";

const Trigger = {
  modal: ModalTrigger,
  drawer: DrawerTrigger,
};

const IconButton: FC<IconButtonPropsExtended<boolean>> = ({
  variant = "subtle",
  radius,
  size,
  className,
  children,
  disabled,
  trigger,
  withTrigger,
  triggerType,
  triggerValue,
  asChild = false,
  ...props
}) => {
  throwTriggerError(withTrigger, triggerType, triggerValue, trigger);

  const TriggerComponent = Trigger[trigger || "modal"];

  const Comp = useComputeIButton({
    className,
    variant,
    radius,
    size,
    disabled,
    ghost_active: props.active && variant === "ghost",
    subtle_active: props.active && variant === "subtle",
    outline_active: props.active && variant === "outline",
    asChild,
  });

  return (
    <>
      {withTrigger ? (
        <TriggerComponent
          disabled={disabled}
          type={triggerType}
          value={triggerValue as string}
        >
          <Comp mode={props.mode} {...props}>
            {children}
          </Comp>
        </TriggerComponent>
      ) : (
        <>
          <Comp mode={props.mode} {...props}>
            {children}
          </Comp>
        </>
      )}
    </>
  );
};

export default IconButton;
IconButton.displayName = getDisplayName("IconButton");
