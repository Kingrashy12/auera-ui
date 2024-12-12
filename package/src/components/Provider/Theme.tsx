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
  const [mode, setMode] = useState<ModeType>(() => {
    if (!WINDOW_ACTIVE) return "light";

    const storedTheme = storageActions.get(THEME_KEY) as ModeType;
    if (storedTheme) return storedTheme;

    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    storageActions.set(THEME_KEY, systemPreference);
    return systemPreference;
  });

  useEffect(() => {
    if (customMode) setMode(customMode);
  }, [customMode]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  const toggleTheme: ThemeContextType["toggleTheme"] = {
    system: () => {
      setMode(
        window?.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    },
    main: () => {
      setMode((prev) => {
        const newMode = prev === "light" ? "dark" : "light";
        storageActions.set(THEME_KEY, newMode);
        return newMode;
      });
    },
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
ThemeProvider.displayName = getDisplayName("ThemeProvider");
