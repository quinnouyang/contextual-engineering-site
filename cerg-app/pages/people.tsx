import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import BioCard from "../src/components/Cards/BioCard";
import { people, Person } from "../src/types/people-types";
import PageWrapper from "../src/components/PageWrapper";
import ColorHero, { ColorHeroProps } from "../src/components/Heros/ColorHero";

const heroProps: ColorHeroProps = {
  variant: "largeHero",
  heading: (
    <Flex wrap="wrap">
      <Heading
        color="white"
        fontSize={{ base: "5xl", md: "6xl" }}
        fontWeight="bold"
      >
        Meet the&nbsp;
      </Heading>
      <Heading
        color="illiniOrange"
        fontSize={{ base: "5xl", md: "6xl" }}
        fontWeight="bold"
      >
        Team.
      </Heading>
    </Flex>
  ),
  text: "An extraordinary assembly of undergraduates, graduates, and staff from the University of Illinois Urbana-Champaign. Members bring a wide variety of experiences, skills, and knowledge to incorporate technical design with the social sciences and humanities.",
  divider: true,
  bgColor: "illiniBlue",
};

export type BioCardProps = {
  person: Person;
  isOtherOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export default function PeoplePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <PageWrapper {...{ mainTitle: "Our People", category: "People" }}>
      <ColorHero {...heroProps} />
      <Container
        maxW="container.xl"
        p={0}
        m={{ base: "1em", sm: "2em", md: "3em" }}
        pb="10em"
        alignSelf="center"
      >
        <Flex wrap="wrap" gap="1em" justify="center">
          {people.map((person, i) => {
            return (
              <BioCard
                key={i + person.name}
                person={person}
                isOtherOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
              />
            );
          })}
        </Flex>
      </Container>
    </PageWrapper>
  );
}
