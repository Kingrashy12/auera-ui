import "@/styles/globals.css";
import { Provider } from "auera-ui";
import type { AppProps } from "next/app";
import { DocsProvider, RootLayout } from "@/components";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider>
        <DocsProvider>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </DocsProvider>
      </Provider>
      <Analytics />
    </>
  );
}
