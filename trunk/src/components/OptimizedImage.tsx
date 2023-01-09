// SOURCE: https://github.com/chakra-ui/chakra-ui/discussions/2475#discussioncomment-938241

import { Box, BoxProps } from "@chakra-ui/react";
import Image from "next/image";

export const OptimizedImage = ({
	src,
	alt,
	...rest
}: { src: string; alt: string } & Omit<BoxProps, "as">) => {
	return (
		<Box position="relative" {...rest}>
			<Image objectFit="cover" layout="fill" src={src} alt={alt} />
		</Box>
	);
};
