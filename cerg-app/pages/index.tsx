import HomepageHero from "../src/components/Heros/HomepageHero";
import PageWrapper from "../src/components/PageWrapper";
import {
	VStack,
	Text,
	Container,
	Box,
	Link,
	Image,
	UnorderedList,
	ListItem,
	Heading,
	AspectRatio,
	Stack,
} from "@chakra-ui/react";
import { focusAreas } from "../src/types/focus-areas-types";

export default function Homepage() {
	return (
		<PageWrapper
			{...{
				mainTitle: "Contextual Engineering Research Group | UIUC",
				includeSecondaryTitle: false,
			}}
		>
			<HomepageHero />
			<Box bgColor="illiniBlue">
				<Container>
					<Stack
						direction={{
							base: "column-reverse",
							md: "row",
						}}
						w="full"
						spacing="1em"
						align="center"
					>
						<AspectRatio
							ratio={2 / 3}
							maxW="24em"
							w={{ base: "full", md: "50%" }}
							maxH="full"
						>
							<Image src="/images/IMG_0628.jpg" alt="IMG_0628.jpg lol" />
						</AspectRatio>
						<Stack
							direction={{ base: "column", md: "column" }}
							w={{ base: "full", md: "50%" }}
							p={["1.5em", "2em"]}
							spacing="1em"
							align="left"
						>
							<VStack align="left" w="full">
								<Heading
									as={Link}
									href="/about-us"
									textDecoration="underline"
									_hover={{
										textDecoration: "underline",
										color: "illiniOrange",
									}}
									fontWeight="bold"
									color="white"
								>
									About the Group
								</Heading>
								<Text variant="article" color="white">
									CERG consists of University of Illinois students and staff
									researching user-informed approaches in engineering projects
									around the world.
								</Text>
							</VStack>
							<VStack align="left">
								<Heading
									as={Link}
									href="/focus-areas"
									textDecoration="underline"
									_hover={{
										textDecoration: "underline",
										color: "illiniOrange",
									}}
									fontWeight="bold"
									fontSize={["xl", "2xl"]}
									color="white"
								>
									Our Focus Areas
								</Heading>
								<VStack align="left" pl="1em">
									<UnorderedList>
										{focusAreas.map(({ label }) => {
											return (
												<ListItem key={label} color="white">
													<Text key={label} variant="article" color="white">
														{label}
													</Text>
												</ListItem>
											);
										})}
									</UnorderedList>
								</VStack>
							</VStack>
						</Stack>
					</Stack>
				</Container>
			</Box>
			<Container py={["1em", "2em", "3em"]}>
				<VStack>
					<Stack
						direction={{
							base: "column-reverse",
							md: "row",
						}}
						w="full"
						spacing={0}
					>
						<VStack
							w={{ base: "full", md: "50%" }}
							p={["1.5em", "2em"]}
							align="left"
							bgColor="white"
							borderLeftWidth="1em"
							borderColor="illiniOrange"
						>
							<Heading fontSize={["lg", "xl"]}>Featured Project</Heading>
							<Heading
								as={Link}
								href="/projects/rural-energy-systems"
								textDecoration="underline"
								_hover={{ color: "illiniOrange", textDecoration: "underline" }}
								maxW="20em"
								fontSize={["2xl", "3xl"]}
								fontWeight="bold"
							>
								Contextualized Design of Rural Energy Systems for Improved
								Sustainability
							</Heading>
							<Text variant="article">
								This project is a case study of energy needs in the Navajo
								Nation aimed at better understanding how the local social,
								political, cultural, and economic factors influence the
								selection of the most appropriate engineering design solutions
								for rural and remote communities.
							</Text>
						</VStack>
						<AspectRatio
							ratio={1}
							w={{ base: "full", md: "50%" }}
							maxH={{ base: "20em", md: "full" }}
						>
							<Image
								src="/images/PXL_20220511_220036479.jpg"
								alt="A small solar panel system in a Navajo reservation."
							/>
						</AspectRatio>
					</Stack>
				</VStack>
			</Container>
		</PageWrapper>
	);
}
