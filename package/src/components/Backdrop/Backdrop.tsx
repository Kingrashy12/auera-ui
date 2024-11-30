import { createStyle, defineClass, merge, tw } from "stywind";
import { Drop } from "../../types/auera-ui";
import { useMode } from "../../hook/use";
import { getDisplayName } from "@/utils/displayname";
import { MouseEvent } from "react";

const modeStye = {
  light: defineClass("bg-light-drop"),
  dark: defineClass("bg-dark-drop"),
};

const Backdrop = ({
  open,
  onClose,
  intensity = "sm",
  mode,
  children,
  preventClose,
  ...props
}: Drop) => {
  const { currentMode } = useMode(mode);

  const blur = {
    none: defineClass("backdrop-blur-0"),
    sm: defineClass("backdrop-blur-[4px]"),
    md: defineClass("backdrop-blur-[6px]"),
    lg: defineClass("backdrop-blur-[8px]"),
    xl: defineClass("backdrop-blur-[10px]"),
  };

  const closeDrop = (e: MouseEvent<HTMLDivElement>) => {
    if (!preventClose && e.target === e.currentTarget) {
      onClose();
    }
  };
  const Drop = createStyle("div").classname(
    tw(
      merge.single(modeStye, currentMode),
      defineClass("w-full fixed h-full inset-0"),
      props.centerContent ? "items-center justify-center" : "",
      `z-[500]`,
      open ? "flex" : "hidden",
      merge.single(blur, intensity)
    )
  );
  return (
    <Drop onClick={closeDrop} {...props}>
      {children}
    </Drop>
  );
};

export default Backdrop;

Backdrop.displayName = getDisplayName("Backdrop");
