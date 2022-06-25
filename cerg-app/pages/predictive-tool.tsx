import PageWrapper from "../src/components/PageWrapper";
import { Text, Container, VStack, UnorderedList, ListItem, Box } from "@chakra-ui/react";
import ColorHero from "../src/components/Heros/ColorHero";

export default function PredictiveToolPage() {
  return (
    <PageWrapper
      {...{ mainTitle: "Predictive Tool", category: "Resources" }}
    >
      <ColorHero heading="Predictive Tool"/>
      <Container margin="10px">
        <VStack spacing="10px" align="flex-start">
          <Text>
            This tool is intended to be used by practitioners while preparing and researching for an engineering project. It is designed to help you identify non-engineering conditions that should be considered in designing and implementing a contextually engineered infrastructure for sustainability and durability.
          </Text>
          <Text>
            The Predictive Tool is composed of a list of questions that address various non-engineering conditions for the community. It serves a double purpose - the results of the survey will provide greater insight as to which non-technical influences impact this community the most, and the process of filling out the survey allows you to examine and understand the client community more deeply.
          </Text>
          <Text>
              The five non-technical influences used by the Predictive Tool are:
          </Text>
          <Box>
            <UnorderedList>
              <ListItem>
                Cultural - the influence of values and identities unique to a community
              </ListItem>
              <ListItem>
                Political - the influence of power dynamics within a society
              </ListItem>
              <ListItem>
                Educational - the desire to learn new concepts and acquire new knowledge
              </ListItem>
              <ListItem>
                Mechanical - the capacity to keep things running
              </ListItem>
              <ListItem>
                Economic - the influence of material need (any necessary resources, not just money)
              </ListItem>
            </UnorderedList>
          </Box>
          <Text>
            The Survey predictive tool provides you with a list of 41 questions (rated on a 5-point Likert scale) to evaluate relative influences of critical non-engineering conditions for the community with which you’re working. The influences under consideration are cultural, political, educational, technical and economic, but the questions you answer may assess multiple conditions. 
          </Text>
          <Text>
            These questions are for YOU to answer, and looking more deeply at your client community to learn the answers for yourself will help you to better understand the values, beliefs and identities that determine whether a society will accept, adopt and evolve the infrastructure you design.
          </Text>
        </VStack>
      </Container>
    </PageWrapper>
  );
}