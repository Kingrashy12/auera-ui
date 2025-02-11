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

  const SUB = variant === "subtle" || variant === "ghost";

  const Comp = useComputeIButton({
    className,
    variant,
    radius,
    size,
    disabled,
    sub_active: SUB && props.active,
    outline_active: props.active && variant === "outline",
    asChild,
  });

  return (
    <>
      {withTrigger ? (
        <TriggerComponent type={triggerType} value={triggerValue as string}>
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
