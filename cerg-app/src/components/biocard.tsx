import {
  AspectRatio,
  Divider,
  Heading,
  HStack,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger as OrigPopoverTrigger,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Person } from "../types/team-members";

// Temporary fix: React 18 issue
export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

const CARD_WIDTH = "18em";

const CardInfo = (person: Person) => {
  return (
    <VStack p={"1em"}>
      <VStack spacing={"0.2em"}>
        <Heading fontSize={"xl"} textAlign="center">
          {person.name}
        </Heading>
        {person.title && <Text fontSize="md">{person.title}</Text>}
      </VStack>
      <Divider />
      <Text fontSize={"sm"}>{person.shortBio}</Text>
      <Divider />
      <Text fontSize={"xs"} fontStyle="italic">
        Full biography page coming soon...
      </Text>
    </VStack>
  );
};

interface BioCardProps {
  person: Person;
  isOtherOpen: boolean;
  toggleOpen: any; // Void arrow function
}

/**
 * TO-DO
 * - Test sensible hero designs, see marketing office
 * - External link: cannot hover over name. Link icon? "See more"?  [POSTPONED]
 * - Content: short (?) + full bio? Roughly standardize outline(s)  [JUST SHORT BIO FOR NOW]
 * - Categories: undergraduate, graduate, staff (?) [POSTPONED]
 *
 * Ignoring BioPage for now, prioritize basic (emails and) short bios.
 */
/**
 * ISSUES:
 * - Opacity breaks as Popover states can "lag" (?). Can recreate in mobile by clicking an image, clicking the info card, then clicking another image.
 * - Last row of popovers can overlap footer and hero awkwardly. ADDED SPACE BELOW
 * - Cannot click card to close popover (Ideal in mobile view).
 * - Popover attention focus not ideal, especially in mobile.
 */
export default function BioCard({
  person,
  isOtherOpen,
  toggleOpen,
}: BioCardProps) {
  return (
    <Popover
      trigger="hover"
      onOpen={toggleOpen}
      onClose={toggleOpen}
      gutter={0}
      flip={false}
      // Otherwise multiple popovers remain for too long
      openDelay={0}
      closeDelay={0}
    >
      {({ isOpen }) => (
        <>
          <PopoverTrigger>
            <AspectRatio ratio={3 / 4} w={CARD_WIDTH}>
              <Image
                src={person.headshotPath}
                alt={person.name}
                opacity={isOtherOpen && !isOpen ? 0.5 : 1}
                transition="opacity .5s ease-out"
              />
            </AspectRatio>
          </PopoverTrigger>
          <PopoverContent rounded={"none"} w={CARD_WIDTH}>
            <CardInfo {...person} />
          </PopoverContent>
        </>
      )}
    </Popover>
  );
}
