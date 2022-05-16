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
import { FOOTER_ITEMS, NavItem } from "../types/navigation";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container maxW="container.lg">
        <Flex paddingTop={8} paddingBottom={8}>
          <Stack>
            <Link href="http://illinois.edu/">
              <ShortWordmark />
            </Link>
            <Heading
              as={Link}
              href={"/#"}
              _hover={{ textDecoration: "none", color: "illiniOrange" }}
              fontSize={{ base: "sm", sm: "md", md: "lg" }}
            >
              Contextual Engineering Research Group
            </Heading>
            <Text fontSize={{ base: "x-small", sm: "sm" }}>
              Copyright © 2022. All rights reserved.
            </Text>
          </Stack>
          <Spacer minW="10vw" />
          <Flex
            wrap="wrap"
            justifyContent="right"
            alignContent={"center"}
            columnGap={4}
            rowGap={2}
          >
            {FOOTER_ITEMS.map((item) => {
              return <CustomLink {...item} />;
            })}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

// TO-DO: Set as a variant
const CustomLink = ({ label, href }: NavItem) => {
  return (
    <Link
      fontWeight={"semibold"}
      fontSize={{ base: "sm", sm: "md" }}
      href={href}
      _hover={{ textDecoration: "none", color: "illiniOrange" }}
    >
      {label}
    </Link>
  );
};
