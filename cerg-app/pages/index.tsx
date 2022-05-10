import { Container, Flex } from "@chakra-ui/react";
import Carousel from "../src/components/carousel";
// import Cart from "../src/components/cart";
// import Details from "../src/components/details";
import Footer from "../src/components/footer";

const IndexPage = () => (
  <Container maxW="container.xl" p={0}>
    <Carousel />
    {/* Responsive UI! Arrays and objects (for <3 breakpoints) */}
    {/* <Flex
      // Functional scrolling (?). {"smallest"/deafult, medium and up}
      h={{ base: "auto", md: "100vh" }}
      // Y-padding by screen size, using an array of breakpoints: py={[small, medium, large]}.
      py={[0, 10, 20]}
      // Default is L->R (row). Set so smaller screens are T->B (column-reverse)
      direction={{ base: "column-reverse", md: "row" }}
    >
      <Details />
      <Cart />
    </Flex> */}
    <Footer />
  </Container>
);

export default IndexPage;
