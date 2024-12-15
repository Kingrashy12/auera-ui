import { PanelContext } from "@/context/panel";
import { useContext } from "react";

export const usePanel = () => {
  const context = useContext(PanelContext);
  if (context === undefined) {
    throw new Error(
      "PanelProvider is missing. Ensure your root layout or App component is wrapped with <Provider>."
    );
  }
  return context;
};
