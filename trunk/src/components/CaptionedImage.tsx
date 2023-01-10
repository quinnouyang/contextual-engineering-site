import { VStack, Text } from "@chakra-ui/react";

export type CaptionedImageProps = {
	readonly image: React.ReactNode; // Weak typing
	readonly caption: string | React.ReactNode;
	readonly whiteBg?: boolean;
};

export default function CaptionedImage({
	image,
	caption,
	whiteBg,
}: CaptionedImageProps) {
	return (
		<VStack
			align="center"
			w="fit-content"
			bgColor={whiteBg === false ? "none" : "white"}
		>
			{image}
			<Text px="2em" fontSize={["xs", "sm", "md"]} display={["none", "flex"]}>
				{caption}
			</Text>
		</VStack>
	);
}
