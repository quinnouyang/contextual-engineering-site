import {
  AspectRatio,
  Button,
  Divider,
  Heading,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger as OrigPopoverTrigger,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { Person } from "../types/team-members";

// Temporary fix: React 18 issue
export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

const CARD_WIDTH = "18em";

const CardInfo = (person: Person) => {
  return (
    <VStack p="1em">
      <VStack spacing="0.2em">
        <Heading fontSize="xl" textAlign="center">
          {person.name}
        </Heading>
        {person.title && <Text fontSize="md">{person.title}</Text>}
      </VStack>
      <Divider />
      <Text fontSize="sm">{person.shortBio}</Text>
      <Divider />
      <Text fontSize="xs" fontStyle="italic">
        Full biography page coming soon...
      </Text>
    </VStack>
  );
};

interface BioCardProps {
  person: Person;
  isOtherOpen: boolean;
  onOpen: any; // Void arrow functions
  onClose: any;
}

export default function BioCard({
  person,
  isOtherOpen,
  onOpen,
  onClose,
}: BioCardProps) {
  const [isNotTouchScreen] = useMediaQuery("(pointer: fine)");

  return (
    <Popover
      trigger={isNotTouchScreen ? "hover" : "click"}
      gutter={0}
      flip={false}
      onOpen={onOpen}
      onClose={onClose}
      // Otherwise multiple popovers remain for too long
      openDelay={0}
      closeDelay={0}
    >
      {({ isOpen }) => (
        <>
          <PopoverTrigger>
            <Button p={0} h="inherit">
              <AspectRatio ratio={3 / 4} w={CARD_WIDTH}>
                <Image
                  src={person.headshotPath}
                  alt={person.name}
                  opacity={isOtherOpen && !isOpen ? 0.5 : 1}
                  transition="opacity .5s ease-out"
                />
              </AspectRatio>
            </Button>
          </PopoverTrigger>
          <PopoverContent rounded="none" w={CARD_WIDTH}>
            <CardInfo {...person} />
          </PopoverContent>
        </>
      )}
    </Popover>
  );
}
