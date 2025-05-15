import { useCallback, useMemo, useState } from "react";
import { ModalContext } from "../../context/modal";
import { ContextProviderProps } from "../../types/auera-context";
import { getDisplayName } from "@/utils/displayname";

let onOpen: (value: string) => void;
let onClose: () => void;

const ModalProvider = ({ children }: ContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeModalValue, setActiveModalValue] = useState<string>("");

  onOpen = useCallback((value: string) => {
    setIsOpen(true);
    setActiveModalValue(value);
    setIsVisible(true);
  }, []);

  onClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 400);
  }, []);

  const contextValue = useMemo(
    () => ({ activeModalValue, isOpen, isVisible, onClose, onOpen }),
    [activeModalValue, isOpen, isVisible, onClose, onOpen]
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
ModalProvider.displayName = getDisplayName("ModalProvider");
export { onOpen as openModal, onClose as closeModal };
