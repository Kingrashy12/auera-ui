import React from "react";
import Details from "../Details";
import HeaderLabel from "../HeaderLabel";
import CodeTag from "../CodeTag";
import CodeBlock from "../layout/code/Block";
import { useDocState } from "@/hooks/docs";

const UsingNext = () => {
  const {
    lang: { ext },
  } = useDocState();

  return (
    <Details id="using-next">
      <HeaderLabel id="using-nextjs" as="h3">
        Using Nextjs
      </HeaderLabel>
      <p className="text">
        On the other hand using Nextjs, you can simply import{" "}
        <CodeTag>Inter</CodeTag> from <CodeTag>next/font/google</CodeTag>
      </p>
      <CodeBlock
        fileName="layout.tsx"
        lg="tsx"
        code={ext === "tsx" ? code : code_js}
      />
      <p className="text">
        Update the fontFamily inside your <CodeTag>tailwind.config.ts</CodeTag>
      </p>
      <CodeBlock
        fileName="tailwind.config.ts"
        lg="ts"
        code={ext === "tsx" ? tailwindConfig : config_js}
      />
    </Details>
  );
};

export default UsingNext;

const code = `import { Inter } from "next/font/google";
    
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={\`\${inter.variable} antialiased\`}
      >
       {/* ... */}
      </body>
    </html>
  );
}`;

const code_js = `import { Inter } from "next/font/google";
    
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={\`\${inter.variable} antialiased\`}
      >
       {/* ... */}
      </body>
    </html>
  );
}`;

const tailwindConfig = `import { tailwindExtend, aueraTw, SafeLists } from "auera-ui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/auera-ui/**/*.{js,ts,jsx,tsx}",
  ],
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
      fontFamily: {
        // Add this to your fontFamily 
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [aueraTw], 
};

export default config;`;

const config_js = `import { tailwindExtend, aueraTw, SafeLists } from "auera-ui";

const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/auera-ui/**/*.{js,ts,jsx,tsx}",
  ],
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
      fontFamily: {
        // Add this to your fontFamily 
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [aueraTw], 
};

export default config;`;
