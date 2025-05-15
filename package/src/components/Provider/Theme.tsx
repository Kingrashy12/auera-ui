import { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeContext, ThemeContextType } from "../../context/theme";
import {
  ModeType,
  ThemeProviderProps,
  ThemeVariant,
} from "../../types/auera-system";
import { getDisplayName } from "@/utils/displayname";
import { WINDOW_ACTIVE } from "@/utils";
import { InjectTheme } from "@/core/theme/Theme";
import ThemeManager from "@/core/theme/manager";

const ThemeProvider = ({
  children,
  mode: customMode,
  themeVariant: _themeVariant,
}: ThemeProviderProps) => {
  const [system, setSystem] = useState(false);
  const [themeVariant, setThemeVariant] = useState<ThemeVariant>(() => {
    if (!WINDOW_ACTIVE) return _themeVariant;

    const storedVariant = ThemeManager.getThemeVariant();
    if (storedVariant) return storedVariant;

    return _themeVariant;
  });

  const setSystemTheme = (isSystem: boolean) => {
    setSystem(isSystem);
    ThemeManager.setSystem(isSystem);
  };

  const [mode, setMode] = useState<ModeType>(() => {
    if (!WINDOW_ACTIVE) return "light";

    const storedTheme = ThemeManager.getTheme();
    if (storedTheme) return storedTheme;

    const systemPreference = ThemeManager.getPreferedTheme();
    ThemeManager.setTheme(systemPreference);
    setSystemTheme(true);
    return systemPreference;
  });

  useEffect(() => {
    ThemeManager.setThemeVariant(themeVariant);
  }, [themeVariant]);

  useEffect(() => {
    if (_themeVariant && _themeVariant !== themeVariant) {
      setThemeVariant(_themeVariant);
    }
  }, [_themeVariant]);

  useEffect(() => {
    if (customMode && customMode !== mode) {
      setMode(customMode);
    }
  }, [customMode, mode]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    document.documentElement.setAttribute("data-theme-variant", themeVariant);
    ThemeManager.setThemeVariant(themeVariant);
  }, [mode, themeVariant]);

  useEffect(() => {
    const isSystem = ThemeManager.getSystem();
    setSystemTheme(isSystem);
  }, []);

  const toggleTheme: ThemeContextType["toggleTheme"] = {
    system: useCallback(() => {
      const newMode = ThemeManager.getPreferedTheme();
      ThemeManager.setTheme(newMode);
      setMode(newMode);
      setSystemTheme(true);
    }, []),
    main: useCallback(() => {
      setMode((prev) => {
        const newMode = prev === "light" ? "dark" : "light";
        ThemeManager.setTheme(newMode);
        setSystemTheme(false);
        return newMode;
      });
    }, []),
    dark: useCallback(() => {
      setMode(() => {
        const newMode = "dark";
        ThemeManager.setTheme(newMode);
        setSystemTheme(false);
        return newMode;
      });
    }, []),
    light: useCallback(() => {
      setMode(() => {
        const newMode = "light";
        ThemeManager.setTheme(newMode);
        setSystemTheme(false);
        return newMode;
      });
    }, []),
  };

  const changeThemeVariant: ThemeContextType["changeThemeVariant"] =
    useCallback((variant) => {
      setThemeVariant(variant);
      ThemeManager.setThemeVariant(variant);
    }, []);

  const themeValues = useMemo(
    () => ({
      mode,
      toggleTheme,
      system,
      changeThemeVariant,
      themeVariant,
    }),
    [mode, toggleTheme, system, changeThemeVariant, themeVariant]
  );

  return (
    <ThemeContext.Provider value={themeValues}>
      <InjectTheme variant={themeVariant} mode={mode} />
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
ThemeProvider.displayName = getDisplayName("ThemeProvider");
