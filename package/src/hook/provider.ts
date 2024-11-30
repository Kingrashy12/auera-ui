import { useContext } from "react";
import { AueraContext } from "../context/provider";

export const useProvider = () => {
  const context = useContext(AueraContext);
  if (context === undefined)
    throw new Error(
      "AueraProvider is missing. Ensure your root layout or App component is wrapped with <Provider>."
    );
  return context;
};
