import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Show,
  Spacer,
  Text,
} from "@chakra-ui/react";
import FullWordmark from "../figures/full-wordmark";
import ShortWordmark from "../figures/short-wordmark";
import VerticalDivider from "../figures/vertical-divider";
import { FOOTER_ITEMS, FOOTER_EXTERNAL_ITEMS } from "../types/navigation";

export default function Footer() {
  return (
    <Box bg={"cloudWhite.50"}>
      <Container
        py="2em"
        maxW={{
          base: "container.sm",
          lg: "container.md",
          xl: "container.lg",
        }}
      >
        <Flex>
          <FooterLogo />
          <Spacer />
          <Flex
            wrap="wrap"
            align={{ base: "flex-end", sm: "center" }}
            direction={{ base: "column", sm: "row" }}
            columnGap={"1em"}
          >
            {FOOTER_ITEMS.map(({ label, href }) => {
              return (
                <Link
                  key={label}
                  href={href}
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight={"semibold"}
                >
                  {label}
                </Link>
              );
            })}
          </Flex>
        </Flex>
        <BottomInformation />
      </Container>
    </Box>
  );
}

// TO-DO: Breaks at width 768px (iPad mini), which is the `md` breakpoint
const FooterLogo = () => {
  return (
    <Flex
      alignItems="flex-start"
      direction={{ base: "column", lg: "row" }}
      rowGap={"0.5em"}
    >
      <Show above="lg">
        <FullWordmark height="3em" />
        <VerticalDivider
          style={{
            margin: "0 1em 0 1em",
            height: "3em" /* Hard-coded height */,
          }}
        />
      </Show>
      <Show below="lg">
        <ShortWordmark />
      </Show>
      <Heading
        as={Link}
        fontSize={{ base: "sm", md: "md", lg: "lg" }}
        href={"/#"}
      >
        Contextual Engineering <br /> Research Group
      </Heading>
    </Flex>
  );
};

const BottomInformation = () => {
  return (
    <Flex mt={"0.5em"}>
      <Flex columnGap={{ base: "0.5em", md: "1em" }} wrap="wrap">
        {FOOTER_EXTERNAL_ITEMS.map(({ label, href }) => {
          return (
            <Link key={label} href={href} fontSize={{ base: "xs", md: "sm" }} isExternal>
              {label}
            </Link>
          );
        })}
      </Flex>
      <Spacer />
      <Text fontSize={{ base: "xs", md: "sm" }}>
        Copyright © 2022<Show above="sm">. All rights reserved.</Show>
      </Text>
    </Flex>
  );
};
