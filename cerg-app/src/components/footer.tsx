import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ShortWordmark from "../figures/short-wordmark";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      // pos={"relative"}
      // bottom={0}
      // w={"full"}
    >
      <Container maxW="container.lg">
        <Flex paddingTop={8} paddingBottom={8} >
          <Stack>
            <ShortWordmark />
            <Heading fontSize={{ base: "sm", sm: "md", md: "lg" }}>
              Contextual Engineering Research Group
            </Heading>
            <Text fontSize={{ base: "x-small", sm: "sm" }}>
              Copyright © 2022. All rights reserved.
            </Text>
          </Stack>
          <Spacer minW="10vw"/>
          <Flex
            wrap="wrap"
            justifyContent="right"
            alignContent={"center"}
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
        </Flex>
      </Container>
    </Box>
  );
}
