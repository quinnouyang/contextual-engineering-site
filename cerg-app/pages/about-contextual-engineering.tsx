import { Container, Heading, Image, VStack, Text } from "@chakra-ui/react";
import CaptionedImage, {
  CaptionedImageProps,
} from "../src/components/CaptionedImage";
import ColorHero, { ColorHeroProps } from "../src/components/Heros/ColorHero";
import PageWrapper from "../src/components/PageWrapper";

const heroProps: ColorHeroProps = {
  variant: "largeHero",
  heading: "Contextual Engineering",
  text: (
    <Heading
      pl="2em"
      color="white"
      fontSize={["lg", "xl", "2xl"]}
      borderLeft="1px"
    >
      The creative application of science, mathematical methods, societal
      understanding, and place-based knowledge to address a physical need that
      serves the user of the innovation while recognizing the influence of
      stakeholder motivations, capabilities, and values.
    </Heading>
  ),
  bgColor: "illiniBlue",
};

const imageProps: CaptionedImageProps = {
  image: (
    <Image
      src="/images/spring-measurement-students.jpeg"
      w="full"
      h="md"
      objectFit="cover"
      alt="Engineers assessing local water resources in El Tablon, Honduras."
    />
  ),
  caption:
    "Contextual engineers assess the physical conditions surrounding water resources for the community of El Tablon, Honduras, a water-stressed Lenca community that would not consider drawing from the nearby springs as they held sacred meaning to their culture.",
};

export default function ContextualEngineeringPage() {
  return (
    <PageWrapper
      {...{
        mainTitle: "About Contextual Engineering | University of Illinois",
        includeSecondaryTitle: false,
        category: "About",
      }}
    >
      <ColorHero {...heroProps} />
      <Container pt="2em" pb={{ base: "2em", md: "3em", lg: "4em" }}>
        <VStack p={["1.5em", "2em"]} spacing="1em" bgColor="white" align="left">
          <CaptionedImage {...imageProps} />
          <Text variant="article">
            The justification for Contextual Engineering can be best viewed
            through the perspective of humanitarian engineering. When projects
            fail to last under a recipient community's care, it is often from
            popular but false assumptions: that industrialized infrastructure
            must also develop a society's economic and social conditions, and
            that their failure to maintain infrastructure stems from
            insufficient training.
          </Text>
          <Text variant="article">
            Challenging these assumptions, Contextual Engineering utilizes
            technical and societal knowledge to construct solutions for the
            specific needs of client communities, increasing the probability of
            successful implementation and adoption. Additionally, in
            Contextual Engineering, solving physical needs supercedes solving
            political, economic, or social problems.
          </Text>
          <Text variant="article">
            Perhaps what distinguishes Contextual Engineering from humanitarian
            engineering, though, is recognizing that engineers bring their own
            perspectives and experiences into any project. Therefore, it is
            imperative that any investigator first look at themselves and their
            own context, so they acknowledge and address any implicit biases and
            predispositions that may prevent them from fully understanding their
            client community.
          </Text>
          <Heading fontWeight="semibold">Core Considerations</Heading>
          <VStack pl="1em">
            <Text variant="article">
              <b>1. Take into account global influences,</b> as their effects on
              community dyanmics and how they interact with the outside world
              often largely determine how they respond and perceive foreign
              assistance and engineering.
            </Text>
            <Text variant="article">
              <b>
                2. Understand unique local physical and social characteristics.
              </b>{" "}
              These often inform how communities use their existing technology
              and how they would operate other infrastructure.
            </Text>
            <Text variant="article">
              <b>
                3. Consider the motivations and expectations of each
                stakeholder.
              </b>{" "}
              Identify what drives stakeholders, including the practioners
              themselves, can provide valuable insight into the logistics and
              ramifications of an initiative.
            </Text>
            <Text variant="article">
              <b>
                4. Collaborate and iteratively work with the client.
              </b>{" "}
              Collaboration and iterative design increases client feedback and insight
              into how the client will use the infrastructure.
            </Text>
          </VStack>
        </VStack>
      </Container>
    </PageWrapper>
  );
}
