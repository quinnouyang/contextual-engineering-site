import Icon from "@chakra-ui/icon";
import { EmailIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Image,
  Container,
  Heading,
  Text,
  Flex,
  Spacer,
  VStack,
  Box,
  Stack,
  HStack,
  Link,
} from "@chakra-ui/react";
import { Person } from "../src/types/team-members";

/**
 * ROUGH DESIGN
 * |---------------------|-----------|
 * |  [FULL NAME]        |           |
 * |  pronouns, contact, |  HEADSHOT |
 * |  creds, "position"  |           |
 * |---------------------|-----------|
 * |
 * |
 * |
 */
export default function BioPage(person: Person) {
  return (
    <Container>
      <Flex direction={["column", "row"]}>
        <VStack align={"flex-start"}>
          <Heading>{person.name}</Heading>
          <IconInfo iconType={EmailIcon}>{person.email}</IconInfo>
          <Text>{person.creds}</Text>
        </VStack>
        <Spacer maxW={"10vw"}/>
        <AspectRatio ratio={3 / 4} w="16em">
          <Image src={person.headshotPath} alt={person.name} />
        </AspectRatio>
      </Flex>
      <Text>{person.fullBio}</Text>
    </Container>
  );
}

type IconInfoProps = {
  iconType: any; // Technically ComponentWithAs<"svg", IconProps>, but import size is huge
  children?: string;
};

const IconInfo = ({ iconType, children }: IconInfoProps) => {
  return (
    <HStack>
      <Icon as={iconType} w="2em" h="2em" />
      <Text>{children}</Text>
    </HStack>
  );
};
