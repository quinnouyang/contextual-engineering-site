import {
  Container,
  Divider,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import CaptionedImage, {
  CaptionedImageProps,
} from "../src/components/CaptionedImage";
import ColorHero, { ColorHeroProps } from "../src/components/Heros/ColorHero";
import PageWrapper from "../src/components/PageWrapper";

const heroProps: ColorHeroProps = {
  variant: "largeHero",
  heading: "About Us",
};

type Information = {
  label: string;
  link: string;
};

const moreInformation: Information[] = [
  {
    label: "People",
    link: "/people",
  },
  {
    label: "Focus Areas",
    link: "/focus-areas",
  },
  {
    label: "Research Projects",
    link: "/research-projects",
  },
];

const imageProps: CaptionedImageProps = {
  image: (
    <Image
      src="/images/Manu Picture.JPG"
      w="full"
      h="md"
      objectFit="cover"
      alt="Children surrounding a water tap in Cameroon"
    />
  ),
  caption:
    "School children in the village of Ntisaw, Cameroon, gather around a water tap to wash their hands.",
};

export default function AboutUsPage() {
  return (
    <PageWrapper {...{ mainTitle: "About Us", category: "About" }}>
      <ColorHero {...heroProps} />
      <Container pt="2em" pb={{ base: "2em", md: "3em", lg: "4em" }}>
        <VStack p={["1.5em", "2em"]} spacing="1em" bgColor="white" align="left">
          <CaptionedImage {...imageProps} />
          <Text variant="article">
            The Contextual Engineering Research Group (CERG) at the{" "}
            <Link href="http://illinois.edu/" variant="underline" isExternal>
              University of Illinois Urbana-Champaign
            </Link>{" "}
            (UIUC) investigates the ways in how engineers can work sustainably
            on projects in communities different from those they are familiar
            with. We explore the application of engineering technology
            throughout the world to evolve our understanding of appropriate
            technology and place-based design, striving to deliver tailored
            engineering solutions and expertise to people around the world: from
            those in modern industrialized cities to those in tradition-centered
            remote villages.
          </Text>
          <Text variant="article">
            Historically, we have placed heavy emphasis on rural societies,
            which are increasingly threatened by a global trend towards urban
            migration. These often include farming communities, where their loss
            can imperil the food security of nations without the resources to
            import supplies from other countries. We believe that rural access
            to basic needs like water, electricity, and roads will increase
            migration back to these breadbaskets of alternatively developed
            countries, supporting self-sufficiency and improved physical
            mobility of all citizens dependent upon local food.
          </Text>
          <Text variant="article">
            At the same time, we reassert our dedication to engineering as its
            own discipline, focusing on the unique responsibilities and
            challenges of technical design, unburdened by the characterizations
            of engineering as a social development process. The paradoxical
            unification of engineering with social sciences while separating
            technical problem-solving from other development responsibilities
            creates an entirely new way of pursuing technical solutions to
            engineering challenges around the world:{" "}
            <Link href="/about-contextual-engineering" variant="underline">
              contextual engineering
            </Link>
            .
          </Text>
          <Divider />
          <Heading fontSize={["lg", "xl"]}>More Information</Heading>
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
