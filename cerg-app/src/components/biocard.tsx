import {
  AspectRatio,
  Divider,
  Flex,
  Heading,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger as OrigPopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { IState as IProps } from "../../pages/team";

// Temporary fix: React 18 issue
export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

const CARD_WIDTH = "16em";

const BioPopover: FC<IProps> = ({ person }) => {
  return (
    <VStack p={"2em"}>
      <Heading fontSize={"1xl"}>{person.name}</Heading>
      <Text fontSize={"md"} fontWeight="medium">
        {person.creds}
      </Text>
      <Divider />
      <Text fontSize={"md"}>{person.shortBio}</Text>
    </VStack>
  );
};

const BioCard: FC<IProps> = ({ person }) => {
  return (
    <Flex w="full">
      <Popover trigger="hover">
        <PopoverTrigger>
          <AspectRatio w={CARD_WIDTH} ratio={3 / 4}>
            <Image src={person.headshotPath} />
          </AspectRatio>
        </PopoverTrigger>

        <PopoverContent
          rounded={"none"}
          w={CARD_WIDTH}
          maxH={"400px"}
          overflow="scroll"
        >
          <BioPopover person={person} />
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default BioCard;
