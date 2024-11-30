import { createContext } from "react";

type ModalContextType = {
  isOpen: boolean;
  isVisible: boolean;
  onOpen: (id: string) => void;
  onClose: () => void;
  activeModalValue: string;
};

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);
