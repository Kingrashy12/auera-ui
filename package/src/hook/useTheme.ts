import { useContext } from "react";
import { ThemeContext } from "../context/theme";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error(
      "ThemeProvider is missing. Ensure your root layout or App component is wrapped with <Provider>."
    );

  return context;
};
