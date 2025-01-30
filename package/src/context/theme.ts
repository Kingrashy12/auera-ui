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
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
