import {
  Box,
  Center,
  Flex,
  Heading,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Footer from "../src/components/Footer";
import NavBar from "../src/components/NavBar/NavBar";
import BioCard from "../src/components/BioCard";
import { PEOPLE } from "../src/types/team-members";

const Hero = () => {
  return (
    <Center h="10em">
      <VStack
        maxW={{ base: "container.xs", sm: "container.sm", md: "container.md" }}
        justify="center"
      >
        <Flex>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}>
            Meet the&nbsp;
          </Heading>
          <Heading
            color="illiniOrange"
            textStyle="italics"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
          >
            Team.
          </Heading>
        </Flex>
      </VStack>
    </Center>
  );
};

export default function TeamPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <NavBar {...{ label: "Team" }} />
      <Hero />
      <Flex
        wrap="wrap"
        gap="1em"
        justify="center"
        mx={{ base: "2em", sm: "4em" }}
      >
        {PEOPLE.map((person) => {
          return (
            <BioCard
              key={person.name}
              person={person}
              isOtherOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
            />
          );
        })}
      </Flex>
      <Box h="15em" />
      <Footer />
    </>
  );
}
