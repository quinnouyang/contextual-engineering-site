import { Container, Heading } from "@chakra-ui/react";
import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";

export default function ErrorPage() {
  return (
    <>
      <NavBar {...{ label: "Error" }} />
      <Container maxW="container.lg" centerContent>
        <Heading m={"1em"}>u in wrong place</Heading>
      </Container>
      <Footer />
    </>
  );
}
