import { Box, Center, Flex, Heading, VStack } from "@chakra-ui/react";
import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";
import BioCard from "../src/components/biocard";
import { PEOPLE } from "../src/types/team-members";
import { useState } from "react";

const Hero = () => {
  return (
    <Center h={"10em"}>
      <VStack
        maxW={{ base: "container.xs", sm: "container.sm", md: "container.md" }}
        justify="center"
      >
        <Flex>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}>
            Meet the&nbsp;
          </Heading>
          <Heading
            color={"illiniOrange"}
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
  const [isOpen, toggleIsOpen] = useState(false);

  return (
    <>
      <NavBar {...{ label: "Team" }} />
      <Hero />
      <Flex
        wrap={"wrap"}
        gap={"1em"}
        justify="center"
        mx={{ base: "2em", sm: "4em" }}
      >
        {PEOPLE.map((person) => {
          return (
            <BioCard
              key={person.name}
              person={person}
              isOtherOpen={isOpen}
              toggleOpen={() => toggleIsOpen(!isOpen)}
            />
          );
        })}
      </Flex>
      <Box h="15em" />
      <Footer />
    </>
  );
}
