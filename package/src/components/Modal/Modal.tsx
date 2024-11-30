import { tw } from "stywind";
import { useModal } from "../../hook/useModal";
import { useTheme } from "../../hook/useTheme";
import { ModalType } from "../../types/auera-ui";
import Backdrop from "../Backdrop/Backdrop";
import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import ModalPanel from "./ModalPanel";
import ModalTrigger from "./ModalTrigger";
import { getDisplayName } from "@/utils/displayname";
import { FC } from "react";

declare module "./Modal" {
  interface Modal {
    Header: typeof ModalHeader;
    Content: typeof ModalContent;
    Footer: typeof ModalFooter;
    Panel: typeof ModalPanel;
    Trigger: typeof ModalTrigger;
  }
}

type ModalComponents = {
  Header: typeof ModalHeader;
  Panel: typeof ModalPanel;
  Content: typeof ModalContent;
  Footer: typeof ModalFooter;
  Trigger: typeof ModalTrigger;
};

const Modal: FC<ModalType> & ModalComponents = ({
  children,
  preventClose,
  intensity = "md",
  mode,
  value,
  className,
}) => {
  const { isOpen, onClose, activeModalValue } = useModal();
  const { mode: AppMode } = useTheme();
  const currentMode = mode ?? AppMode;

  if (activeModalValue !== value) return null;

  return (
    <Backdrop
      open={isOpen}
      onClose={onClose}
      preventClose={preventClose}
      intensity={intensity}
      mode={currentMode as "light" | "dark"}
      className={tw(
        "flex items-center justify-center w-full",
        className as string
      )}
    >
      {children}
    </Backdrop>
  );
};

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
Modal.Panel = ModalPanel;
Modal.Trigger = ModalTrigger;

export default Modal;
Modal.displayName = getDisplayName("Modal");
