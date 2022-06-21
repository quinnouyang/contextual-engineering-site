import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import BioCard from "../src/components/BioCard";
import { people, Person } from "../src/types/people-types";
import PageWrapper from "../src/components/PageWrapper";
import ColorHero, { ColorHeroProps } from "../src/components/Heros/ColorHero";

const heroProps: ColorHeroProps = {
  minH: { base: "auto", md: "20em" },
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
    <PageWrapper category={{ label: "People" }}>
      <ColorHero {...heroProps} />
      <Flex
        wrap="wrap"
        gap="1em"
        justify="center"
        m={{ base: "2em", sm: "4em" }}
      >
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
      <Box h="15em" />
    </PageWrapper>
  );
}
