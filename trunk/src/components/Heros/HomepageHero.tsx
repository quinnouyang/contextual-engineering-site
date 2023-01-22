import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
	Container,
	Heading,
	Text,
	Button,
	Link,
	VStack,
	Stack,
} from "@chakra-ui/react";
import CaptionedImage, { CaptionedImageProps } from "../CaptionedImage";
import { OptimizedImage } from "../OptimizedImage";

const imageProps: CaptionedImageProps = {
	image: (
		<OptimizedImage
			src="/images/spring-measurement-students.jpeg"
			w="full"
			h={[0, 300]}
			objectFit="cover"
			boxShadow="2xl"
			alt={
				"Engineers assess the surrounding water sources near a community in Honduras."
			}
			priority
		/>
	),
	caption:
		"Engineers assess water sources in El Tablon, Honduras for a Lenca community that would not consider drawing from the nearby springs as they held them as scared.",
	whiteBg: false,
};

export default function HomepageHero() {
	return (
		<Container maxW="container.xl">
			<Stack
				align="center"
				direction={{ base: "column", md: "row" }}
				py={["2em", "4em"]}
				spacing="2em"
			>
				<VStack align="start" spacing={"1em"}>
					<Heading
						fontWeight="bold"
						fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
					>
						<Text>Contextual Engineering</Text>
						<Text color="illiniOrange">Certificate</Text>
					</Heading>
					<Text variant="article">
						For University of Illinois students: learn about community-informed
						design and engineering in a 12 credit-hour certificate program!
					</Text>
					<Button
						as={Link}
						href="https://abe.illinois.edu/academics/certificates/contextual-engineering-certificate"
						minW="fit-content"
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
