import { ModalContentType } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import { useDrawerContent } from "./use-drawer";

const DrawerContent = ({
  children,
  centerContent,
  ...props
}: ModalContentType) => {
  const Content = useDrawerContent({
    className: props.className,
    centerContent,
  });

  return <Content {...props}>{children}</Content>;
};

export default DrawerContent;
DrawerContent.displayName = getDisplayName("DrawerContent");
