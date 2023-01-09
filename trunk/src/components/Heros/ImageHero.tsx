import { Container, Divider, Heading, Text, Box } from "@chakra-ui/react";

export type ImageHeroProps = {
  readonly variant: "largeHero" | "mediumHero" | "smallHero";
  readonly heading: string | React.ReactNode;
  readonly text?: string | React.ReactNode;
  readonly py?: string | number | any; // Need to limit to {base:, sm: }, etc.
  readonly fgColor?: string;
  readonly divider?: boolean;
  readonly image: string; // Ideally width of 2048px+
  readonly imagePos?: string;
  readonly bgDarkness?: number; // 0 through 1
};

export default function ImageHero({
  variant,
  heading,
  text,
  py,
  fgColor,
  divider,
  image,
  imagePos,
  bgDarkness,
}: ImageHeroProps) {
  bgDarkness = bgDarkness ?? 0.4;

  return (
    <Box
      py={py ?? ["2em", "3em", "4em", "5em"]}
      bgImage={`linear-gradient(rgba(0, 0, 0, ${bgDarkness}), rgba(0, 0, 0, ${bgDarkness})), url(${image})`}
      bgSize="cover"
      bgPos={imagePos ?? "center"}
      bgAttachment="fixed"
    >
      <Container>
        <Heading
          variant={variant}
          maxW="container.md"
          color={fgColor ?? "white"}
        >
          {heading}
        </Heading>
        {divider === true ? ( // If not specified, assume false
          <Divider borderColor={fgColor ?? "white"} />
        ) : null}
        {typeof text === "string" ? (
          <Text variant="article" color={fgColor ?? "white"}>
            {text}
          </Text>
        ) : (
          text
        )}
      </Container>
    </Box>
  );
}
