import { ModalPanelProps } from "../../types/auera-ui";
import { useModal } from "../../hook/useModal";
import { getDisplayName } from "@/utils/displayname";
import { usePanel } from "@/hook/usePanel";
import { useDesign, useMode, useThemeVariant } from "@/hook/use";
import { useComputePanel } from "./use-modal";
import { useEffect } from "react";

const ModalPanel = ({
  children,
  size = "auto",
  transition = "walkIn",
  align = "vertical",
  mode,
  radius,
  placement,
  themeVariant,
  ...props
}: ModalPanelProps) => {
  const { isVisible } = useModal();
  const { currentMode } = useMode(mode);
  const { currentDesign } = useDesign(props.design);
  const _themeVariant = useThemeVariant(themeVariant);
  const { collectMode, collectThemeVariant } = usePanel();

  useEffect(() => {
    collectMode(currentMode);
    collectThemeVariant(_themeVariant);
  }, [currentMode, themeVariant]);

  const Panel = useComputePanel({
    className: props.className,
    design: currentDesign,
    transition,
    align,
    size,
    isVisible,
    radius,
    placement,
  });

  return (
    <Panel mode={currentMode} themeVariant={themeVariant} {...props}>
      {children}
    </Panel>
  );
};

export default ModalPanel;
ModalPanel.displayName = getDisplayName("ModalPanel");
