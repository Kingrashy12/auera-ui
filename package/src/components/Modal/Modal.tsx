import { tw } from "stywind";
import { useModal } from "../../hook/useModal";
import { useTheme } from "../../hook/useTheme";
import { ModalType } from "../../types/auera-ui";
import Backdrop from "../Backdrop/Backdrop";
import { getDisplayName } from "@/utils/displayname";
import { FC } from "react";

const Modal: FC<ModalType> = ({
  children,
  preventClose,
  intensity = "md",
  mode,
  value,
  className,
  zIndex,
  preventScroll,
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
      className={tw("items-center justify-center w-full", className)}
      zIndex={zIndex}
      preventScroll={preventScroll}
    >
      {children}
    </Backdrop>
  );
};

export default Modal;
Modal.displayName = getDisplayName("Modal");
