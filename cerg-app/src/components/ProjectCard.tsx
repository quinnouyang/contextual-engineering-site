import {
  AspectRatio,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Project } from "../types/projects";

const bgColor = "illiniBlue";
const bgHoverColor = "rgba(19, 41, 75, 0.80)";
const fgColor = "cloudWhite.50";

// TO-DO: Refactor workaround
interface Index {
  index: number;
}
interface Props extends Project, Index {}

export default function ProjectCard({
  image,
  title,
  description,
  index,
}: Props) {
  const width = useBreakpointValue({ base: "full", lg: "50%" });

  return (
    // Horizontal shrinking forces (usually landscape) images to be in "portrait"
    <Flex w="full">
      <Stack
        as={Link}
        href="/team"
        direction={{
          base: "column",
          lg: index.valueOf() % 2 == 0 ? "row" : "row-reverse",
        }}
        spacing={0}
        role="group"
      >
        <AspectRatio
          w={width}
          // Bad: do not actually want 50em
          maxH={{ base: "20em", lg: "50em" }}
          // Hard-coded duration and opacity. Duration from default "fast" animation. Should refactor
          _groupHover={{ opacity: "80%" }}
          transitionDuration="150ms"
        >
          <Image src={image} />
        </AspectRatio>
        <Stack
          p="2em"
          w={width}
          bgColor={bgColor}
          _groupHover={{ bgColor: bgHoverColor }}
          transition="background-color 150ms"
        >
          <Heading color={fgColor} fontSize={{ base: "2xl", lg: "3xl" }}>
            {title}
          </Heading>
          <Divider />
          <Text color={fgColor}>{description}</Text>
          <Spacer />
          <Button
            variant="outline"
            w="fit-content"
            textColor={fgColor}
            _hover={{ bg: fgColor, textColor: bgColor }}
          >
            See More
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
