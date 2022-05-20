import { Flex } from "@chakra-ui/react";
import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";
import BioCard from "../src/components/biocard";
import Hero from "../src/components/hero";
import { PEOPLE } from "../src/types/team-members";
import { useState } from "react";

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
      <Hero leftText="Join the " rightText="Team." />
      <Footer />
    </>
  );
}
