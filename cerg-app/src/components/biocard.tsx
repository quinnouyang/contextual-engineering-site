import {
  AspectRatio,
  Divider,
  Heading,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger as OrigPopoverTrigger,
  Text,
  VStack,
  Link,
  HStack,
} from "@chakra-ui/react";
import { Person } from "../types/team-members";

// Temporary fix: React 18 issue
export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

const CARD_WIDTH = "16em";

const CardInfo = (person: Person) => {
  return (
    <VStack p={"1em"}>
      <HStack>
        <Heading
          // as={Link}
          // href={"/" + person.name}
          fontSize={"1xl"}
          textAlign="center"
        >
          {person.name}
        </Heading>
      </HStack>
      <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
        {person.creds}
      </Text>
      <Divider />
      <Text fontSize={"sm"}>{person.shortBio}</Text>
    </VStack>
  );
};

/**
 * TO-DO
 * Design:
 * - Popover behavior: replace image or appear at button? Last row of popovers can overlap awkwardly. Bottom popovers especially restricted in mobile view. Cannot click card to close popover (compromise of hover trigger).
 * - External link: cannot hover over name. Link icon? "See more"?
 * - Content: short (?) + full bio? Roughly standardize outline(s)
 * - Categories: undergraduate, graduate, staff (?)
 */
const BioCard = (person: Person) => {
  return (
    <Popover trigger="hover" gutter={0} flip={false}>
      <PopoverTrigger>
        <AspectRatio ratio={3 / 4} w={CARD_WIDTH}>
          <Image src={person.headshotPath} alt={person.name} />
        </AspectRatio>
      </PopoverTrigger>
      <PopoverContent rounded={"none"} w={CARD_WIDTH}>
        <CardInfo {...person} />
      </PopoverContent>
    </Popover>
  );
};

export default BioCard;
