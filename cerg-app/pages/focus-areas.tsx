import {
  Container,
  VStack,
  Heading,
  Text,
  Image,
  AspectRatio,
  Stack,
} from "@chakra-ui/react";
import ColorHero, { ColorHeroProps } from "../src/components/Heros/ColorHero";
import PageWrapper from "../src/components/PageWrapper";
import { focusAreas } from "../src/types/focus-areas-types";

const heroProps: ColorHeroProps = {
  variant: "largeHero",
  heading: "Focus Areas",
  text: "Much of the research at CERG falls under one or more focus areas that surround understanding client contexts in a variety of situations. This non-exhaustive list captures some of the core applications of contextual engineering.",
  divider: true,
};

export default function FocusAreasPage() {
  return (
    <PageWrapper {...{ mainTitle: "Focus Areas", category: "Research" }}>
      <ColorHero {...heroProps} />
      <Container py={["1em", "2em", "3em"]} centerContent>
        <VStack spacing={["1em", "1.5em"]} maxW={{ base: "32em", md: "none" }}>
          {focusAreas.map(({ label, description, image }, i) => (
            <Stack
              key={label}
              direction={{
                base: "column-reverse",
                md: i % 2 === 0 ? "row" : "row-reverse",
              }}
              spacing={0}
            >
              <VStack
                w={{ base: "full", md: "60%" }}
                p={["1.5em", "2em"]}
                align="left"
                bgColor="white"
                borderLeftWidth={i % 2 === 0 ? "1em" : 0}
                borderRightWidth={i % 2 !== 0 ? "1em" : 0}
                borderColor={i % 2 === 0 ? "illiniOrange" : "illiniBlue"}
              >
                <Heading fontWeight="bold" fontSize={["xl", "2xl", "3xl"]}>
                  {label}
                </Heading>
                <Text variant="article">{description}</Text>
              </VStack>
              <AspectRatio
                ratio={1}
                w={{ base: "full", md: "50%" }}
                maxH={{ base: "20em", md: "full" }}
              >
                <Image src={image} alt={image} />
              </AspectRatio>
            </Stack>
          ))}
        </VStack>
      </Container>
    </PageWrapper>
  );
}
