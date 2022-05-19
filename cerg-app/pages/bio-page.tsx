import {
  AspectRatio,
  Image,
  Container,
  Heading,
  Stack,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { Person } from "../src/types/team-members";

/**
 * ROUGH DESIGN
 * |---------------------|-----------
 * |  [FULL NAME]        |
 * |  pronouns, email,   |
 * |  crds, "position"   |
 * |---------------------|
 */
export default function BioPage(person: Person) {
  return (
    <Container>
      <Flex direction={["column", "row"]}>
        <Heading>{person.name}</Heading>
        <Spacer />
        <AspectRatio ratio={3 / 4} w="16em">
          <Image src={person.headshotPath} alt={person.name} />
        </AspectRatio>
      </Flex>
    </Container>
  );
}
