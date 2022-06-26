import PageWrapper from "../src/components/PageWrapper";
import {
  Text,
  Container,
  VStack,
  OrderedList,
  UnorderedList,
  ListItem,
  Box,
  Center,
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
  text: `Intendend for use during the preparation and research of an engineering project, this core resource helps to identify non-engineering conditions that should be considered in designing and implementing sustainable infrastructure.`,
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
            non-technical influences impact this community the most, and the
            process of filling out the survey allows practitioners to examine
            and understand the client community more deeply.
          </Text>
          <Heading fontWeight="bold"></Heading>
          <Box>
            <UnorderedList>
              <ListItem>
                <Text variant="article">
                  Cultural - the influence of values and identities unique to a
                  community
                </Text>
              </ListItem>
              <ListItem>
                <Text variant="article">
                  Political - the influence of power dynamics within a society
                </Text>
              </ListItem>
              <ListItem>
                <Text variant="article">
                  Educational - the desire to learn new concepts and acquire new
                  knowledge
                </Text>
              </ListItem>
              <ListItem>
                <Text variant="article">
                  Mechanical - the capacity to keep things running
                </Text>
              </ListItem>
              <ListItem>
                <Text variant="article">
                  Economic - the influence of material need (any necessary
                  resources, not just money)
                </Text>
              </ListItem>
            </UnorderedList>
          </Box>
          <Text variant="article">
            The Survey predictive tool provides you with a list of 41 questions
            (rated on a 5-point Likert scale) to evaluate relative influences of
            critical non-engineering conditions for the community with which
            you're working. The influences under consideration are cultural,
            political, educational, technical and economic, but the questions
            you answer may assess multiple conditions.
          </Text>
          <Text variant="article">
            These questions are for YOU to answer. Looking more deeply at your
            client community will help you to better understand the values,
            beliefs and identities that determine whether a society will accept,
            adopt and evolve the infrastructure you design.
          </Text>
          <Alert
            status="warning"
            variant="subtle"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            p="2em"
          >
            <AlertIcon boxSize="3em" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Tool Access is on Our Old Website
            </AlertTitle>
            <AlertDescription>This is the</AlertDescription>
          </Alert>
          <Center>
            <Text fontSize="3xl">How to Access the Predictive Tool</Text>
          </Center>
          <OrderedList>
            <ListItem fontSize="xl">
              <Text variant="article">
                Create an account under 'Predictive Tool' at{" "}
                <Link
                  color="blue"
                  href="https://contextual.web.illinois.edu/tool/"
                >
                  https://contextual.web.illinois.edu/tool/
                </Link>
                .
              </Text>
            </ListItem>
            <ListItem fontSize="xl">
              <Text variant="article">
                Wait for your account to be approved. You should receive an
                email once your account has been approved.
              </Text>
            </ListItem>
            <ListItem fontSize="xl">
              <Text variant="article">
                Log in under 'Account' at{" "}
                <Link
                  color="blue"
                  href="https://contextual.web.illinois.edu/account/"
                >
                  https://contextual.web.illinois.edu/account/
                </Link>
                .
              </Text>
            </ListItem>
            <ListItem fontSize="xl">
              <Text variant="article">
                Download the Predictive Tool under 'Predictive Tool' at{" "}
                <Link
                  color="blue"
                  href="https://contextual.web.illinois.edu/tool/"
                >
                  https://contextual.web.illinois.edu/tool/
                </Link>
                .
              </Text>
            </ListItem>
          </OrderedList>
        </VStack>
      </Container>
    </PageWrapper>
  );
}
