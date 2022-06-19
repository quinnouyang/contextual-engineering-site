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
import { Project } from "../types/projects";

const bgColor = "illiniBlue";
const bgHoverColor = "rgba(19, 41, 75, 0.90)"; // illiniBlue with opacity
const fgColor = "cloudWhite.50";

// Hard-coded dimensions to fit ~300 ch. text descriptions
export default function ProjectCard({
  title,
  description,
  image,
  link,
}: Project) {
  return (
    <VStack
      as={Link}
      href={link}
      pointerEvents={link ? "auto" : "none"} // Disables link behavior if does not exist
      role="group"
      w="full"
      maxW={{ base: "24em", md: "32em" }}
      h="full"
      spacing={0}
      boxShadow="0em 0em 0.5em 0em grey"
      _hover={{ boxShadow: "0em 0em 0.5em 0em black" }}
    >
      <Box w="inherit" position="relative" display="inline-block">
        <AspectRatio
          ratio={3 / 2}
          w="inherit"
          // Hard-coded duration and opacity. Duration from default "fast" animation. Should refactor
          _groupHover={{ opacity: link ? "90%" : "" }}
          transitionDuration="150ms"
        >
          <Image src={image} alt={title} />
        </AspectRatio>
        {link ? (
          <ExternalLinkIcon
            position="absolute"
            top="1em"
            right="1em"
            boxSize={{ base: "1.5em", sm: "2em" }}
            color="cloudWhite.50"
          />
        ) : null}
      </Box>
      <VStack
        h="full"
        p={{ base: "1.5em", md: "2em" }}
        bgColor={bgColor}
        _groupHover={{ bgColor: link ? bgHoverColor : "" }}
        transition="background-color 150ms"
      >
        <Heading color={fgColor} fontSize={{ base: "xl", md: "2xl" }}>
          {title}
        </Heading>
        <Divider />
        <Text color={fgColor} fontSize="md">
          {description}
        </Text>
      </VStack>
    </VStack>
  );
}
