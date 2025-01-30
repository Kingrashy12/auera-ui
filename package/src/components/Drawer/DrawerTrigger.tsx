import { FC } from "react";
import { useDrawer } from "../../hook/useDrawer";
import { DrawerTriggerType } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";

const DrawerTrigger: FC<DrawerTriggerType> = ({
  value,
  children,
  type = "open",
  onClick,
  ...props
}) => {
  const { onOpen, onClose } = useDrawer();

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

export default DrawerTrigger;
DrawerTrigger.displayName = getDisplayName("DrawerTrigger");
