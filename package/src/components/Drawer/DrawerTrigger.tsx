import { FC } from "react";
import { useDrawer } from "../../hook/useDrawer";
import { DrawerTriggerType } from "../../types/auera-ui";

const DrawerTrigger: FC<DrawerTriggerType> = ({
  value,
  children,
  type = "open",
  ...props
}) => {
  const { onOpen, onClose } = useDrawer();

  function openModal() {
    onOpen(value);
  }
  return (
    <div onClick={type === "open" ? openModal : onClose} {...props}>
      {children}
    </div>
  );
};

export default DrawerTrigger;
