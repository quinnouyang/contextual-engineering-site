import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ShortWordmark from "./short-wordmark";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      pos={"relative"}
      bottom={0}
      w={"full"}
    >
      <Container maxW="6xl">
        <HStack p={8}>
          <Stack>
            <ShortWordmark />
            <Heading fontSize={{ base: "sm", sm: "md", md: "lg" }}>
              Contextual Engineering Research Group
            </Heading>
            <Text fontSize={{ base: "x-small", sm: "sm" }}>
              Copyright © 2022. All rights reserved.
            </Text>
          </Stack>
          <Spacer />
          <Flex
            w="32vw"
            wrap="wrap"
            justifyContent="right"
            columnGap={4}
            rowGap={2}
          >
            {/* TO-DO: Centralize Link stylings */}
            <Link
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "md" }}
              href="#"
            >
              About
            </Link>
            <Link
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "md" }}
              href="#"
            >
              People
            </Link>
            <Link
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "md" }}
              href="#"
            >
              Research
            </Link>
            <Link
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "md" }}
              href="#"
            >
              Contact
            </Link>
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
}
