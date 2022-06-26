import PageWrapper from "../src/components/PageWrapper";
import {
  Text,
  Container,
  VStack,
  UnorderedList,
  ListItem,
  Link,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Heading,
} from "@chakra-ui/react";
import ColorHero, { ColorHeroProps } from "../src/components/Heros/ColorHero";

const heroProps: ColorHeroProps = {
  variant: "mediumHero",
  heading: "Contextual Predictive Tool",
  text: `Intended for use during the preparation and research before an engineering project, this core resource helps to identify non-engineering conditions that should be considered in designing and implementing sustainable infrastructure.`,
  bgColor: "illiniBlue",
  divider: true,
};

export default function PredictiveToolPage() {
  return (
    <PageWrapper {...{ mainTitle: "Predictive Tool", category: "Resources" }}>
      <ColorHero {...heroProps} />
      <Container pt="2em" pb={{ base: "2em", md: "3em", lg: "4em" }}>
        <VStack p={["1.5em", "2em"]} spacing="1em" bgColor="white" align="left">
          <Text variant="article">
            The Predictive Tool is a list of survey questions about various
            non-engineering conditions of a recipient community. It serves a
            dual-purpose: its results provide greater insight as to which
            non-technical influences impact the community the most, and the
            process of filling out the survey allows practitioners to examine
            and understand the client community more deeply.
          </Text>
          <Heading fontWeight="bold">Core Influences</Heading>
          <UnorderedList pl="2em">
            <ListItem>
              <Text variant="article">
                <b>Cultural</b> - the influence of values and identities unique
                to a community
              </Text>
            </ListItem>
            <ListItem>
              <Text variant="article">
                <b>Political</b> - the influence of power dynamics within a
                society
              </Text>
            </ListItem>
            <ListItem>
              <Text variant="article">
                <b>Educational</b> - the desire to learn new concepts and
                acquire new knowledge
              </Text>
            </ListItem>
            <ListItem>
              <Text variant="article">
                <b>Mechanical</b> - the capacity to keep technology running
              </Text>
            </ListItem>
            <ListItem>
              <Text variant="article">
                <b>Economic</b> - the influence of monetary or material need
              </Text>
            </ListItem>
          </UnorderedList>
          <Text variant="article">
            Specifically, the survey is 41 questions rated on a 5-point Likert
            scale to evaluate the relative influences of critical
            non-engineering conditions for the client community.{" "}
            <b>These questions are for the practitioners to answer.</b> Looking
            more deeply at a community will help engineers understand the
            values, beliefs, and identities that determine whether a society
            will accept, adopt and evolve the infrastructure they design.
          </Text>
          <Heading fontWeight="bold">How to Access the Predictive Tool</Heading>
          <Alert
            status="warning"
            variant="subtle"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            p={["1em", "2em"]}
          >
            <AlertIcon boxSize="3em" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Tool Access is on a Different Website
            </AlertTitle>
            <AlertDescription w="full" fontSize={["sm", "md"]}>
              As this new website is still under development,{" "}
              <b>account access to the tool is still on the old site</b>. <br />
              Please note that{" "}
              <Link href="/" variant="underline">
                contextual.<b>engineering</b>...
              </Link>{" "}
              is our new domain and{" "}
              <Link
                href="https://contextual.web.illinois.edu/"
                variant="underline"
                isExternal
              >
                contextual.<b>web</b>...
              </Link>{" "}
              is our old one.
            </AlertDescription>
          </Alert>
          <VStack align="left" pl="1em">
            <Text variant="article">
              <b>1.</b> Create an account on our old site at{" "}
              <Link
                variant="underline"
                href="https://contextual.web.illinois.edu/register/"
                isExternal
              >
                https://contextual.<b>web</b>.illinois.edu/register/
              </Link>
              .
            </Text>
            <Text variant="article">
              <b>2.</b> Please wait up to a few days for us to approve your
              account. You should get an email notifcation once this happens.
            </Text>
            <Text variant="article">
              <b>3.</b> Log into our old site at{" "}
              <Link
                variant="underline"
                href="https://contextual.web.illinois.edu/account/"
                isExternal
              >
                https://contextual.<b>web</b>.illinois.edu/account/
              </Link>
              .
            </Text>
            <Text variant="article">
              <b>4.</b> Click &quot;Download the Predictive Text Tool&quot; near
              the <b>bottom</b> of this page:{" "}
              <Link
                variant="underline"
                href="https://contextual.web.illinois.edu/tool/"
              >
                https://contextual.<b>web</b>.illinois.edu/tool/
              </Link>
              .
            </Text>
          </VStack>
        </VStack>
      </Container>
    </PageWrapper>
  );
}
