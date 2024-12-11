import { ModalContentType } from "../../types/auera-ui";
import { useDrawer } from "./usedrawer";
import { getDisplayName } from "@/utils/displayname";

const DrawerContent = ({
  children,
  centerContent,
  ...props
}: ModalContentType) => {
  const { Content } = useDrawer.content(props);
  return <Content {...props}>{children}</Content>;
};

export default DrawerContent;
DrawerContent.displayName = getDisplayName("DrawerContent");
