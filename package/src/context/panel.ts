import { ModeType } from "@/types/auera-system";
import { createContext } from "react";

type PanelProps = {
  mode: ModeType;
  collectMode: (mode: ModeType) => void;
};

export const PanelContext = createContext<PanelProps | undefined>(undefined);
export const DrawerPanelContext = createContext<PanelProps | undefined>(
  undefined
);
