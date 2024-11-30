import { tailwindExtend } from "auera-ui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./node_modules/auera-ui/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ...tailwindExtend.colors,
      },
      backgroundColor: { ...tailwindExtend.backgroundColor },
      boxShadow: { ...tailwindExtend.boxShadow },
      borderColor: { ...tailwindExtend.borderColor },
    },
  },
  plugins: [],
};
export default config;
