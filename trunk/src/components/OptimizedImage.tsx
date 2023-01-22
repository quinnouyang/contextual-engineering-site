import { chakra, Flex, type FlexProps } from "@chakra-ui/react";
import NextImage from "next/image";
import type { ImageLoaderProps, ImageProps } from "next/image";

export const FactoryImage = chakra(NextImage, {
	shouldForwardProp: (prop) =>
		[
			"width",
			"height",
			"src",
			"alt",
			"quality",
			"placeholder",
			"blurDataURL",
			"loader",
			"layout",
			"objectFit",
		].includes(prop),
});

const toBase64 = (str: string) =>
	typeof window === "undefined"
		? Buffer.from(str).toString("base64")
		: window.btoa(str);

const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="${w}" height="${h}" fill="#75c5c0"  />
    <rect id="r" width="${w}" height="${h}" fill="#75c5c0"  />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

const myLoader = (resolverProps: ImageLoaderProps): string => {
	return `${resolverProps.src}?w=${resolverProps.width}&q=${resolverProps.quality}`;
};

export const OptimizedImage = (props: ImageProps & FlexProps) => {
	const { src, width, height, alt, quality, layout, objectFit, ...rest } = props;
	console.log(layout)

	return (
		<Flex
			pos="relative"
			cursor="pointer"
			className="group"
			overflow="hidden"
			{...rest}
		>
			<FactoryImage
				w="auto"
				h="auto"
				loader={myLoader}
				width={width}
				quality={quality}
				height={height}
				layout={layout ?? "fill"}
				placeholder="blur"
				objectFit={objectFit ?? "cover"}
				blurDataURL={`data:image/svg+xml;base64,${toBase64(
					shimmer(+(width ?? 0), +(height ?? 0))
				)}`}
				src={src}
				alt={alt}
				transition="all 0.2s"
			/>
		</Flex>
	);
};
