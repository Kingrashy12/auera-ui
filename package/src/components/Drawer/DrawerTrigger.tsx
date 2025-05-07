import { FC } from "react";
import { useDrawer } from "../../hook/useDrawer";
import { DrawerTriggerProps } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";

const DrawerTrigger: FC<DrawerTriggerProps> = ({
  value,
  children,
  type = "open",
  onClick,
  disabled,
  ...props
}) => {
  const { onOpen, onClose } = useDrawer();

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

export default DrawerTrigger;
DrawerTrigger.displayName = getDisplayName("DrawerTrigger");
