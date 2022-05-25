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
