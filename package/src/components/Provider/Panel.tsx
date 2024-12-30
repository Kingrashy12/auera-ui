import { DrawerPanelContext, PanelContext } from "@/context/panel";
import { useMode } from "@/hook/use";
import { ContextProviderProps } from "@/types/auera-context";
import { ModeType } from "@/types/auera-system";
import { getDisplayName } from "@/utils/displayname";
import { useState } from "react";

const PanelProvider = ({ children }: ContextProviderProps) => {
  const { currentMode } = useMode();
  const [mode, setMode] = useState<ModeType>(currentMode);
  const collectMode = (value: ModeType) => setMode(value);

  return (
    <PanelContext.Provider value={{ mode, collectMode }}>
      {children}
    </PanelContext.Provider>
  );
};

export default PanelProvider;
PanelProvider.displayName = getDisplayName("PanelProvider");

export const DrawerPanelProvider = ({ children }: ContextProviderProps) => {
  const { currentMode } = useMode();
  const [mode, setMode] = useState<ModeType>(currentMode);
  const collectMode = (value: ModeType) => setMode(value);

  return (
    <DrawerPanelContext.Provider value={{ mode, collectMode }}>
      {children}
    </DrawerPanelContext.Provider>
  );
};
