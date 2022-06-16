import { VStack, Container, Divider, Heading, Text } from "@chakra-ui/react";

export default function Hero(text: string, color?: string) {
  return (
    <VStack
      py={{ base: "2em", md: "3em", lg: "4em" }}
      h="full"
      // Covers NavBar boxShadow?
      bgColor="heritageOrange.100"
    >
      <Container justifyContent="center" centerContent>
        <Heading
          color="cloudWhite.50"
          textStyle="italics"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
        >
          Projects
        </Heading>
        <Divider m="1em" borderColor="cloudWhite.50" />
        <Text color="cloudWhite.50" fontSize={{ base: "14px", sm: "1em" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Container>
    </VStack>
  );
}
