export const installationCodes = {
  provider: `import { Provider } from "auera-ui";

const Layout = () => {
 return (
  <Provider>
   //Your content
  </Provider>
 )
}`,
  config: `import { tailwindExtend } from "auera-ui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/auera-ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        ...tailwindExtend.backgroundColor,
      },
      boxShadow: {
        ...tailwindExtend.boxShadow,
      },
      colors: {
        ...tailwindExtend.colors,
      },
      borderColor: {
        ...tailwindExtend.borderColor,
      },
      transitionProperty: {
        ...tailwindExtend.transitionProperty,
      },
      borderWidth: {
        ...tailwindExtend.borderWidth,
      },
      keyframes: { ...tailwindExtend.keyframes },
      animation: { ...tailwindExtend.animation },
      dropShadow: {...tailwindExtend.dropShadow},
    },
  },
  plugins: [],
};`,
};
