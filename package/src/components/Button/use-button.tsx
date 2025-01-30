import { ButtonProps } from "@/types/auera-ui";
import { ModalTrigger } from "../Modal";
import { DrawerTrigger } from "../Drawer";
import { TbLoader2 } from "react-icons/tb";
import Icon from "../Icon/Icon";
import { throwTriggerError } from "@/utils/component.err";
import { useFlavour, useMode } from "@/hook/use";
import { AueraButton } from "@/core/AueraElement";
import { useMemo } from "react";
import { createStyle } from "stywind";
import generateButtonClass from "./button__";

const Trigger = {
  modal: ModalTrigger,
  drawer: DrawerTrigger,
};

const useButton = ({
  radius = "sm",
  variant = "solid",
  size = "md",
  colorScheme = "primary",
  flavour,
  className,
  trigger,
  ...props
}: ButtonProps) => {
  const { currentFlavour } = useFlavour(flavour);
  const { currentMode } = useMode(props.mode);

  const disabled = props.isLoading || props.disabled;

  const Button = useMemo(
    () =>
      createStyle(AueraButton).classname(
        generateButtonClass({ colorScheme, className, variant })({
          flavour: currentFlavour,
          fullWidth: props.fullWidth,
          size,
          className,
          hidden: props.hidden,
          disabled,
          radius,
        })
      ),
    [
      variant,
      size,
      radius,
      props.hidden,
      props.fullWidth,
      disabled,
      className,
      colorScheme,
      currentFlavour,
      currentMode,
    ]
  );

  const TriggerComponent = Trigger[trigger || "modal"];

  const getContent = ({
    spinner,
    hideChildOnLoad,
    children,
    leftIcon,
    leftIconColor,
    leftIconSize,
    rightIcon,
    rightIconColor,
    rightIconSize,
  }: ButtonProps) => {
    return (
      <>
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
      </>
    );
  };

  const Component = ({
    withTrigger,
    trigger,
    children,
    triggerType,
    triggerValue,
    triggerClass,
    ...props
  }: ButtonProps & { triggerClass?: string }) => {
    throwTriggerError(withTrigger, triggerType, triggerValue, trigger);

    return (
      <>
        {withTrigger ? (
          <TriggerComponent
            className={triggerClass}
            value={triggerValue as string}
            type={triggerType}
          >
            <Button {...props}>{children}</Button>
          </TriggerComponent>
        ) : (
          <Button {...props}>{children}</Button>
        )}
      </>
    );
  };

  return { Component, getContent };
};

export { useButton };
