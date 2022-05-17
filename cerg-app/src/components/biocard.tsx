import {
  AspectRatio,
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger as OrigPopoverTrigger,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Person } from "../types/team-members";

// Temporary fix: React 18 issue
export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

// const CARD_WIDTH = "16em";

// const BioPopover = (person: Person) => {
//   return (
// <VStack p={"1em"} w={CARD_WIDTH}>
//   <Heading fontSize={"1xl"} textAlign="center">
//     {person.name}
//   </Heading>
//   <Text fontSize={"md"} fontWeight="medium">
//     {person.creds}
//   </Text>
//   <Divider />
//   <Text fontSize={"md"}>{person.shortBio}</Text>
// </VStack>
//   );
// };

// const BioCard = (person: Person) => {
//   return (
//     <Flex w={"full"}>
//       <Popover trigger="hover">
//         <PopoverTrigger>
//           <AspectRatio w={CARD_WIDTH} ratio={3 / 4}>
//             <Image src={person.headshotPath} />
//           </AspectRatio>
//         </PopoverTrigger>

//         <PopoverContent
//           rounded={"none"}
//           w={CARD_WIDTH}
//           p={0}
//           maxH={"400px"}
//           overflow="scroll"
//         >
//           <BioPopover {...person} />
//         </PopoverContent>
//       </Popover>
//     </Flex>
//   );
// };

const CardInfo = (person: Person) => {
  return (
    <VStack p={"1em"}>
      <Heading as={Link} href={"/" + person.name} fontSize={"1xl"} textAlign="center">
        {person.name}
      </Heading>
      <Text fontSize={"md"} fontWeight="medium">
        {person.creds}
      </Text>
      <Divider />
      <Text fontSize={"md"}>{person.shortBio}</Text>
    </VStack>
  );
};

const BioCard = (person: Person) => {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <AspectRatio ratio={3 / 4}>
          <Image src={person.headshotPath} alt={person.name} />
        </AspectRatio>
      </PopoverTrigger>
      <PopoverContent rounded={"none"} maxH="400px" overflow="scroll">
        <CardInfo {...person} />
      </PopoverContent>
    </Popover>
  );
};

export default BioCard;
