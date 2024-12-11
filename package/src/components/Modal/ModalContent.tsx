import { ModalContentType } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import { useModal } from "./use-modal";

const ModalContent = ({
  children,
  centerContent,
  ...props
}: ModalContentType) => {
  const { Base } = useModal.content(props);
  return <Base {...props}>{children}</Base>;
};

export default ModalContent;
ModalContent.displayName = getDisplayName("ModalContent");
