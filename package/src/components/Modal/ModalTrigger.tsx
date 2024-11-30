import { getDisplayName } from "@/utils/displayname";
import { useModal } from "../../hook/useModal";
import { ModalTriggerType } from "../../types/auera-ui";
import { FC } from "react";

const ModalTrigger: FC<ModalTriggerType> = ({
  children,
  type = "open",
  value,
  ...props
}) => {
  const { onOpen, onClose } = useModal();

  function openModal() {
    onOpen(value);
  }
  return (
    <div onClick={type === "open" ? openModal : onClose} {...props}>
      {children}
    </div>
  );
};

export default ModalTrigger;
ModalTrigger.displayName = getDisplayName("ModalTrigger");
