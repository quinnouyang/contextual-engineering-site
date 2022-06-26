import { Container, SimpleGrid, Center } from "@chakra-ui/react";
import ColorHero, { ColorHeroProps } from "../src/components/Heros/ColorHero";
import PageWrapper from "../src/components/PageWrapper";
import ProjectCard from "../src/components/Cards/ProjectCard";
import { projects } from "../src/types/projects-types";

const heroProps: ColorHeroProps = {
  variant: "largeHero",
  heading: "Research Projects",
  text: `Taking place domestically and internationally, research initiatives by students and staff at CERG span a wide variety of applications, particularly in aiding rural communities. Many of these include analyses of contexual factors and infrastructural projects.`,
  divider: true,
  bgColor: "illiniBlue",
};

// Hard-coded minimum child width to fit container maxW (?)
export default function ProjectsPage() {
  return (
    <PageWrapper {...{ mainTitle: "Research Projects", category: "Research" }}>
      <ColorHero {...heroProps} />
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
