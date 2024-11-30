import "@/styles/globals.css";
import { Provider } from "auera-ui";
import type { AppProps } from "next/app";
import { RootLayout } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider flavour="frost">
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
}
