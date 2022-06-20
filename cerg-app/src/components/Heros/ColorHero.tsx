import { VStack, Container, Divider, Heading, Text } from "@chakra-ui/react";

export type ColorHeroProps = {
  readonly heading: string;
  readonly text?: string;
  readonly bgColor?: string;
  readonly textColor?: string;
};

export default function ColorHero({
  heading,
  text,
  bgColor,
  textColor,
}: ColorHeroProps) {
  return (
    <VStack
      py={{ base: "3em", lg: "4em" }}
      h="full"
      bgColor={bgColor ?? "heritageOrange.100"}
    >
      <Container>
        <Heading
          color={textColor ?? "white"}
          fontSize={{ base: "4xl", lg: "6xl" }}
          fontWeight="bold"
        >
          {heading}
        </Heading>
        {text ? (
          <>
            <Divider
              my={{ base: "1.5em", lg: "2em" }}
              borderColor={textColor ?? "white"}
            />
            <Text
              color={textColor ?? "white"}
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="medium"
            >
              {text}
            </Text>
          </>
        ) : null}
      </Container>
    </VStack>
  );
}
