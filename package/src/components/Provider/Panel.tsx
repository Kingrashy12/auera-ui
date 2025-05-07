import { DrawerPanelContext, PanelContext } from "@/context/panel";
import { useMode, useThemeVariant } from "@/hook/use";
import { ContextProviderProps } from "@/types/auera-context";
import { ModeType, ThemeVariant } from "@/types/auera-system";
import { getDisplayName } from "@/utils/displayname";
import { useState } from "react";

const PanelProvider = ({ children }: ContextProviderProps) => {
  const { currentMode } = useMode();
  const themeVariant = useThemeVariant();

  const [mode, setMode] = useState<ModeType>(currentMode);
  const [variant, setVariant] = useState(themeVariant);

  const collectMode = (value: ModeType) => setMode(value);
  const collectThemeVariant = (value: ThemeVariant) => setVariant(value);

  return (
    <PanelContext.Provider
      value={{ mode, collectMode, collectThemeVariant, themeVariant: variant }}
    >
      {children}
    </PanelContext.Provider>
  );
};

export default PanelProvider;
PanelProvider.displayName = getDisplayName("PanelProvider");

export const DrawerPanelProvider = ({ children }: ContextProviderProps) => {
  const { currentMode } = useMode();
  const themeVariant = useThemeVariant();

  const [mode, setMode] = useState<ModeType>(currentMode);
  const [variant, setVariant] = useState(themeVariant);

  const collectMode = (value: ModeType) => setMode(value);
  const collectThemeVariant = (value: ThemeVariant) => setVariant(value);

  return (
    <DrawerPanelContext.Provider
      value={{ mode, collectMode, collectThemeVariant, themeVariant: variant }}
    >
      {children}
    </DrawerPanelContext.Provider>
  );
};
