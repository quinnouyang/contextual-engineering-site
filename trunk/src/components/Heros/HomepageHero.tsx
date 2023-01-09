import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
	Container,
	Stack,
	Heading,
	Text,
	Button,
	Link,
	VStack,
} from "@chakra-ui/react";
import CaptionedImage, { CaptionedImageProps } from "../CaptionedImage";
import { OptimizedImage } from "../OptimizedImage";

const imageProps: CaptionedImageProps = {
	image: (
		<OptimizedImage
			minW={{ base: "auto", lg: "30em", xl: "40em" }}
			minH="xs"
			objectFit="cover"
			boxShadow="2xl"
			alt={
				"Engineers assessing the surrounding water sources near a community in Honduras."
			}
			src="/images/spring-measurement-students.jpeg"
		/>
	),
	caption:
		"Engineers assess the surrounding water sources in El Tablon, Honduras for a water-stressed Lenca community that would not consider drawing from the nearby springs as they held sacred meaning to their culture.",
	whiteBg: false,
};

export default function HomepageHero() {
	return (
		<Container maxW="8xl" py={["2em", "4em", "6em"]}>
			<Stack
				align="center"
				direction={{ base: "column", lg: "row" }}
				spacing={{ base: "1.5em", md: "3em" }}
			>
				<VStack
					align="left"
					spacing={["1em", "1.5em"]}
					maxW={{ basee: "full", md: "40em" }}
				>
					<Heading
						lineHeight={1.2}
						fontWeight="bold"
						fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
					>
						<Text>Contextual Engineering</Text>
						<Text color="illiniOrange">Certificate</Text>
					</Heading>
					<Text variant="article" p={0}>
						University of Illinois undergraduate and graduate students, learn
						about community-informed design and engineering in a 12 credit-hour
						certificate program!
					</Text>
					<Button
						as={Link}
						href="https://abe.illinois.edu/academics/certificates/contextual-engineering-certificate"
						w={{ base: "full", sm: "fit-content" }}
						isExternal
						size="lg"
						textColor="white"
						bg="illiniOrange"
						_hover={{ color: "white", bg: "illiniBlue" }}
					>
						Learn More&nbsp;
						<ExternalLinkIcon />
					</Button>
				</VStack>
				<CaptionedImage {...imageProps} />
			</Stack>
		</Container>
	);
}
