import { ModalHeaderType } from "../../types/auera-ui";
import { useTheme } from "../../hook/useTheme";
import { createStyle, defineClass, merge, tw } from "stywind";

const DrawerHeader = ({
  children,
  showBorder = true,
  ...props
}: ModalHeaderType) => {
  const { mode } = useTheme();
  const modeStyle = {
    light: defineClass("border-b border-b-neutral-200"),
    dark: defineClass("border-b border-b-neutral-800"),
  };
  const Header = createStyle("div").classname(
    tw(
      "flex items-center justify-between rounded-t-lg p-[13px] w-full bg-drawer-content",
      showBorder ? merge.single(modeStyle, mode) : ""
    )
  );
  return <Header {...props}>{children}</Header>;
};

export default DrawerHeader;
// displayname;
