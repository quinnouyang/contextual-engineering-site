import { Text, Box, BoxProps } from "@chakra-ui/react";

export type CaptionedImageProps = {
	readonly image: React.ReactNode; // Weak typing
	readonly caption: string | React.ReactNode;
	readonly whiteBg?: boolean;
} & BoxProps;

export default function CaptionedImage({
	image,
	caption,
	whiteBg,
	...rest
}: CaptionedImageProps) {
	return (
		<Box bgColor={whiteBg === false ? "none" : "white"} {...rest}>
			{image}
			<Text p="1em" fontSize={["xs", "sm", "md"]} display={["none", "flex"]}>
				{caption}
			</Text>
		</Box>
	);
}
