import { ReactNode, useEffect, useState } from "react";
import { ThemeContext, ThemeContextType } from "../../context/theme";
import { storageActions } from "../../hook/useStorage";
import { ModeType } from "../../types/auera-system";
import { getDisplayName } from "@/utils/displayname";

type ThemeProviderProps = {
  children: ReactNode;
  mode?: "light" | "dark";
};

const ThemeProvider = ({ children, mode: customMode }: ThemeProviderProps) => {
  const [scheme, setScheme] = useState<ModeType>(() => {
    const storedTheme = storageActions.get("auera-ui-theme") as ModeType;
    return storedTheme || "light";
  });

  useEffect(() => {
    setScheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  }, []);

  const [mode, setMode] = useState(scheme);

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
        storageActions.set("auera-ui-theme", newMode);
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
