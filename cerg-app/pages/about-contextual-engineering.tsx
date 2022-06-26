import {
  Container,
  Divider,
  Heading,
  Image,
  Link,
  VStack,
  Text,
  OrderedList,
  ListItem,
  Box
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

const paragraphs = [
  'The justification for contextual engineering is best viewed in the context of humanitarian engineering.',
  'Contextual engineering utilizes technical and societal knowledge to develop engineering solutions for the specific needs of client communities. When building infrastructure to solve a physical need, practitioners should not also seek to solve political, economic or social problems. Contextual Engineering also claims that understanding the social conditions of the community receiving the infrastructure and tailoring the infrastructure to the community should increase the probability of a successful infrastructure implementation.',
  'Contextual Engineering understands client communities in multiple ways First, Contextual Engineering takes into account global influences. These global influences could affect the conditions within the community as well as how the community interacts with the outside world. Second, Contextual Engineering must take into account the unique local physical and social characteristics. Different physical characteristics might affect the functioning of infrastructure. Different social characteristics might affect the operations of infrastructure. Third, one must take into account the motivations and expectations of each stakeholder. This will allow one to determine what drives stakeholders, including the practitioners themselves, to make decisions.  The practitioners then utilize this information to collaborate with the client to iteratively develop a solution (what is contextual engineering).',
  'Perhaps what distinguishes Contextual Engineering from Humanitarian Engineering, though, is the recognition that the engineers bring their own perspectives and experiences into any contextual engineering. For this reason, it is imperative that any Contextual investigator first look at themselves and their own context, allowing them to acknowledge and address any implicit biases and predispositions that may prevent them from fully understanding their client community.'
];

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
          {/*<CaptionedImage {...imageProps} />*/}
          <Text variant="article">
            The justification for contextual engineering is best viewed in the context of humanitarian engineering.
          </Text>
          <Text variant="article">
            Contextual engineering utilizes technical and societal knowledge to develop engineering solutions for the specific needs of client communities. When building infrastructure to solve a physical need, practitioners should not also seek to solve political, economic or social problems. Contextual Engineering also claims that understanding the social conditions of the community receiving the infrastructure and tailoring the infrastructure to the community should increase the probability of a successful infrastructure implementation.
          </Text>
          <Text variant="article">
            Contextual Engineering understands client communities in multiple ways.
          </Text>
          <Box>
            <OrderedList>
              <ListItem>
                <Text variant="article">
                  Contextual Engineering takes into account global influences. These global influences could affect the conditions within the community as well as how the community interacts with the outside world. 
                </Text>
              </ListItem>
              <ListItem>
                <Text variant="article">
                  Contextual Engineering must take into account the unique local physical and social characteristics. Different physical characteristics might affect the functioning of infrastructure. Different social characteristics might affect the operations of infrastructure.
                </Text>
              </ListItem>
              <ListItem>
                <Text variant="article">
                  One must take into account the motivations and expectations of each stakeholder. This will allow one to determine what drives stakeholders, including the practitioners themselves, to make decisions.  
                </Text>
              </ListItem>
            </OrderedList>
          </Box>
          <Text variant="article">
            The practitioners then utilize this information to collaborate with the client to iteratively develop a solution.
          </Text>
          <Text variant="article">
            Perhaps what distinguishes Contextual Engineering from Humanitarian Engineering, though, is the recognition that the engineers bring their own perspectives and experiences into any contextual engineering. For this reason, it is imperative that any Contextual investigator first look at themselves and their own context, allowing them to acknowledge and address any implicit biases and predispositions that may prevent them from fully understanding their client community.
          </Text>
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
