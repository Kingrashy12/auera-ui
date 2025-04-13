import React from "react";
import { GlobalUIContext } from "../context/global-ui";
import { GlobalUI } from "../types/auera-system";

interface GCProps {
  children: React.ReactNode;
  styleRules?: GlobalUI["styleRules"];
}

const GlobalUIProvider: React.FC<GCProps> = ({ children, styleRules }) => {
  return (
    <GlobalUIContext.Provider value={{ styleRules }}>
      {children}
    </GlobalUIContext.Provider>
  );
};

export default GlobalUIProvider;

GlobalUIProvider.displayName = "AueraUI.GlobalUIProvider";
