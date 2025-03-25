import { createContext } from "react";
import { DesignVariant, ModeType } from "../types/auera-system";

type ProviderContextType = {
  design: DesignVariant;
  mode?: ModeType;
  changeDesign: (design: DesignVariant) => void;
};

export const AueraContext = createContext<ProviderContextType | undefined>(
  undefined
);
