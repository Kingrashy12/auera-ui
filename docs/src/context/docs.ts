import { DocsContextProps } from "@/types/global";
import { createContext } from "react";

export const DocsContext = createContext<DocsContextProps | undefined>(
  undefined
);
