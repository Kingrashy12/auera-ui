import { ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "../../context/theme";
import { storageActions } from "../../hook/useStorage";
import { ModeType } from "../../types/auera-system";
import { getDisplayName } from "@/utils/displayname";

type ThemeProviderProps = {
  children: ReactNode;
  mode?: "light" | "dark";
};

const ThemeProvider = ({ children, mode: customMode }: ThemeProviderProps) => {
  const savedMode =
    (storageActions.get("auera-ui-theme") as ModeType) || "light";
  const [mode, setMode] = useState<"light" | "dark">(savedMode);

  useEffect(() => {
    if (customMode) setMode(customMode);
  }, [customMode]);

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => {
      const newMode = prev === "light" ? "dark" : "light";
      storageActions.set("auera-ui-theme", newMode);
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
ThemeProvider.displayName = getDisplayName("ThemeProvider");
