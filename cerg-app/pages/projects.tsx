import { Container, SimpleGrid, Center, Text } from "@chakra-ui/react";
import ImageHero, { ImageHeroProps } from "../src/components/Heros/ImageHero";
import PageWrapper from "../src/components/PageWrapper";
import ProjectCard from "../src/components/Cards/ProjectCard";
import { projects } from "../src/types/projects-types";

const heroProps: ImageHeroProps = {
  variant: "largeHero",
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
  image: "/images/mayor-interview-2.JPG",
  imagePos: "50% 60%",
};

// Hard-coded minimum child width to fit container maxW (?)
export default function ProjectsPage() {
  return (
    <PageWrapper {...{ mainTitle: "Research Projects", category: "Research" }}>
      <ImageHero {...heroProps} />
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
