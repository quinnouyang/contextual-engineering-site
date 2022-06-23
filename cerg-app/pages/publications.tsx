import { Text, Container, VStack } from "@chakra-ui/react";
import { title } from "process";
import PublicationCard from "../src/components/Cards/PublicationCard";
import ColorHero, { ColorHeroProps } from "../src/components/Heros/ColorHero";
import PageWrapper from "../src/components/PageWrapper";
import { publications } from "../src/types/publications-types";

const heroProps: ColorHeroProps = {
  heading: "Publications",
  bgColor: "illiniBlue",
};
export default function PublicationsPage() {
  return (
    <PageWrapper {...{ mainTitle: "Publications", category: "Research" }}>
      <ColorHero {...heroProps} />
      <Container py={{ base: "2em", md: "3em", lg: "4em" }}>
        <Text mb="1em" fontSize="xl" fontWeight="semibold">
          {publications.length} Articles
        </Text>
        <VStack spacing="1em">
          {publications.map((pub, i) => (
            <PublicationCard
              key={i.toString() + title.substring(0, 7)}
              {...pub}
            />
          ))}
        </VStack>
      </Container>
    </PageWrapper>
  );
}
