import { VStack, Center } from "@chakra-ui/react";
import FancyHeading from "../figures/fancy-heading";

export default function Hero(props: { leftText: string; rightText: string }) {
  return (
    <Center>
      <VStack
        h={"50vh"}
        maxW={{ base: "container.xs", sm: "container.sm", md: "container.md" }}
        justify="center"
      >
        <FancyHeading leftText={props.leftText} rightText={props.rightText} />
      </VStack>
    </Center>
  );
}
