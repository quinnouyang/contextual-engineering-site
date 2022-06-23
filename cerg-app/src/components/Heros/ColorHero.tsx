import {
  VStack,
  Container,
  Divider,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";

export type ColorHeroProps = {
  readonly minH?: string | number | any; // Need to limit to {base:, sm: }, etc.
  readonly heading: string | React.ReactNode;
  readonly text?: string | React.ReactNode;
  readonly bgColor?: string;
  readonly textColor?: string;
  readonly divider?: JSX.Element; // Need to limit to <Divider />
};

export default function ColorHero({
  minH,
  heading,
  text,
  bgColor,
  textColor,
  divider,
}: ColorHeroProps) {
  return (
    <Box
      minH={minH ?? "auto"}
      py={{ base: "4em", lg: "5em" }}
      bgColor={bgColor ?? "heritageOrange.100"}
      boxShadow={
        // Unsure if desirable
        "0 10px 6px -6px rgba(0, 0, 0, 0.1)"
      }
    >
      <Container>
        <VStack align="left" spacing="1.5em">
          {typeof heading === "string" ? (
            <Heading
              color={textColor ?? "white"}
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
            >
              {heading}
            </Heading>
          ) : (
            heading
          )}
          {divider}
          {typeof text === "string" ? (
            <Text
              color={textColor ?? "white"}
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="medium"
            >
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
