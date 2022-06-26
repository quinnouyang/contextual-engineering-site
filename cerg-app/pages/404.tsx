import { Button, Container, Heading, Link, Text } from "@chakra-ui/react";
import PageWrapper from "../src/components/PageWrapper";

export default function ErrorPage() {
  return (
    <PageWrapper {...{ mainTitle: "404 Error" }}>
      <Container h="full" centerContent>
        <Heading mt="1em">404 Error: This page does not exist!</Heading>
        <Text p="1em" fontSize="lg" fontWeight="medium" align="center">
          Sorry, you probably accessed a mistyped or outdated link, which is
          especially possible as this website is new and under development. If
          you&apos;re looking for our old website,{" "}
          <Link href="http://contextual.web.illinois.edu/" variant="underline">
            click here
          </Link>
          . Otherwise...
        </Text>
        <Button
          as={Link}
          href="/"
          bgColor="illiniOrange"
          color="white"
          _hover={{ color: "white", bgColor: "illiniBlue" }}
        >
          Take me home!
        </Button>
      </Container>
    </PageWrapper>
  );
}
