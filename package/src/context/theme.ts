import { createContext } from "react";
export type ThemeContextType = {
  mode: "light" | "dark";
  toggleTheme: {
    system: () => void;
    main: () => void;
  };
};
// 'system'|'main'
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
