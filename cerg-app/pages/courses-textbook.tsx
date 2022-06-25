import { Container, VStack, Text, Image } from "@chakra-ui/react";
import ColorHero from "../src/components/Heros/ColorHero";
import PageWrapper from "../src/components/PageWrapper";

export default function CoursesTextbookPage() {
  return (
    <PageWrapper
      {...{ mainTitle: "Courses & Textbook", category: "Resources" }}
    >
      <ColorHero
        {...{
          heading:
            "Contextualized Design of Rural...[title]",
        }}
      />
      <Container py={{ base: "2em", md: "3em", lg: "4em" }}>
        <Image
          src="/images/spring-measurement-students.jpeg"
          objectFit="cover"
          h="md"
        />
        <VStack p="2em" spacing="1em" bgColor="white" align="left">
          <Text fontSize={{ base: "md", md: "lg" }}>
            This project is using a case study of energy needs in the Navajo
            Nation to better understand how the local social, political,
            cultural, and economic contexts influences the selection of the most
            appropriate engineering design solutions for rural and remote
            communities.
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }}>
            The case study focuses on a partnership between CERG, the NGO
            Moonshot Missions, and the Bodaway Gap Chapter of the Navajo Nation
            to identify and implement the most sustainable solutions to address
            water and energy needs, based specifically on the community needs.
            Publicly available news reports indicate that around 30% of homes on
            the reservation lack electricity, and 40% lack running water, but
            these succinct numbers belie a much more complex needs profile,
            which many outside organization driven attempts in the past have
            failed to recognize. This partnership works closely with the local
            governing board to recognize the capabilities of what can
            realistically be maintained, and what are the natural inclinations
            of the community towards specific technologies.
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }}>
            The research combines ethnographic methods of societal
            investigations with traditional engineering disciplines. The
            research is heavily interdisciplinary, drawing from electrical
            engineering, hydrology, civil engineering, sociolinguistics, and
            ethnography.
          </Text>
        </VStack>
      </Container>
    </PageWrapper>
  );
}
