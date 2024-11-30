import { createStyle, tw } from "stywind";
import { ModalContentType } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";

const ModalContent = ({
  children,
  centerContent,
  ...props
}: ModalContentType) => {
  const Content = createStyle("div").classname(
    tw(
      "flex flex-col p-3 bg-drawer-content overflow-y-auto h-full m-[5px 0] gap-[16px]",
      centerContent ? "items-center justify-center" : ""
    )
  );
  return <Content {...props}>{children}</Content>;
};

export default ModalContent;
ModalContent.displayName = getDisplayName("ModalContent");
