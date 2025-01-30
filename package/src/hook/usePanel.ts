import { DrawerPanelContext, PanelContext } from "@/context/panel";
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

export const useDrawerPanel = () => {
  const context = useContext(DrawerPanelContext);
  if (context === undefined) {
    throw new Error(
      "DrawerPanelProvider is missing. Ensure your root layout or App component is wrapped with <Provider>."
    );
  }
  return context;
};
