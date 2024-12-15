import { createStyle, defineClass, merge, tw } from "stywind";
import { ModalHeaderType } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import { usePanel } from "@/hook/usePanel";

const ModalHeader = ({
  children,
  showBorder = true,
  ...props
}: ModalHeaderType) => {
  const { mode } = usePanel();
  const modeStyle = {
    light: defineClass("border-b border-b-neutral-200"),
    dark: defineClass("border-b border-b-neutral-800"),
  };
  const Header = createStyle("div").classname(
    tw(
      "flex items-center justify-between p-[13px] w-full",
      showBorder ? merge.single(modeStyle, mode) : ""
    )
  );
  return <Header {...props}>{children}</Header>;
};

export default ModalHeader;
ModalHeader.displayName = getDisplayName("ModalHeader");
