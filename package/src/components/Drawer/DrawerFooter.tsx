import { ModalFooterProps } from "../../types/auera-ui";
import { createStyle, defineClass, merge, tw } from "stywind";
import { getDisplayName } from "@/utils/displayname";
import { usePanel } from "@/hook/usePanel";

const DrawerFooter = ({
  children,
  showBorder = true,
  position,
  ...props
}: ModalFooterProps) => {
  const mode = usePanel().mode;
  const modeStyle = {
    light: defineClass("border-t border-t-neutral-200"),
    dark: defineClass("border-t border-t-neutral-800"),
  };
  const Footer = createStyle("div").classname(
    tw(
      showBorder ? merge.single(modeStyle, mode) : "",
      position === "left" ? "justify-start" : "justify-end",
      defineClass("flex w-full p-3 gap-3 rounded-b-lg bg-drawer-content")
    )
  );
  return <Footer {...props}>{children}</Footer>;
};

export default DrawerFooter;
DrawerFooter.displayName = getDisplayName("DrawerFooter");
