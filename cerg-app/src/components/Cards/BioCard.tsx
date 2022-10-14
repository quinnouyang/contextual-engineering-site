import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Button,
  Divider,
  Heading,
  Image,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger as OrigPopoverTrigger,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BioCardProps } from "../../../pages/people";
import { Person } from "../../types/people-types";

// Temporary fix: React 18 issue
export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

const CARD_WIDTH = "18em";

const CardInfo = ({ name, title, shortBio, link }: Person) => {
  return (
    <VStack p="1em">
      <VStack spacing="0.2em">
        <Heading
          as={link ? Link : undefined}
          href={link}
          textDecoration={link ? "underline" : "none"}
          _hover={{
            color: link ? "illiniOrange" : "illiniBlue",
            textDecoration: link ? "underline" : "none",
          }}
          fontSize="xl"
          textAlign="center"
          isExternal
        >
          {name}
        </Heading>
        {title && <Text fontSize="md">{title}</Text>}
      </VStack>
      <Divider />
      <Text fontSize="sm">{shortBio}</Text>
      <Divider />
      <Text fontSize="xs" fontStyle="italic">
        Full biography page coming soon...
      </Text>
    </VStack>
  );
};

export default function BioCard({
  person,
  isOtherOpen,
  onOpen,
  onClose,
}: BioCardProps) {
  const [isNotTouchScreen] = useMediaQuery("(pointer: fine)");
  const ref = useRef<null | HTMLDivElement>(null);
  const scroll = () => ref?.current?.scrollIntoView({ behavior: "smooth" });

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
      matchWidth
      isLazy
    >
      {({ isOpen }) => (
        <>
          <PopoverTrigger>
            {/* Button to allow clicking to close card (as in demo Popover), though clicking briefly highlights image blue */}
            <Button h="inherit" p={0}>
              <AspectRatio
                ratio={3 / 4}
                w={CARD_WIDTH}
                onClick={scroll}
                ref={ref}
              >
                <Image
                  src={person.headshot}
                  alt={person.name}
                  opacity={isOtherOpen && !isOpen ? 0.7 : 1}
                  transition="opacity 0.75s linear"
                  w={288}
                  h={384}
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
