import { MenuContextProps } from "@/types/auera-context";
import { createContext } from "react";

export const MenuContext = createContext<MenuContextProps | undefined>(
  undefined
);
