import { ModalPanelType } from "../../types/auera-ui";
import { useModal } from "../../hook/useModal";
import { useProvider } from "../../hook/provider";
import { getDisplayName } from "@/utils/displayname";
import { usePanel } from "@/hook/usePanel";
import { useMode } from "@/hook/use";
import { useComputeStyles } from "./use-modal";

const ModalPanel = ({
  children,
  size = "auto",
  transition = "walkIn",
  align = "vertical",
  mode,
  ...props
}: ModalPanelType) => {
  const { isVisible } = useModal();
  const { currentMode } = useMode(mode);
  const { flavour } = useProvider();
  const { collectMode } = usePanel();
  collectMode(currentMode);

  const { Panel } = useComputeStyles.panel(
    isVisible,
    align,
    currentMode,
    transition,
    size,
    flavour
  );

  return <Panel {...props}>{children}</Panel>;
};

export default ModalPanel;
ModalPanel.displayName = getDisplayName("ModalPanel");
