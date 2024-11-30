import { createContext } from "react";

type DrawerContextType = {
  isOpen: boolean;
  isVisible: boolean;
  onOpen: (id: string) => void;
  onClose: () => void;
  activeDrawerValue: string;
};

export const DrawerContext = createContext<DrawerContextType | undefined>(
  undefined
);
