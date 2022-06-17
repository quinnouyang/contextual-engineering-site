import { Container, Box, SimpleGrid, Center } from "@chakra-ui/react";
import Footer from "../src/components/Footer";
import Hero from "../src/components/Heros/ColorHero";
import NavBar from "../src/components/NavBar/NavBar";
import ProjectCard from "../src/components/ProjectCard";
import { projects } from "../src/types/projects";

export default function ProjectsPage() {
  return (
    <Box bg="lightGrey">
      <NavBar {...{ label: "Research", childLabel: "Projects" }} />
      <Hero {...{ text: "" }} />
      <Container maxW="container.xl" p="1em">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="1em">
          {projects.map((project) => {
            return (
              <Center w="full" key={project.title}>
                <ProjectCard {...project} />
              </Center>
            );
          })}
        </SimpleGrid>
      </Container>
      <Footer />
    </Box>
  );
}
