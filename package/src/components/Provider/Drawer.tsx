import { useCallback, useMemo, useState } from "react";
import { DrawerContext } from "../../context/drawer";
import { ContextProviderProps } from "../../types/auera-context";
import { getDisplayName } from "@/utils/displayname";

let onOpen: (value: string) => void;
let onClose: () => void;

const DrawerProvider = ({ children }: ContextProviderProps) => {
  const [activeDrawerValue, setActiveDrawerValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  onOpen = useCallback((value: string) => {
    setIsOpen(true);
    setIsVisible(true);
    setActiveDrawerValue(value);
  }, []);

  onClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  }, []);

  const contextValue = useMemo(
    () => ({ isOpen, isVisible, onClose, onOpen, activeDrawerValue }),
    [isOpen, isVisible, onClose, onOpen, activeDrawerValue]
  );

  return (
    <DrawerContext.Provider value={contextValue}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
DrawerProvider.displayName = getDisplayName("DrawerProvider");

export { onOpen as openDrawer, onClose as closeDrawer };
