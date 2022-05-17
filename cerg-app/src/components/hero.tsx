import {
  Stack,
  Flex,
  Heading,
  Text,
  VStack,
  Container,
  Center,
  Box,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Center>
      <VStack
        h={"50vh"}
        maxW={{ base: "container.xs", sm: "container.sm", md: "container.md" }}
        justify="center"
      >
        <Heading
          /*as={"span"}*/ color={"illiniOrange"}
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
        >
          Meet the{" "}
          <Heading
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "0.3em",
              position: "absolute",
              bottom: "0.1em",
              left: 0,
              bg: "illiniOrange",
              zIndex: -1,
            }}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
          >
            Team.
          </Heading>
        </Heading>
      </VStack>
    </Center>
  );
}
