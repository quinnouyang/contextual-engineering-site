import { Container, Heading } from "@chakra-ui/react";
import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";
import TopBar from "../src/figures/top-bar";

export default function Page() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Container maxW="container.lg" centerContent>
        <Heading m={"1em"}>u in wrong place</Heading>
      </Container>
      <Footer />
    </>
  );
}
