import { useState } from "react";
import { DrawerContext } from "../../context/drawer";
import { ContextProviderProps } from "../../types/auera-context";

const DrawerProvider = ({ children }: ContextProviderProps) => {
  const [activeDrawerValue, setActiveDrawerValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const onOpen = (value: string) => {
    setIsOpen(true);
    setIsVisible(true);
    setActiveDrawerValue(value);
  };

  const onClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };
  return (
    <DrawerContext.Provider
      value={{ isOpen, isVisible, onClose, onOpen, activeDrawerValue }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
