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
        Update the fontFamily inside your <CodeTag>globals.css</CodeTag>
      </p>
      <CodeBlock fileName="globals.css" lg="css" code={cssConfig} />
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

const cssConfig = `...
@import 'auera-ui/auera.css';
...

@theme {
 ...
 --font-inter: var(--font-inter);
 ... 
}
`;
