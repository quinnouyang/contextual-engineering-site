import { Container, SimpleGrid, Center, Divider, Text } from "@chakra-ui/react";
import Hero, { ColorHeroProps } from "../src/components/Heros/ColorHero";
import PageWrapper from "../src/components/PageWrapper";
import ProjectCard from "../src/components/Cards/ProjectCard";
import { projects } from "../src/types/projects-types";

const heroProps: ColorHeroProps = {
  heading: "Research Projects",
  text: (
    <Text color="white" fontSize={{ base: "md", md: "lg" }} fontWeight="medium">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Text>
  ),
  divider: <Divider borderColor="white" />,
  bgColor: "illiniBlue",
};

// Hard-coded minimum child width to fit container maxW (?)
export default function ProjectsPage() {
  return (
    <PageWrapper category={{ label: "Research" }}>
      <Hero {...heroProps} />
      <Container maxW="container.xl" py={{ base: "2em", md: "3em", lg: "4em" }}>
        <SimpleGrid minChildWidth="20em" spacing="1.5em">
          {projects.map((project, i) => {
            return (
              // Arbitrary first 8 chars
              <Center key={i + project.title.substring(0, 7)}>
                <ProjectCard {...project} />
              </Center>
            );
          })}
        </SimpleGrid>
      </Container>
    </PageWrapper>
  );
}
