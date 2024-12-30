import { ModalHeaderType } from "../../types/auera-ui";
import { createStyle, defineClass, merge, tw } from "stywind";
import { getDisplayName } from "@/utils/displayname";
import { useDrawerPanel } from "@/hook/usePanel";

const DrawerHeader = ({
  children,
  showBorder = true,

  ...props
}: ModalHeaderType) => {
  const currentMode = useDrawerPanel().mode;
  const modeStyle = {
    light: defineClass("border-b border-b-neutral-200"),
    dark: defineClass("border-b border-b-neutral-800"),
  };
  const Header = createStyle("div").classname(
    tw(
      "flex items-center justify-between rounded-t-lg p-[13px] w-full bg-drawer-content",
      showBorder ? merge.single(modeStyle, currentMode) : ""
    )
  );
  return <Header {...props}>{children}</Header>;
};

export default DrawerHeader;
DrawerHeader.displayName = getDisplayName("DrawerHeader");
