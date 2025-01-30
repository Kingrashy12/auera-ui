import { getDisplayName } from "@/utils/displayname";
import { useModal } from "../../hook/useModal";
import { ModalTriggerType } from "../../types/auera-ui";
import { FC } from "react";

const ModalTrigger: FC<ModalTriggerType> = ({
  children,
  type = "open",
  value,
  onClick,
  ...props
}) => {
  const { onOpen, onClose } = useModal();

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (type === "open") {
      onOpen(value);
    } else {
      onClose();
    }

    if (onClick) {
      onClick(event);
    }
  };
  return (
    <div onClick={handleClick} {...props}>
      {children}
    </div>
  );
};

export default ModalTrigger;
ModalTrigger.displayName = getDisplayName("ModalTrigger");
