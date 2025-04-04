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
  provider_jsx: `import { Provider } from "auera-ui";

export default function RootLayout({ children }) {
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
    "./node_modules/auera-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // Whitelist dynamic color classes.
  safelist: SafeLists(),
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
      fontFamily: { ...tailwindExtend.fontFamily },
    },
  },
  /* For enabling custom variants, This allows you use
   'theme-*dark/light'
   'tone-*light/dark'
   'scrollbar'
   'scrollbar-track'
   'scrollbar-thumb'
   'scrollbar-none'
   */
  plugins: [aueraTw], 
};

export default config;`,
  config_js: `import { tailwindExtend, aueraTw, SafeLists } from "auera-ui";

const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/auera-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // Whitelist dynamic color classes.
  safelist: SafeLists(),
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
      fontFamily: { ...tailwindExtend.fontFamily },
    },
  },
  /* For enabling custom variants, This allows you use
   'theme-*dark/light'
   'tone-*light/dark'
   'scrollbar'
   'scrollbar-track'
   'scrollbar-thumb'
   'scrollbar-none'
   */
  plugins: [aueraTw], 
};

export default config;`,
};
