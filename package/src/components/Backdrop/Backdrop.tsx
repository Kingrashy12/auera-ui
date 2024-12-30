import { createStyle, defineClass, merge, tw } from "stywind";
import { Drop } from "../../types/auera-ui";
import { useMode } from "../../hook/use";
import { getDisplayName } from "@/utils/displayname";
import { MouseEvent, useMemo } from "react";
import { ModeType } from "@/types/auera-system";

const modeStye = {
  light: defineClass("bg-light-drop"),
  dark: defineClass("bg-dark-drop"),
};

const blur = {
  none: defineClass("backdrop-blur-0"),
  sm: defineClass("backdrop-blur-[4px]"),
  md: defineClass("backdrop-blur-[6px]"),
  lg: defineClass("backdrop-blur-[8px]"),
  xl: defineClass("backdrop-blur-[10px]"),
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
  const Drop = useDrop(open, intensity, props.centerContent, mode);

  const closeDrop = (e: MouseEvent<HTMLDivElement>) => {
    if (!preventClose && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Drop onClick={closeDrop} {...props}>
      {children}
    </Drop>
  );
};

export default Backdrop;

Backdrop.displayName = getDisplayName("Backdrop");

const useDrop = (
  open: boolean,
  intensity = "sm",
  centerContent?: boolean,
  mode?: ModeType
) => {
  const { currentMode } = useMode(mode);

  const Drop = useMemo(() => {
    return createStyle("div").classname(
      tw(
        merge.single(modeStye, currentMode),
        defineClass("w-full fixed h-full inset-0"),
        centerContent ? "items-center justify-center" : "",
        `z-[500]`,
        open ? "flex" : "hidden",
        merge.single(blur, intensity)
      )
    );
  }, [open]);

  return Drop;
};
