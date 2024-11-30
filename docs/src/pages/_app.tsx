// import "@/styles/globals.css";
import "auera-ui/dist/auera.css";
import { Provider } from "auera-ui";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider flavour="neumorphic">
      <Component {...pageProps} />
    </Provider>
  );
}
