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
  // minH: { base: "auto", md: "20em" },
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
  bgColor: "illiniBlue",
  text: "A diverse group of students and researchers from the University of Illinois Urbana-Champaign. Beyond typical engineering backgrounds, members bring a wide variety of experiences, skills, and knowledge to incorporate technical design with the social sciences and humanities.",
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
