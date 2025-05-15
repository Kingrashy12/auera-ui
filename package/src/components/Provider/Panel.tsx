import { DrawerPanelContext, PanelContext } from "@/context/panel";
import { useMode, useThemeVariant } from "@/hook/use";
import { ContextProviderProps } from "@/types/auera-context";
import { ModeType, ThemeVariant } from "@/types/auera-system";
import { getDisplayName } from "@/utils/displayname";
import { useCallback, useMemo, useState } from "react";

const PanelProvider = ({ children }: ContextProviderProps) => {
  const { currentMode } = useMode();
  const themeVariant = useThemeVariant();

  const [mode, setMode] = useState<ModeType>(currentMode);
  const [variant, setVariant] = useState(themeVariant);

  const collectMode = useCallback((value: ModeType) => setMode(value), []);
  const collectThemeVariant = useCallback(
    (value: ThemeVariant) => setVariant(value),
    []
  );

  const contextValue = useMemo(
    () => ({ mode, collectMode, collectThemeVariant, themeVariant: variant }),
    [mode, collectMode, collectThemeVariant, variant]
  );

  return (
    <PanelContext.Provider value={contextValue}>
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

  const collectMode = useCallback((value: ModeType) => setMode(value), []);
  const collectThemeVariant = useCallback(
    (value: ThemeVariant) => setVariant(value),
    []
  );

  const contextValue = useMemo(
    () => ({ mode, collectMode, collectThemeVariant, themeVariant: variant }),
    [mode, collectMode, collectThemeVariant, variant]
  );

  return (
    <DrawerPanelContext.Provider value={contextValue}>
      {children}
    </DrawerPanelContext.Provider>
  );
};
