import type { Config } from "tailwindcss";
import { tailwindExtend } from "auera-ui";

/// <reference types="tailwindcss/types/config" />
const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],

  theme: {
    extend: {
      colors: {
        ...tailwindExtend.colors,
        "text-color": "var(--text-color)",
        muted: "var(--text-muted)",
        "cmd-code": "var(--cmd-code)",
        dimBlack: "var(--text-muted)",
      },
      backgroundColor: {
        ...tailwindExtend.backgroundColor,
        navbar: "var(--nav-bar)",
        cmd: "var(--cmd-bg)",
        sidebar: "var(--sidebar)",
        sideIcon: "var(--side-icon)",
      },
      boxShadow: {
        ...tailwindExtend.boxShadow,
      },
      borderColor: {
        ...tailwindExtend.borderColor,
        sidebar: "var(--sidebar-border)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        "inter-tight": ["var(--font-inter-tight)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        "stencil-one": ["var(--font-stencil-one)", "sans-serif"],
      },
      transitionProperty: {
        "border-color": "border-color 0.3s ease, box-shadow 0.3s ease",
        layer: "background-color 0.3s ease, box-shadow 0.3s ease",
      },
      borderWidth: {
        ...tailwindExtend.borderWidth,
      },
      transitionDuration: {
        "400": "400ms",
      },
      keyframes: { ...tailwindExtend.keyframes },
      animation: { ...tailwindExtend.animation },
      dropShadow: { ...tailwindExtend.dropShadow },
    },
  },
  // plugins: [aueraTw],
};
export default config;
