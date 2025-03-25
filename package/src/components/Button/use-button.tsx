import { ButtonProps } from "@/types/auera-ui";
import Icon from "../Icon/Icon";
import { useDesign, useMode } from "@/hook/use";
import { AueraButton } from "@/core/AueraElement";
import { useMemo } from "react";
import { createStyle, tw } from "stywind";
import generateButtonClass from "./button__";
import { CgSpinner } from "react-icons/cg";

const useButton = ({
  radius = "sm",
  variant = "solid",
  size = "md",
  colorScheme = "primary",
  design,
  className,
  ...props
}: ButtonProps) => {
  const { currentDesign } = useDesign(design);
  const { currentMode } = useMode(props.mode);

  const disabled = props.isLoading || props.disabled;

  const ButtonInterface = createStyle(AueraButton);

  const styles = useMemo(
    () =>
      tw(
        generateButtonClass({ colorScheme, variant })({
          design: currentDesign,
          fullWidth: props.fullWidth,
          size,
          className,
          hidden: props.hidden,
          disabled,
          radius,
        }),
        {
          "relative svg:absolute svg:right-4": props.rightIcon,
          "relative svg:absolute svg:left-4": props.leftIcon,
          "justify-between": props.leftIcon && props.rightIcon,
        },
        className
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
      currentDesign,
      currentMode,
    ]
  );

  const Button = useMemo(() => ButtonInterface.classname(styles), [styles]);

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
            {spinner ?? <CgSpinner size={20} className="animate-spin" />}
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

  return { Button, getContent };
};

export { useButton };
