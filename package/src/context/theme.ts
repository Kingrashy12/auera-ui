import { createContext } from "react";

type ThemeContextType = {
  mode: "light" | "dark";
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
