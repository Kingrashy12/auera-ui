import { ReactNode, useEffect, useState } from "react";
import { ThemeContext, ThemeContextType } from "../../context/theme";
import { storageActions } from "../../hook/useStorage";
import { ModeType } from "../../types/auera-system";
import { getDisplayName } from "@/utils/displayname";
import { WINDOW_ACTIVE } from "@/utils";

type ThemeProviderProps = {
  children: ReactNode;
  mode?: "light" | "dark";
};

const ThemeProvider = ({ children, mode: customMode }: ThemeProviderProps) => {
  const THEME_KEY = "aueraui.theme";
  const [system, setSystem] = useState(false);

  const setSystemTheme = (isSystem: boolean) => {
    setSystem(isSystem);
    storageActions.set("aueraui.theme.isSystem", isSystem);
  };

  const [mode, setMode] = useState<ModeType>(() => {
    if (!WINDOW_ACTIVE) return "light";

    const storedTheme = storageActions.get(THEME_KEY) as ModeType;
    if (storedTheme) return storedTheme;

    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    storageActions.set(THEME_KEY, systemPreference);
    setSystemTheme(true);
    return systemPreference;
  });

  useEffect(() => {
    if (customMode && customMode !== mode) {
      setMode(customMode);
    }
  }, [customMode, mode]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  useEffect(() => {
    const isSystem = storageActions.get("aueraui.theme.isSystem") === "true";
    setSystemTheme(isSystem);
  }, []);

  const toggleTheme: ThemeContextType["toggleTheme"] = {
    system() {
      const newMode = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      storageActions.set(THEME_KEY, newMode);
      setMode(newMode);
      setSystemTheme(true);
    },
    main() {
      setMode((prev) => {
        const newMode = prev === "light" ? "dark" : "light";
        storageActions.set(THEME_KEY, newMode);
        setSystemTheme(false);
        return newMode;
      });
    },
    dark() {
      setMode(() => {
        const newMode = "dark";
        storageActions.set(THEME_KEY, newMode);
        setSystemTheme(false);
        return newMode;
      });
    },
    light() {
      setMode(() => {
        const newMode = "light";
        storageActions.set(THEME_KEY, newMode);
        setSystemTheme(false);
        return newMode;
      });
    },
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, system }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
ThemeProvider.displayName = getDisplayName("ThemeProvider");
