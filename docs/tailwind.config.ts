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
        "text-color": "var(--text-color)",
        dim: "var(--text-dim)",
        "cmd-code": "var(--cmd-code)",
      },
      backgroundColor: {
        ...tailwindExtend.backgroundColor,
        navbar: "var(--nav-bar)",
        cmd: "var(--cmd-bg)",
      },
      boxShadow: { ...tailwindExtend.boxShadow },
      borderColor: { ...tailwindExtend.borderColor },
      fontFamily: {
        poppins: '"Poppins", serif',
        "inter-tight": '"Inter Tight", sans-serif',
        inter: '"Inter", serif',
        montserrat: '"Montserrat", serif',
      },
    },
  },
  plugins: [],
};
export default config;
