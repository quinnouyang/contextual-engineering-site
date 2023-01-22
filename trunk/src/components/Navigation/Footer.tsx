import {
	Box,
	Container,
	Flex,
	Heading,
	Link,
	Show,
	Spacer,
	Text,
} from "@chakra-ui/react";
import FullWordmark from "../../figures/full-wordmark";
import ShortWordmark from "../../figures/short-wordmark";
import VerticalDivider from "../../figures/vertical-divider";
import {
	footerPrimaryItems,
	footerSecondaryItems,
} from "../../types/navigation-types";

export default function Footer() {
	return (
		// boxShadow only needs to be visible at top. Hard-coded cloudWhite.300
		<Box bg="cloudWhite.50" boxShadow="0px -10px 6px -6px rgba(0, 0, 0, 0.1)">
			<Container py="2em">
				<Flex>
					<FooterLogo />
					<Spacer />
					<Flex
						columnGap="1em"
						direction={{ base: "column", sm: "row" }}
						align={{ base: "flex-end", sm: "center" }}
					>
						{footerPrimaryItems.map(({ label, link }) => {
							return (
								<Link
									key={label}
									href={link}
									fontSize={{ base: "sm", md: "md" }}
									fontWeight="medium"
								>
									{label}
								</Link>
							);
						})}
					</Flex>
				</Flex>
				<BottomInformation />
			</Container>
		</Box>
	);
}

const FooterLogo = () => {
	const breakpoint = "lg";

	return (
		<Flex
			// alignItems="flex-start"
			direction={{ base: "column", lg: "row" }}
			rowGap="0.5em"
		>
			<Show above={breakpoint}>
				<Flex width="10em">
					<FullWordmark />
				</Flex>
				<VerticalDivider style={{ margin: "0 1em 0 1em" }} />
			</Show>
			<Show below={breakpoint}>
				<ShortWordmark />
			</Show>
			<Heading
				as={Link}
				fontSize={{ base: "sm", md: "md", lg: "lg" }}
				href="/#"
			>
				Contextual Engineering <br /> Research Group
			</Heading>
		</Flex>
	);
};

const BottomInformation = () => {
	return (
		<Flex mt="0.5em">
			<Flex columnGap={{ base: "0.5em", md: "1em" }} wrap="wrap">
				{footerSecondaryItems.map(({ label, link }) => {
					return (
						<Link
							key={label}
							href={link}
							fontSize={{ base: "xs", md: "sm" }}
							isExternal
						>
							{label}
						</Link>
					);
				})}
			</Flex>
			<Spacer />
			<Text fontSize={{ base: "xs", md: "sm" }}>
				Copyright © 2022<Show above="sm">. All rights reserved.</Show>
			</Text>
		</Flex>
	);
};
