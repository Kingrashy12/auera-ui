import { ModeType, ThemeVariant } from "@/types/auera-system";
import { createContext } from "react";

type PanelProps = {
  mode: ModeType;
  themeVariant: ThemeVariant;
  collectMode: (mode: ModeType) => void;
  collectThemeVariant: (variant: ThemeVariant) => void;
};

export const PanelContext = createContext<PanelProps | undefined>(undefined);
export const DrawerPanelContext = createContext<PanelProps | undefined>(
  undefined
);
