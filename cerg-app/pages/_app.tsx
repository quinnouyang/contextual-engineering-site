import { AppProps } from "next/app";
import { ChakraProvider/*, ScaleFade*/ } from "@chakra-ui/react";
import "../src/theme/styles.css";
import CustomTheme from "../src/theme/custom-theme";
import "@fontsource/montserrat";

const App = ({ Component, pageProps/*, router*/ }: AppProps) => {
  return (
    <ChakraProvider theme={CustomTheme}>
      {/* Disorienting page transition, a nice-to-have if can make it smooth */}
      {/* <ScaleFade key={router.route} initialScale={0.9} in={true}> */}
      <Component {...pageProps} />
      {/* </ScaleFade> */}
    </ChakraProvider>
  );
};

export default App;
