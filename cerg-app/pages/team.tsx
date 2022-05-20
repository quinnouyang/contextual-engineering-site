import { Center, Flex, VStack } from "@chakra-ui/react";
import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";
import BioCard from "../src/components/biocard";
import { PEOPLE } from "../src/types/team-members";
import { useState } from "react";
import FancyHeading from "../src/figures/fancy-heading";

const Hero = (props: { leftText: string; rightText: string }) => {
  return (
    <Center bgColor={"archesBlue.50"}>
      <VStack
        h={"25vh"}
        maxW={{ base: "container.xs", sm: "container.sm", md: "container.md" }}
        justify="center"
      >
        <FancyHeading leftText={props.leftText} rightText={props.rightText} />
      </VStack>
    </Center>
  );
};

export default function TeamPage() {
  const [isOpen, toggleIsOpen] = useState(false);

  return (
    <>
      <NavBar {...{ label: "Team" }} />
      <Hero leftText="Meet the " rightText="Team." />
      <Flex
        wrap={"wrap"}
        gap={"1em"}
        justify="center"
        m={{ base: "2em", sm: "4em" }}
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
      {/* <Hero leftText="Join the " rightText="Team." /> */}
      <Footer />
    </>
  );
}
