import ModalProvider from "../components/Provider/Modal";
import ThemeProvider from "../components/Provider/Theme";
import { DesignFlavour, ProviderProps } from "../types/auera-system";
import { AueraContext } from "../context/provider";
import { useEffect, useState } from "react";
import { getDisplayName } from "@/utils/displayname";
import DrawerProvider from "@/components/Provider/Drawer";
import PanelProvider from "@/components/Provider/Panel";

const Provider = ({
  children,
  flavour: Flavour = "corporate",
  mode,
}: ProviderProps) => {
  const [flavour, setFlavour] = useState<DesignFlavour>(Flavour);

  useEffect(() => {
    setFlavour(flavour);
  }, [flavour]);

  const changeFlavour = (flavour: DesignFlavour) => setFlavour(flavour);
  return (
    <AueraContext.Provider value={{ flavour, mode, changeFlavour }}>
      <ThemeProvider mode={mode}>
        <PanelProvider>
          <ModalProvider>
            <DrawerProvider>{children}</DrawerProvider>
          </ModalProvider>
        </PanelProvider>
      </ThemeProvider>
    </AueraContext.Provider>
  );
};

export default Provider;
Provider.displayName = getDisplayName("Provider");
