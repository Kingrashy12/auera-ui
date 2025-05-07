import { ThemeVariant } from "../types/auera-system";
import { createContext } from "react";
export type ThemeContextType = {
  mode: "light" | "dark";
  system: boolean;
  toggleTheme: {
    system: () => void;
    main: () => void;
    dark: () => void;
    light: () => void;
  };
  changeThemeVariant: (variant: ThemeVariant) => void;
  themeVariant: ThemeVariant;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
