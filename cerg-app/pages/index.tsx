import HomepageHero from "../src/components/Heros/HomepageHero";
import PageWrapper from "../src/components/PageWrapper";
import {
  VStack,
  HStack,
  Text,
  Container,
  Box,
  Center,
  Button,
  Link,
  Image,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";

export default function Homepage() {
  return (
    <PageWrapper
      {...{
        mainTitle: "Contextual Engineering Research Group | UIUC",
        includeSecondaryTitle: false,
      }}
    >
      <HomepageHero />
      <Container py={["1em", "2em", "3em"]}>
        <VStack>
          <Box p={["1.5em", "2em"]} bgColor="white" width="100%">
            <Text fontSize="3xl"><Center>What is Contextual Engineering?</Center></Text>
            <Text fontSize="xl">
              The creative application of science, mathematical methods, societal
              understanding, and place-based knowledge to address a physical need that
              serves the user of the innovation while recognizing the influence of
              stakeholder motivations, capabilities, and values.
            </Text>
          </Box>
          <Box p={["1.5em", "2em"]} bgColor="white" width="100%">
            <Text fontSize="3xl"><Center>Example Project: XYZ</Center></Text>
            <HStack>
              <Text variant="article">
                During this project we did stuff. And more stuff.
                During this project we did stuff. And more stuff.
                During this project we did stuff. And more stuff.
                During this project we did stuff. And more stuff.
                During this project we did stuff. And more stuff.
                During this project we did stuff. And more stuff.
                During this project we did stuff. And more stuff.
              </Text>
              <Image
                alt={"Some Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src="/images/IMG_0868-1024x768.jpeg"
              />
            </HStack>
            <HStack paddingTop="2em" justify="center">
              <Button
                as={Link}
                href="https://google.com/"
                isExternal
                size="lg"
                textColor="white"
                bg="illiniOrange"
                _hover={{ color: "white", bg: "illiniBlue" }}
              >
                Learn More&nbsp;
              </Button>
            </HStack>
          </Box>
          <Box p={["1.5em", "2em"]} bgColor="white" width="100%">
            <Text fontSize="3xl"><Center>Learn More</Center></Text>
            <UnorderedList>
              <ListItem>
                <Text variant="article">
                  <Link color="blue" href="/focus-areas">
                    Focus areas
                  </Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text variant="article">
                    <Link color="blue" href="/focus-areas">
                      Projects
                    </Link>
                  </Text>
                </ListItem>
            </UnorderedList>
          </Box>
      </VStack>
      </Container>
    </PageWrapper>
  );
}
