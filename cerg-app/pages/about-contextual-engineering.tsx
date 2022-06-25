import {
  Container,
  Divider,
  Heading,
  Image,
  Link,
  VStack,
  Text,
} from "@chakra-ui/react";
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
      stakeholder motivations, capabilities, and values
    </Heading>
  ),
};

type Information = {
  label: string;
  link: string;
};

const moreInformation: Information[] = [
  {
    label: "Predictive Tool",
    link: "/predictive-tool",
  },
  {
    label: "Research Projects",
    link: "/research-projects",
  },
  {
    label: "Publications",
    link: "/publications",
  },
];

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
    "Contextual engineers assess the physical conditions surrounding water resources for the community of El Tablon, Honduras, a water-stressed Lenca community that would not consider drawing from the nearby springs that hold sacred meaning to their culture.",
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
          <Text variant="article">...</Text>
          <Divider />
          <Heading fontSize={["lg", "xl"]}>To Learn More:</Heading>
          <VStack pl="2em" align="left">
            {moreInformation.map(({ label, link }) => (
              <Link
                key={label}
                href={link}
                variant="underline"
                w="fit-content"
                fontSize={["md", "lg"]}
              >
                {label}
              </Link>
            ))}
          </VStack>
        </VStack>
      </Container>
    </PageWrapper>
  );
}
