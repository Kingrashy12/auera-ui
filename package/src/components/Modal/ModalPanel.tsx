import { createStyle, defineClass, merge, tw } from "stywind";
import { ModalPanelType } from "../../types/auera-ui";
import { useModal } from "../../hook/useModal";
import { useTheme } from "../../hook/useTheme";
import { useProvider } from "../../hook/provider";
import { getDisplayName } from "@/utils/displayname";

const ModalPanel = ({
  children,
  size = "auto",
  transition = "walkIn",
  align = "vertical",
  ...props
}: ModalPanelType) => {
  const { isVisible } = useModal();
  const { mode: currentMode } = useTheme();
  const { flavour } = useProvider();

  const sizes = {
    auto: defineClass("w-auto max-[550px]:w-[95%]"),
    sm: defineClass("w-[300px] max-[550px]:w-[95%]"),
    md: defineClass("w-[400px] max-[550px]:w-[95%]"),
    lg: defineClass("w-[500px] max-[550px]:w-[95%]"),
    xl: defineClass("w-[600px] max-[550px]:w-[95%]"),
    full: defineClass("w-10/12 max-[550px]:w-[95%]"),
  };

  const animate = {
    slideIn: isVisible ? "animate-slideIn" : "animate-slideOut",
    walkIn: isVisible ? "animate-walkIn" : "animate-walkOut",
    dropIn: isVisible ? "animate-dropIn" : "animate-dropOut",
  };

  const flavourStyle = {
    light: {
      neumorphic: defineClass("shadow-neumorphic-outline"),
      frost: defineClass("shadow-frost-outline"),
      corporate: defineClass("shadow-card-shadow-light"),
    },
    dark: {
      neumorphic: defineClass("shadow-neumorphic-modal-dark"),
      frost: defineClass("shadow-frost-modal-dark"),
      corporate: defineClass("shadow-card-shadow-dark"),
    },
  };

  const mode = {
    light: defineClass("border border-neutral-200 bg-white"),
    dark: defineClass("border border-neutral-800 bg-black"),
  };

  const defualtStyle = defineClass(
    "max-w-full max-h-[95%] h-auto rounded-[11px] relative z-[800] overflow-hidden gap-[10px]"
  );
  const Panel = createStyle("div").classname(
    tw(
      defualtStyle,
      merge.single(sizes, size),
      merge.single(mode, currentMode),
      merge.single(animate, transition),
      align === "vertical" ? "flex-col" : "flex-row",
      merge.multi(flavourStyle, currentMode, flavour)
    )
  );

  return <Panel {...props}>{children}</Panel>;
};

export default ModalPanel;
ModalPanel.displayName = getDisplayName("ModalPanel");
//Add displayname
