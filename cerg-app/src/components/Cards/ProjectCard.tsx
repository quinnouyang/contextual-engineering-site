import { ExternalLinkIcon } from "@chakra-ui/icons";
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
        {link ? (
          <ExternalLinkIcon
            position="absolute"
            top="1em"
            right="1em"
            boxSize="2em"
            color="white"
          />
        ) : null}
      </Box>
      <Box h="0.75em" w="full" bgColor="illiniOrange" />
      <VStack spacing="1em" p={{ base: "1.5em", md: "2em" }} align="left">
        <Heading
          fontSize="2xl"
          fontWeight="bold"
          _groupHover={{ color: link ? "illiniOrange" : "auto" }}
          transition="150ms"
        >
          {title}
        </Heading>
        <Divider
          borderColor="illiniBlue"
          _groupHover={{ borderColor: link ? "illiniOrange" : "auto" }}
          transition="150ms"
        />
        <Text
          fontSize="md"
          _groupHover={{ color: link ? "illiniOrange" : "auto" }}
          transition="150ms"
        >
          {description}
        </Text>
      </VStack>
    </VStack>
  );
}
