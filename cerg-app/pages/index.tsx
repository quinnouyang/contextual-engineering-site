import { Container, Flex } from "@chakra-ui/react";
import Carousel from "../src/demo-components/carousel";
import Cart from "../src/demo-components/cart";
import Details from "../src/demo-components/details";
import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";

export default function HomePage() {
  return (
    <>
      <NavBar {...{ label: "Home" }} />
      <Carousel />
      {/* Responsive UI! Arrays and objects (for < 3 breakpoints) */}
      <Container maxW="container.xl" p={0}>
        <Flex
          // Functional scrolling (?). {"smallest"/deafult, medium and up}
          h={{ base: "auto", md: "100vh" }}
          // Y-padding by screen size, using an array of breakpoints: py={[small, medium, large]}.
          py={[0, 10, 20]}
          // Default is L->R (row). Set so smaller screens are T->B (column-reverse)
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Details />
          <Cart />
        </Flex>
      </Container>
      <Footer />
    </>
  );
}
