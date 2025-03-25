import { useMode } from "../../hook/use";
import { DrawerPanelProps } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import { useDrawerPanel } from "@/hook/usePanel";
import { useDrawer as Drawer } from "../../hook/useDrawer";
import { ComputePanel } from "./use-drawer";
import { useEffect } from "react";

const DrawerPanel = ({
  design,
  type = "sticky",
  position = "right",
  children,
  mode,
  ...props
}: DrawerPanelProps) => {
  const { isVisible } = Drawer();
  const { currentMode } = useMode(mode);
  const { collectMode } = useDrawerPanel();

  useEffect(() => {
    collectMode(currentMode);
  }, [currentMode]);

  const Panel = ComputePanel({
    className: props.className,
    mode: currentMode,
    position,
    type,
    isVisible,
  });

  return <Panel {...props}>{children}</Panel>;
};

export default DrawerPanel;
DrawerPanel.displayName = getDisplayName("DrawerPanel");
