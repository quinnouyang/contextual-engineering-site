import { VStack, Container, Divider, Heading, Text } from "@chakra-ui/react";

export type ImageHeroProps = {
  readonly minH?: string | number;
  readonly heading: string;
  readonly text?: string;
  readonly textColor?: string;
  readonly image: string; // Ideally width of 2048px+
  readonly bgPosition?: string;
  readonly bgDarkness?: number; // 0 through 1
  readonly shadow?: boolean;
};

export default function ImageHero({
  minH,
  heading,
  text,
  textColor,
  image,
  bgPosition,
  bgDarkness,
  shadow,
}: ImageHeroProps) {
  bgDarkness = bgDarkness ?? 0.5;

  return (
    <VStack
      py={{ base: "3em", lg: "4em" }}
      minH={minH ?? "auto"}
      bgImage={`linear-gradient(rgba(0, 0, 0, ${bgDarkness}), rgba(0, 0, 0, ${bgDarkness})), url(${image})`}
      bgSize="cover"
      bgPos={bgPosition ?? "bottom"}
      boxShadow={
        // Unsure if desirable
        shadow === false ? undefined : "0 10px 6px -6px rgba(0, 0, 0, 0.1)"
      }
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
