import ModalProvider from "../components/Provider/Modal";
import ThemeProvider from "../components/Provider/Theme";
import { DesignVariant, ProviderProps } from "../types/auera-system";
import { AueraContext } from "../context/provider";
import { useEffect, useState } from "react";
import { getDisplayName } from "@/utils/displayname";
import DrawerProvider from "@/components/Provider/Drawer";
import PanelProvider, {
  DrawerPanelProvider,
} from "@/components/Provider/Panel";
import Toaster from "@/components/Toast/Toaster";
import GlobalUIProvider from "./GlobalUIProvider";

const Provider = ({
  children,
  design: Design = "corporate",
  mode,
  styleRules,
}: ProviderProps) => {
  const [design, setDesign] = useState<DesignVariant>(Design);

  useEffect(() => {
    setDesign(design);
  }, [design]);

  const changeDesign = (_design: DesignVariant) => setDesign(_design);

  return (
    <AueraContext.Provider value={{ design, mode, changeDesign }}>
      <ThemeProvider mode={mode}>
        <GlobalUIProvider styleRules={styleRules}>
          <Toaster />
          <PanelProvider>
            <DrawerPanelProvider>
              <ModalProvider>
                <DrawerProvider>{children}</DrawerProvider>
              </ModalProvider>
            </DrawerPanelProvider>
          </PanelProvider>
        </GlobalUIProvider>
      </ThemeProvider>
    </AueraContext.Provider>
  );
};

export default Provider;
Provider.displayName = getDisplayName("Provider");
