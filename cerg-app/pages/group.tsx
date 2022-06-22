import { Container, Flex } from "@chakra-ui/react";
import PageWrapper from "../src/components/PageWrapper";

export default function GroupPage() {
  return (
    <PageWrapper category={{ label: "About" }}>
      {/* Responsive UI! Arrays and objects (for < 3 breakpoints) */}
      <Container maxW="container.xl" p={0}>
        {/* <Flex
          // Functional scrolling (?). {"smallest"/deafult, medium and up}
          h={{ base: "auto", md: "100vh" }}
          // Y-padding by screen size, using an array of breakpoints: py={[small, medium, large]}.
          py={[0, 10, 20]}
          // Default is L->R (row). Set so smaller screens are T->B (column-reverse)
          direction={{ base: "column-reverse", md: "row" }}
        ></Flex> */}
      </Container>
    </PageWrapper>
  );
}
