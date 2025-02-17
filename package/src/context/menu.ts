import { ModeType } from "@/types/auera-system";
import { createContext } from "react";

type MenuContextProps = {
  /**
   * Indicates if the menu is currently open.
   */
  isOpen: boolean;
  /**
   * Function to open the menu.
   */
  onOpen: () => void;
  /**
   * Function to close the menu.
   */
  onClose: () => void;
  mode: ModeType;
  menuRef: React.RefObject<HTMLDivElement | null>;
};

export const MenuContext = createContext<MenuContextProps | undefined>(
  undefined
);
