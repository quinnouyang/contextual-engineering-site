import {
  AspectRatio,
  Box,
  Divider,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Project } from "../../types/projects-types";

export default function ProjectCard({
  title,
  description,
  researchers,
  image,
  link,
}: Project) {
  return (
    <VStack
      as={link ? Link : undefined}
      href={link}
      role="group"
      w="full"
      maxW={{ base: "24em", md: "32em" }}
      h="full"
      spacing={0}
      bgColor="white"
      isExternal={link?.at(0) !== "/"} // Internal links start with /, others with https, etc.
    >
      <Box w="inherit" position="relative" display="inline-block">
        <AspectRatio
          ratio={3 / 2}
          w="inherit"
          // Eyeballed duration from default "fast" animation. Should refactor
          _groupHover={{ opacity: link ? 0.8 : 1 }}
          transitionDuration="150ms"
        >
          <Image src={image} alt={title} />
        </AspectRatio>
      </Box>
      <Box h="0.75em" w="full" bgColor="illiniOrange" />
      <VStack spacing="1em" p={{ base: "1.5em", md: "2em" }} align="left">
        <Heading
          textDecoration={link ? "underline" : undefined}
          fontSize="2xl"
          fontWeight="bold"
          _groupHover={{ color: link ? "illiniOrange" : "auto" }}
          transition="150ms"
        >
          {title}
        </Heading>
        <Text fontSize="md">{description}</Text>
        {researchers ? (
          <>
            <Divider borderColor="illiniBlue" />
            <Text fontSize="sm" fontWeight="medium">
              Researcher(s): {researchers}
            </Text>
          </>
        ) : null}
      </VStack>
    </VStack>
  );
}
