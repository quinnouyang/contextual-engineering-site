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
import CombinedLogo from "./combined-logo";

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
            <CombinedLogo />
            <Heading size="md">Contextual Engineering Research Group</Heading>
            <Text fontSize="sm">Copyright © 2022. All rights reserved.</Text>
          </Stack>
          <Spacer />
          <Flex
            w="32vw"
            wrap="wrap"
            justifyContent="right"
            columnGap={4}
            rowGap={2}
          >
            <Link fontWeight="semibold" href="#">
              About
            </Link>
            <Link fontWeight="semibold" href="#">
              People
            </Link>
            <Link fontWeight="semibold" href="#">
              Research
            </Link>
            <Link fontWeight="semibold" href="#">
              Contact
            </Link>
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
}
