import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import BioCard from "../src/components/BioCard";
import { people, Person } from "../src/types/people-types";
import ImageHero, { ImageHeroProps } from "../src/components/Heros/ImageHero";
import PageWrapper from "../src/components/PageWrapper";

// const Hero = () => {
//   return (
//     <Center h="10em">
//       <VStack
//         maxW={{ base: "container.xs", sm: "container.sm", md: "container.md" }}
//         justify="center"
//       >
//         <Flex>
//           <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}>
//             Meet the&nbsp;
//           </Heading>
//           <Heading
//             color="illiniOrange"
//             textStyle="italics"
//             fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
//           >
//             Team.
//           </Heading>
//         </Flex>
//       </VStack>
//     </Center>
//   );
// };

const heroProps: ImageHeroProps = {
  heading: "Meet the Team.",
  image:
    "http://contextual.engineering.illinois.edu/wp-content/uploads/2022/03/IMG_0868-1024x768.jpg",
  textColor: "illiniBlue",
};

export type BioCardProps = {
  person: Person;
  isOtherOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export default function PeoplePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <PageWrapper category={{ label: "People" }}>
      <ImageHero {...heroProps} />
      <Flex
        wrap="wrap"
        gap="1em"
        justify="center"
        m={{ base: "2em", sm: "4em" }}
      >
        {people.map((person, i) => {
          return (
            <BioCard
              key={i + person.name}
              person={person}
              isOtherOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
            />
          );
        })}
      </Flex>
      <Box h="15em" />
    </PageWrapper>
  );
}
