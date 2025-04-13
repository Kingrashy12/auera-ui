import { createContext } from "react";
import { GlobalUI } from "../types/auera-system";

type GlobalUIContextProps = {
  styleRules?: GlobalUI["styleRules"];
};

export const GlobalUIContext = createContext<GlobalUIContextProps | undefined>(
  undefined
);
