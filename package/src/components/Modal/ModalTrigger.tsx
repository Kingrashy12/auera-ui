import { getDisplayName } from "@/utils/displayname";
import { useModal } from "../../hook/useModal";
import { ModalTriggerType } from "../../types/auera-ui";
import { FC } from "react";

const ModalTrigger: FC<ModalTriggerType> = ({
  children,
  type = "open",
  value,
  disabled,
  onClick,
  ...props
}) => {
  const { onOpen, onClose } = useModal();

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (disabled) return;

    type === "open" ? onOpen(value) : onClose();

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
