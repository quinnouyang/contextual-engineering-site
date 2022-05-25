import { Heading } from "@chakra-ui/react";

export default function FancyHeading(props: {
  leftText: string;
  rightText: string;
}) {
  return (
    <Heading
      /*as={"span"}*/ color={"illiniOrange"}
      fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
    >
      {props.leftText}
      <Heading
        as={"span"}
        position={"relative"}
        _after={{
          content: "''",
          width: "full",
          height: "0.3em",
          position: "absolute",
          bottom: "0.1em",
          left: 0,
          bg: "illiniOrange",
          zIndex: -1,
        }}
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
      >
        {props.rightText}
      </Heading>
    </Heading>
  );
}
