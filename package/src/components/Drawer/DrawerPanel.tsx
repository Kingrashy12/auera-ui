import { useMode, useThemeVariant } from "../../hook/use";
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
  themeVariant,
  ...props
}: DrawerPanelProps) => {
  const { isVisible } = Drawer();
  const { currentMode } = useMode(mode);
  const _themeVariant = useThemeVariant(themeVariant);
  const { collectMode, collectThemeVariant } = useDrawerPanel();

  useEffect(() => {
    collectMode(currentMode);
    collectThemeVariant(_themeVariant);
  }, [currentMode, themeVariant]);

  const Panel = ComputePanel({
    className: props.className,
    position,
    type,
    isVisible,
  });

  return (
    <Panel mode={currentMode} themeVariant={themeVariant} {...props}>
      {children}
    </Panel>
  );
};

export default DrawerPanel;
DrawerPanel.displayName = getDisplayName("DrawerPanel");
