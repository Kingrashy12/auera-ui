import { useMode } from "../../hook/use";
import { DrawerPanelProps } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import { useDrawerPanel } from "@/hook/usePanel";
import { useComputeStyles } from "./usedrawer";

const DrawerPanel = ({
  flavour,
  type = "sticky",
  position = "right",
  children,
  mode,
  ...props
}: DrawerPanelProps) => {
  const { currentMode } = useMode(mode);
  const { collectMode } = useDrawerPanel();
  collectMode(currentMode);

  const { Component } = useComputeStyles().panel(position, type, currentMode);

  return <Component {...props}>{children}</Component>;
};

export default DrawerPanel;
DrawerPanel.displayName = getDisplayName("DrawerPanel");
