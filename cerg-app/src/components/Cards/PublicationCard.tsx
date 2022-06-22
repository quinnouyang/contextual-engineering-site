import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Heading, Text, Link, VStack } from "@chakra-ui/react";
import { Publication } from "../../types/publications-types";

const bgColor = "industrialBlue.50";
const highlightColor = "illiniOrange";

export default function PublicationCard({
  title,
  abstract,
  link,
}: Publication) {
  return (
    <VStack p="1em" w="full" align="left" bgColor={bgColor}>
      <Heading
        as={link ? Link : undefined} // Quetionable workaround: check accessibility
        href={link ?? undefined}
        isExternal
        fontSize="xl"
        fontWeight="medium"
        _hover={{ color: link ? highlightColor : "none" }}
        transition="150ms"
      >
        {title}
        {link ? (
          <ExternalLinkIcon ml="0.5em" boxSize={{ base: "0.5em", sm: "1em" }} />
        ) : null}
      </Heading>
      {abstract ? <Text pl="2em">{abstract}</Text> : null}
    </VStack>
  );
}
