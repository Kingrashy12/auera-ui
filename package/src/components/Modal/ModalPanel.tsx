import { ModalPanelType } from "../../types/auera-ui";
import { useModal } from "../../hook/useModal";
import { getDisplayName } from "@/utils/displayname";
import { usePanel } from "@/hook/usePanel";
import { useFlavour, useMode } from "@/hook/use";
import { useComputePanel } from "./use-modal";
import { useEffect } from "react";

const ModalPanel = ({
  children,
  size = "auto",
  transition = "walkIn",
  align = "vertical",
  mode,
  radius,
  ...props
}: ModalPanelType) => {
  const { isVisible } = useModal();
  const { currentMode } = useMode(mode);
  const { currentFlavour } = useFlavour(props.flavour);
  const { collectMode } = usePanel();

  useEffect(() => {
    collectMode(currentMode);
  }, [currentMode]);

  const Panel = useComputePanel({
    className: props.className,
    flavour: currentFlavour,
    mode: currentMode,
    transition,
    align,
    size,
    isVisible,
    radius,
  });

  return <Panel {...props}>{children}</Panel>;
};

export default ModalPanel;
ModalPanel.displayName = getDisplayName("ModalPanel");
