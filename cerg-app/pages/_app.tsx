import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../src/theme/styles.css";
import CustomTheme from "../src/theme/custom-theme";
import "@fontsource/montserrat/600.css";  // Imperfect font imports (not all font weights work...)
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
