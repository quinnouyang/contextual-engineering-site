import { VStack, Container, Divider, Heading, Text } from "@chakra-ui/react";

export type ImageHeroProps = {
  readonly heading: string;
  readonly text?: string;
  readonly image: string;
  readonly textColor?: string;
};

export default function ImageHero({
  heading,
  text,
  image,
  textColor,
}: ImageHeroProps) {
  return (
    <VStack py={{ base: "3em", lg: "4em" }} h="full" bgImage={image}>
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
