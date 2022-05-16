import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  Show,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import FullWordmark from "../figures/full-wordmark";
import ShortWordmark from "../figures/short-wordmark";
import VerticalDivider from "../figures/vertical-divider";
import { FOOTER_ITEMS, NavItem } from "../types/navigation";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      // position="relative"
      // bottom={0}
    >
      <Container
        maxW={{ base: "container.sm", md: "container.md", lg: "container.lg" }}
      >
        <Flex py="2em">
          <VStack align="center" alignItems={"flex-start"}>
            <FooterLogo />
            <HStack>
              <Text fontSize={{ base: "x-small", sm: "sm" }}>
                Copyright © 2022. All rights reserved.
              </Text>
              <Divider orientation="vertical" borderColor={"illiniBlue"} />
              <Text
                as={Link}
                href="https://www.vpaa.uillinois.edu/resources/web_privacy"
                _hover={{ textDecoration: "none", color: "illiniOrange" }}
                fontSize={{ base: "x-small", sm: "sm" }}
              >
                Privacy Policy
              </Text>
              <Divider orientation="vertical" borderColor={"illiniBlue"} />
              <Text
                as={Link}
                href="https://www.vpaa.uillinois.edu/resources/cookies"
                _hover={{ textDecoration: "none", color: "illiniOrange" }}
                fontSize={{ base: "x-small", sm: "sm" }}
              >
                Cookies
              </Text>
            </HStack>
          </VStack>
          <Spacer />
          <Flex
            wrap="wrap"
            justifyContent="right"
            align={"center"}
            columnGap={"1em"}
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

// TO-DO: Breaks at width 768px (iPad mini), which is the `md` breakpoint
const FooterLogo = () => {
  return (
    <Flex
      align={"center"}
      alignItems="flex-start"
      direction={{ base: "column", md: "row" }}
      h="full"
    >
      {/* <Show above="md"> */}
      <Flex height={{ base: "2em", md: "3em" }}>
        <Show above="md">
          <FullWordmark />
        </Show>
        <Show below="md">
          <ShortWordmark />
        </Show>
      </Flex>
      <Show above="md">
        <VerticalDivider style={{ margin: "0 1em 0 1em" }} />
      </Show>
      <Link href={"/#"} _hover={{ textDecoration: "none" }}>
        <Heading
          fontSize={{ base: "md", md: "lg" }}
          _hover={{ color: "illiniOrange" }}
        >
          Contextual Engineering <br /> Research Group
        </Heading>
      </Link>
    </Flex>
  );
};

// TO-DO: Set as a variant
const CustomLink = ({ label, href }: NavItem) => {
  return (
    <Link
      fontWeight={"semibold"}
      fontSize={{ base: "sm", md: "md" }}
      href={href}
      _hover={{ textDecoration: "none", color: "illiniOrange" }}
    >
      {label}
    </Link>
  );
};
