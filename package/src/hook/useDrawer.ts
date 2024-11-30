import { useContext } from "react";
import { DrawerContext } from "../context/drawer";

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error(
      "DrawerProvider is missing. Ensure your root layout or App component is wrapped with <Provider>."
    );
  }
  return context;
};
