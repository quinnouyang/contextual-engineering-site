import {
  AspectRatio,
  Button,
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
  const width = useBreakpointValue({ base: "full", md: "50%" });

  return (
    <Flex w="full">
      <Stack
        as={Link}
        href="/team"
        direction={{
          base: "column",
          md: index.valueOf() % 2 == 0 ? "row" : "row-reverse",
        }}
        spacing={0}
      >
        <AspectRatio w={width}>
          <Image src={image} />
        </AspectRatio>
        {/* Bug: hovering over image does not change background */}
        <Stack
          p="2em"
          w={width}
          bgColor={bgColor}
          _hover={{ bgColor: bgHoverColor }}
        >
          <Heading color={fgColor} fontSize={{ base: "2xl", lg: "3xl" }}>
            {title}
          </Heading>
          <Text color={fgColor}>{description}</Text>
          <Spacer />
          <Button
            variant={"outline"}
            w="fit-content"
            bg="transparent"
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
