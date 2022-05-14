import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../src/theme/styles.css";
import Theme from "../src/theme/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    // Custom theme!
    <ChakraProvider theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
