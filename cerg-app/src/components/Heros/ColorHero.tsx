import {
  VStack,
  Container,
  Heading,
  Text,
  Box,
  Divider,
} from "@chakra-ui/react";

export type ColorHeroProps = {
  readonly variant: "largeHero" | "mediumHero" | "smallHero";
  readonly heading: string | React.ReactNode;
  readonly text?: string | React.ReactNode;
  readonly py?: string | number | any; // Need to limit to {base:, sm: }, etc.
  readonly fgColor?: string;
  readonly bgColor?: string;
  readonly divider?: boolean;
};

export default function ColorHero({
  variant,
  heading,
  text,
  py,
  fgColor,
  bgColor,
  divider,
}: ColorHeroProps) {
  return (
    <Box
      py={py ?? ["2em", "3em", "4em", "5em"]}
      bgColor={bgColor ?? "heritageOrange.100"}
    >
      <Container>
        <VStack align="left" spacing="1em">
          {typeof heading === "string" ? (
            <Heading
              variant={variant}
              maxW="container.md"
              color={fgColor ?? "white"}
            >
              {heading}
            </Heading>
          ) : (
            heading
          )}
          {divider === true ? ( // If not specified, assume false
            <Divider borderColor={fgColor ?? "white"} />
          ) : null}
          {typeof text === "string" ? (
            <Text variant="article" color={fgColor ?? "white"}>
              {text}
            </Text>
          ) : (
            text
          )}
        </VStack>
      </Container>
    </Box>
  );
}
