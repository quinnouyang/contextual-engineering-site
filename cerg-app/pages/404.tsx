import { Button, Container, Heading, Link, Text } from "@chakra-ui/react";
import PageWrapper from "../src/components/PageWrapper";

export default function ErrorPage() {
  return (
    <PageWrapper>
      <Container maxW="container.xl" centerContent>
        <Heading m="1em">
          either u got a wrong/outdated link or i broke something:(
        </Heading>
        <Button
          as={Link}
          href="/"
          bgColor="illiniOrange"
          color="white"
          _hover={{ color: "white", bgColor: "illiniBlue" }}
        >
          Take me home!
        </Button>
        <Text py="1em">(watch this be broken too lol)</Text>
      </Container>
    </PageWrapper>
  );
}
