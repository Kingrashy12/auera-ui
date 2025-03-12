import { ModeType } from "@/types/auera-system";
import { createContext, useContext } from "react";

type TableProviderProps = {
  mode: ModeType;
};

export const TableProviderContext = createContext<
  TableProviderProps | undefined
>(undefined);

export const useTable = () => {
  const context = useContext(TableProviderContext);
  if (context === undefined) {
    throw new Error(
      "Missing `Table`. Make sure you use a Table child component within `Table`."
    );
  }
  return context;
};
