import { TabListContextType, TabsProviderType } from "@/types/auera-context";
import { getDisplayName } from "@/utils/displayname";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ListContext = createContext<TabListContextType | undefined>(undefined);

const TabsProvider = ({
  children,
  tabVariant,
  mode,
  useFullWidth,
  useRounded,
}: TabsProviderType) => {
  const [activeTabValue, setActiveTabValue] = useState("");
  const [themeMode, setThemeMode] = useState(mode);
  const [fullWidth, setFullWidth] = useState(useFullWidth);
  const [rounded, setRounded] = useState(useRounded);
  const [variant, setVaraint] =
    useState<TabListContextType["variant"]>(tabVariant);

  useEffect(() => {
    setVaraint(tabVariant);
  }, [tabVariant]);

  useEffect(() => {
    setThemeMode(mode);
  }, [mode]);

  useEffect(() => {
    setFullWidth(useFullWidth);
  }, [useFullWidth]);

  useEffect(() => {
    setRounded(useRounded);
  }, [useRounded]);

  useEffect(() => {
    const tab = document.querySelectorAll("button");
    if (!activeTabValue) {
      setActiveTabValue(tab[0].value);
    }
  }, [activeTabValue]);

  const onSwitch = useCallback((value: string) => {
    setActiveTabValue(value);
  }, []);

  const tabsContext = useMemo(
    () => ({
      onSwitch,
      themeMode,
      activeTabValue,
      variant,
      fullWidth,
      rounded,
    }),
    [onSwitch, themeMode, activeTabValue, variant, fullWidth, rounded]
  );

  return (
    <ListContext.Provider value={tabsContext}>{children}</ListContext.Provider>
  );
};

export default TabsProvider;
TabsProvider.displayName = getDisplayName("TabsProvider");

export const useTabList = () => {
  const context = useContext(ListContext);
  if (context === undefined) {
    throw new Error(
      "Missing `Tabs`. Make sure you use a Tabs child component within `Tabs`."
    );
  }
  return context;
};
