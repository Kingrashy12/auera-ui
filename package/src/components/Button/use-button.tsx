import { generateButtonClass } from "@/flavours/corporate/button/button.class";
import { generateFrostButton } from "@/flavours/frost/button/button.class";
import { generateNeumorphicButton } from "@/flavours/neumorphic/button/button.class";
import { useProvider } from "@/hook";
import { ButtonProps } from "@/types/auera-ui";
import { createStyle, defineClass, merge, tw } from "stywind";
import { ModalTrigger } from "../Modal";
import { DrawerTrigger } from "../Drawer";

import { TbLoader2 } from "react-icons/tb";
import Icon from "../Icon/Icon";
import { throwTriggerError } from "@/utils/component.err";
import { useMode } from "@/hook/use";

const Trigger = {
  modal: ModalTrigger,
  drawer: DrawerTrigger,
};

const rd = {
  none: defineClass("rounded-none"),
  sm: defineClass("rounded-[4px]"),
  md: defineClass("rounded-[6px]"),
  lg: defineClass("rounded-[8px]"),
  xl: defineClass("rounded-[12px]"),
  full: defineClass("rounded-full"),
};

const sz = {
  xs: defineClass("p-[0_10px_0_10px] h-[32px]"),
  sm: defineClass("p-[0_14px_0_14px] h-[36px]"),
  md: defineClass("p-[0_16px_0_16px] h-[40px]"),
  lg: defineClass("p-[0_18px_0_18px] h-[44px]"),
  xl: defineClass("p-[0_20px_0_20px] h-[48px]"),
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
  const { flavour: Flavour } = useProvider();
  const { currentMode } = useMode(props.mode);

  const mainClass = defineClass(
    "flex justify-center items-center flex-shrink-0 font-medium transition-layer duration-200 active:scale-95 gap-2"
  );

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

  const buttonStyles = merge.single(buttonStyle, flavour ?? Flavour);
  const Button = createStyle("button").classname(
    tw(
      className,
      variant === "unstyled" ? "" : buttonStyles,
      borderRadius,
      buttonSize,
      mainClass,
      props.fullWidth ? "w-full" : "w-auto",
      props.hidden && "hidden",
      disabled && "cursor-not-allowed pointer-events-none opacity-75"
    )
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
    const { currentMode } = useMode(props.mode);
    return (
      <>
        {withTrigger ? (
          <TriggerComponent
            className={triggerClass}
            value={triggerValue as string}
            type={triggerType}
          >
            <Button {...props} data-theme={currentMode}>
              {children}
            </Button>
          </TriggerComponent>
        ) : (
          <Button {...props} data-theme={currentMode}>
            {children}
          </Button>
        )}
      </>
    );
  };

  return { Component, getContent };
};

export { useButton };
