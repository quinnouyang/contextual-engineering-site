import { VStack, Container, Divider, Heading, Text } from "@chakra-ui/react";

export type ColorHeroProps = {
  readonly minH?: string | number | any;  // Need to limit to {base:, sm: }, etc. 
  readonly heading: string | React.ReactNode;
  readonly text?: string;
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
    <VStack
      py={{ base: "3em", lg: "4em" }}
      h="full"
      minH={minH ?? "auto"}
      bgColor={bgColor ?? "heritageOrange.100"}
      justify="center"
    >
      <Container>
        <>
          {typeof heading === "string" ? (
            <Heading
              color={textColor ?? "white"}
              fontSize={{ base: "4xl", lg: "6xl" }}
              fontWeight="bold"
            >
              {heading}
            </Heading>
          ) : (
            heading
          )}
          {divider}
          {text ? (
            <Text
              color={textColor ?? "white"}
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="medium"
            >
              {text}
            </Text>
          ) : null}
        </>
      </Container>
    </VStack>
  );
}
