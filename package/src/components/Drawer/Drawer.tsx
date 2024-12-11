import { DrawerProps } from "../../types/auera-ui";
import DrawerHeader from "./DrawerHeader";
import DrawerContent from "./DrawerContent";
import DrawerFooter from "./DrawerFooter";
import DrawerTrigger from "./DrawerTrigger";
import { useDrawer } from "../../hook/useDrawer";
import Backdrop from "../Backdrop/Backdrop";
import { useMode } from "../../hook/use";
import DrawerPanel from "./DrawerPanel";
import { FC } from "react";
import { getDisplayName } from "@/utils/displayname";

type DrawerComponents = {
  Header: typeof DrawerHeader;
  Panel: typeof DrawerPanel;
  Content: typeof DrawerContent;
  Footer: typeof DrawerFooter;
  Trigger: typeof DrawerTrigger;
};

const Drawer: FC<DrawerProps> & DrawerComponents = ({
  children,
  preventClose,
  intensity = "sm",
  mode,
  value,
  className,
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
      mode={currentMode as "light" | "dark"}
      className={className}
    >
      {children}
    </Backdrop>
  );
};

export default Drawer;
Drawer.displayName = getDisplayName("Drawer");

Drawer.Header = DrawerHeader;
Drawer.Content = DrawerContent;
Drawer.Footer = DrawerFooter;
Drawer.Trigger = DrawerTrigger;
Drawer.Panel = DrawerPanel;
