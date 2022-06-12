import { Center, Container, Flex, Heading, VStack } from "@chakra-ui/react";
import Footer from "../src/components/Footer";
import NavBar from "../src/components/NavBar/NavBar";
import ProjectCard from "../src/components/ProjectCard";
import { projects } from "../src/types/projects";

const Hero = () => {
  return (
    <Center h={"10em"}>
      <Heading
        color={"illiniOrange"}
        textStyle="italics"
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
      >
        Projects
      </Heading>
    </Center>
  );
};

export default function ProjectsPage() {
  return (
    <>
      <NavBar {...{ label: "Research", childLabel: "Projects" }} />
      <Hero />
      <Container>
        <VStack spacing="2em">
          {projects.map((project) => {
            const index = projects.indexOf(project);
            return (
              <ProjectCard key={project.title} {...project} index={index} />
            );
          })}
        </VStack>
      </Container>
      <Footer />
    </>
  );
}
