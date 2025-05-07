import { ModalContentProps } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import { useDrawerContent } from "../Drawer/use-drawer";

const ModalContent = ({
  children,
  centerContent,
  ...props
}: ModalContentProps) => {
  const Content = useDrawerContent({
    centerContent,
    className: props.className,
  });
  return <Content {...props}>{children}</Content>;
};

export default ModalContent;
ModalContent.displayName = getDisplayName("ModalContent");
