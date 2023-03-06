import { Container, Link, Text, VStack } from "@chakra-ui/react";
import CaptionedImage, {
	CaptionedImageProps,
} from "../src/components/CaptionedImage";
import ColorHero, { ColorHeroProps } from "../src/components/Heros/ColorHero";
import { OptimizedImage } from "../src/components/OptimizedImage";
import PageWrapper from "../src/components/PageWrapper";

const heroProps: ColorHeroProps = {
	variant: "largeHero",
	heading: "Contact Us",
	bgColor: "illiniBlue",
};

const imageProps: CaptionedImageProps = {
	image: (
		<OptimizedImage
			pt="1em"
			src="/images/IMG_0938.JPG"
			w="full"
			h="md"
			objectFit="cover"
			alt="Children surrounding a water tap in Cameroon"
		/>
	),
	caption:
		"Aymara Bolivianos, many of whom live without electricity and running water, tend to their sheep and cattle on the Andean highlands.",
};

export default function TemplatePage() {
	return (
		<PageWrapper {...{ mainTitle: "Contact Us" }}>
			<ColorHero {...heroProps} />
			<Container py="3em">
				<VStack p={["1.5em", "2em"]} bgColor="white" align="left">
					<Text variant="article">
						For general inquiries:{" "}
						<Link
							href="mailto:contextual-engineering@illinois.edu"
							variant="underline"
							isExternal
						>
							contextual-engineering@illinois.edu
						</Link>
					</Text>
					<Text variant="article">
						For website-related concerns:{" "}
						<Link
							href="mailto:qouyang3@illinois.edu"
							variant="underline"
							isExternal
						>
							qouyang3@illinois.edu
						</Link>
					</Text>
					<CaptionedImage {...imageProps} />
				</VStack>
			</Container>
		</PageWrapper>
	);
}
