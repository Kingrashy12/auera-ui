import "@/styles/globals.css";
import { Provider } from "auera-ui";
import type { AppProps } from "next/app";
import { RootLayout } from "@/components";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </Provider>
      <Analytics />
    </>
  );
}
