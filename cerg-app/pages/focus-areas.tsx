import { Flex, Spacer } from "@chakra-ui/react";
import Footer from "../src/components/Footer";
import NavBar from "../src/components/NavBar/NavBar";

export default function FocusAreasPage() {
  return (
    <Flex direction="column" minH="100vh">
      <NavBar {...{ label: "Research", childLabel: "Focus Areas" }} />
      <Spacer />
      <Footer />
    </Flex>
  );
}
