import { useContext } from "react";
import { GlobalUIContext } from "../context/global-ui";

export const useGlobalUI = () => {
  const context = useContext(GlobalUIContext);
  if (context === undefined) {
    throw new Error(
      "GlobalUIProvider is missing. Ensure your root layout or App component is wrapped with <Provider>."
    );
  }
  return context;
};
