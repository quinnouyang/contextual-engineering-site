import { Container, Heading } from "@chakra-ui/react";
import PageWrapper from "../src/components/PageWrapper";

export default function ErrorPage() {
  return (
    <PageWrapper>
      <Container maxW="container.lg" centerContent>
        <Heading m="1em">u in wrong place</Heading>
      </Container>
    </PageWrapper>
  );
}
