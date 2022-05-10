import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../src/theme/styles.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    // Custon theme!
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
