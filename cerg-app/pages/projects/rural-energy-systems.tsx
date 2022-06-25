import {
  Container,
  VStack,
  Text,
  Image,
  Heading,
  Link,
  Divider,
} from "@chakra-ui/react";
import CaptionedImage, {
  CaptionedImageProps,
} from "../../src/components/CaptionedImage";
import ImageHero, {
  ImageHeroProps,
} from "../../src/components/Heros/ImageHero";
import PageWrapper from "../../src/components/PageWrapper";
import { Publication } from "../../src/types/publications-types";

const heroProps: ImageHeroProps = {
  variant: "mediumHero",
  heading:
    "Contextualized Design of Rural Energy Systems for Improved Sustainability",
  text: (
    <Heading pt="1em" fontSize={["xl", "1xl", "2xl"]} color="white">
      Researchers: Abhi Chattopadhyay, Julissa Nunez
    </Heading>
  ),
  image: "/images/PXL_20220511_220036479.jpg",
  imagePos: "50% 70%",
  py: ["4em", "5em", "6em"],
};

const imageProps: CaptionedImageProps = {
  image: (
    <Image
      src="/images/PXL_20220511_210948153.MP.jpg"
      objectFit="cover"
      w="full"
      maxH="30em"
    />
  ),
  caption:
    "CERG researchers and local guides discuss a water tank from a previous project and survey the Navajo land.",
};

const relevantPublications: Publication[] = [
  {
    title:
      "The Need for Teaching Place-Based Contextualization For Sustainable Power System Infrastructure Design",
    link: "https://doi.org/10.1109/TPWRS.2021.3072069",
  },
  {
    title:
      "Contextual Challenges in using DERs to Advance Remote Electrification",
    link: "https://scholarspace.manoa.hawaii.edu/items/917251b2-40ee-4cc9-b3b8-19b6a47b422e/full",
  },
];

export default function SampleProject() {
  return (
    <PageWrapper
      {...{
        mainTitle: "Contextualized Design of Rural Energy Systems",
        includeSecondaryTitle: false,
        category: "Research",
      }}
    >
      <ImageHero {...heroProps} />
      <Container py={["2em", "3em", "4em"]}>
        <VStack p="2em" spacing="1em" bgColor="white" align="left">
          <Text variant="article">
            This project is using a case study of energy needs in the Navajo
            Nation to better understand how the local social, political,
            cultural, and economic contexts influences the selection of the most
            appropriate engineering design solutions for rural and remote
            communities.
          </Text>
          <Text variant="article">
            The case study is a partnership between CERG, the{" "}
            <Link
              href="https://www.moonshotmissions.org/"
              variant="underline"
              isExternal
            >
              NGO Moonshot Missions
            </Link>
            , the{" "}
            <Link
              href="https://www.hiddenspringsmission.org/"
              variant="underline"
              isExternal
            >
              Hidden Springs Mission
            </Link>
            , and the{" "}
            <Link
              href="https://bodaway.navajochapters.org/"
              variant="underline"
              isExternal
            >
              Bodaway Gap Chapter of the Navajo Nation
            </Link>{" "}
            to identify and implement the most sustainable solutions to address
            water and energy needs, based specifically on the community needs.
            Publicly available news reports indicate that around 30% of homes on
            the reservation lack electricity, and 40% lack running water, but
            these succinct numbers belie a much more complex needs profile,
            which many outside organization driven attempts in the past have
            failed to recognize. This investigation finds that the community
            needs are more pronounced for specific demographics within the
            community, and that this specific demographic also has a specific
            geographic distribution. To address the needs a suite of solutions
            is being proposed, ranging from ones that may be executed most
            expediently within the current institutional structure, to others
            that require more long-term planning and coordination.
          </Text>
          <CaptionedImage {...imageProps} />
          <Text variant="article">
            This partnership works closely with the local governing board to
            recognize the capabilities of what can realistically be maintained,
            and what are the natural inclinations of the community towards
            specific technologies. It is a recognition of the fact that any
            technology solution that does not take into account the capability
            of local labor to maintain it is unlikely to be sustainable in the
            long-term.
          </Text>
          <Text variant="article">
            The research combines ethnographic methods of societal
            investigations with traditional engineering disciplines. The
            research is heavily interdisciplinary, drawing from electrical
            engineering, hydrology, civil engineering, sociolinguistics, and
            ethnography.
          </Text>
          <Divider />
          <Heading fontSize={["lg", "xl"]}>Relevant Publications:</Heading>
          <VStack pl="2em" align="left">
            {relevantPublications.map(({ title, link }) => (
              <Link
                href={link}
                variant="underline"
                fontSize={["md", "lg"]}
                isExternal
              >
                {title}
              </Link>
            ))}
          </VStack>
        </VStack>
      </Container>
    </PageWrapper>
  );
}
