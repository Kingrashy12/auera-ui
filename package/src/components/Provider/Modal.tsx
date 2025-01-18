import { useState } from "react";
import { ModalContext } from "../../context/modal";
import { ContextProviderProps } from "../../types/auera-context";
import { getDisplayName } from "@/utils/displayname";

let onOpen: (value: string) => void;

const ModalProvider = ({ children }: ContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeModalValue, setActiveModalValue] = useState<string>("");

  onOpen = (value: string) => {
    setIsOpen(true);
    setActiveModalValue(value);
    setIsVisible(true);
  };

  const onClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 400);
  };

  return (
    <ModalContext.Provider
      value={{ activeModalValue, isOpen, isVisible, onClose, onOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
ModalProvider.displayName = getDisplayName("ModalProvider");
export { onOpen as openModal };
