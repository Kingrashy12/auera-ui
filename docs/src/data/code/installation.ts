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
  css_config: `/* This includes, content, custom-variants and custom-utilites */
@import 'auera-ui/auera.css';`,
};
