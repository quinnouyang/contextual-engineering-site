import { Image, VStack, Text, AspectRatio } from "@chakra-ui/react";

export type CaptionedImageProps = {
  readonly image: React.ReactNode;
  readonly caption: string | React.ReactNode;
};

export default function CaptionedImage({
  image,
  caption,
}: CaptionedImageProps) {
  return (
    <VStack align="center" bgColor="white">
      {image}
      <Text px="2em" fontSize={["xs", "sm", "md"]}>{caption}</Text>
    </VStack>
  );
}
