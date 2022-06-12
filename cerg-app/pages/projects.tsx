import {
  Container,
  Heading,
  Text,
  VStack,
  Divider,
  Box,
} from "@chakra-ui/react";
import Footer from "../src/components/Footer";
import NavBar from "../src/components/NavBar/NavBar";
import ProjectCard from "../src/components/ProjectCard";
import { projects } from "../src/types/projects";

const Hero = () => {
  return (
    <VStack
      py={{ base: "2em", md: "3em", lg: "4em" }}
      h="full"
      bg="heritageOrange.100"
    >
      <Container justifyContent="center" centerContent>
        <Heading
          color="cloudWhite.50"
          textStyle="italics"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
        >
          Projects
        </Heading>
        <Divider m="1em" borderColor="cloudWhite.50" />
        <Text color="cloudWhite.50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Container>
    </VStack>
  );
};

export default function ProjectsPage() {
  return (
    <Box bg="archesBlue.50">
      <NavBar {...{ label: "Research", childLabel: "Projects" }} />
      <Hero />
      <Container>
        <VStack py="2em" spacing="2em">
          {projects.map((project) => {
            const index = projects.indexOf(project);
            return (
              <ProjectCard key={project.title} {...project} index={index} />
            );
          })}
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
}
