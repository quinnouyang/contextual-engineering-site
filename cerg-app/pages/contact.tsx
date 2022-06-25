import { Container, Text } from "@chakra-ui/react";
import ColorHero, { ColorHeroProps } from "../src/components/Heros/ColorHero";
import PageWrapper from "../src/components/PageWrapper";

const heroProps: ColorHeroProps = {
  variant: "largeHero",
  heading: "Contact Us",
};

export default function TemplatePage() {
  return (
    <PageWrapper {...{ mainTitle: "Contact Us" }}>
      <ColorHero {...heroProps} />
      <Container py="3em">
        <Text fontSize="xl">Email: contextual-engineering@illinois.edu</Text>
        <Text fontSize="xl">Phone number: n/a</Text>
        <Text fontSize="xl">Address: n/a</Text>
      </Container>
    </PageWrapper>
  );
}
