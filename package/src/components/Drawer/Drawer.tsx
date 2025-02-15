import { DrawerProps } from "../../types/auera-ui";
import { useDrawer } from "../../hook/useDrawer";
import Backdrop from "../Backdrop/Backdrop";
import { useMode } from "../../hook/use";
import { FC } from "react";
import { getDisplayName } from "@/utils/displayname";

const Drawer: FC<DrawerProps> = ({
  children,
  preventClose,
  intensity = "sm",
  mode,
  value,
  className,
  zIndex,
}) => {
  const { isOpen, onClose, activeDrawerValue } = useDrawer();
  const { currentMode } = useMode(mode);

  if (activeDrawerValue !== value) return null;

  return (
    <Backdrop
      preventClose={preventClose}
      intensity={intensity}
      open={isOpen}
      onClose={onClose}
      mode={currentMode}
      className={className}
      zIndex={zIndex}
    >
      {children}
    </Backdrop>
  );
};

export default Drawer;
Drawer.displayName = getDisplayName("Drawer");
