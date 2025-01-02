// const color = "${color}";

export const installationCodes = {
  provider: `import { Provider } from "auera-ui";

interface Props {
 children: React.ReactNode;
}

export default function RootLayout({
 children
}: Props) {
 return ( 
  <Provider>
   {children}
  </Provider>
 )
}`,
  config: `import { tailwindExtend, aueraTw, SafeLists } from "auera-ui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/auera-ui/**/*.{js,ts,jsx,tsx}",
  ],
  // Whitelist dynamic color classes.
  safelist: [SafeLists().join(" ")],
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
  /* For enabling custom variants, This allows you use 'theme-light' &
   'theme-dark' */
  plugins: [aueraTw], 
};`,
};
