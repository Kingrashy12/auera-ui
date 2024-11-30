import { createContext } from "react";
import { DesignFlavour, ModeType } from "../types/auera-system";

type ProviderContextType = {
  flavour: DesignFlavour;
  mode?: ModeType;
  changeFlavour: (flavour: DesignFlavour) => void;
};

export const AueraContext = createContext<ProviderContextType | undefined>(
  undefined
);
