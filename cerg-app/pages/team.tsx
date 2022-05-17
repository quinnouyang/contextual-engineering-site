import {
  Box,
  Center,
  Container,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";
import BioCard from "../src/components/biocard";
import Hero from "../src/components/hero";
import { PEOPLE } from "../src/types/team-members";

export default function TeamPage() {
  return (
    <Box>
      <NavBar {...{ label: "Team" }} />
      <Hero />
      <Container maxW={{ base: "container.lg" }}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap="1em">
          {PEOPLE.map((person) => {
            return <BioCard key={person.name} {...person} />;
          })}
          {/* x2 people! */}
          {PEOPLE.map((person) => {
            return <BioCard key={person.name} {...person} />;
          })}
        </SimpleGrid>
      </Container>
      <Footer />
    </Box>
  );
}
