import {
	Box,
	Stack,
	Link,
	Popover,
	PopoverTrigger as OrigPopoverTrigger,
	PopoverContent,
	useDisclosure,
	HStack,
	StackDivider,
	useMediaQuery,
	PopoverArrow,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
	navbarItems,
	NavCategory,
	NavPage,
} from "../../types/navigation-types";

// Temporary fix: React 18 conflict (downgraded to v17 for now...)
export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
	OrigPopoverTrigger;

// String mappings to custom-theme.ts
const textColor = "illiniBlue";
const highlightColor = "illiniOrange";

// TO-DO: Simplify names and styling properties and behaviors (especially text color consistency)
export default function DesktopMenu({ label }: { label: string }) {
	const { onOpen, onClose } = useDisclosure();
	const [isNotTouchScreen] = useMediaQuery("(pointer: fine)");

	return (
		<HStack spacing="1em">
			{navbarItems.map((item) => (
				<Box key={item.label} role="group">
					<Popover
						trigger={isNotTouchScreen ? "hover" : "click"}
						placement="bottom-start"
						onOpen={onOpen}
						onClose={onClose}
						gutter={6} // Pixel distance between parent (bottom border) and content
						// Eyeballed values to match ChevronIcon animation (on hover)
						openDelay={50}
						closeDelay={50}
					>
						<PopoverTrigger>
							<HStack ml={"children" in item ? "6px" : 0} spacing={0}>
								<Link
									href={"link" in item ? item.link : undefined}
									fontSize="lg"
									fontWeight="medium"
									_groupHover={{ color: highlightColor }}
									// Highlight and underline if currently visiting NavCategory
									color={item.label === label ? highlightColor : textColor}
									borderBottomWidth="0.15em"
									borderBottomColor={
										item.label === label ? highlightColor : "transparent"
									}
									// "Balances" border thickeness to keep text centered
									borderTopWidth="0.15em"
									borderTopColor="transparent"
								>
									{item.label}
								</Link>

								{"children" in item ? (
									<ChevronDownIcon
										boxSize="1.5em"
										color={item.label === label ? highlightColor : textColor}
										transition="0.25s"
										_groupHover={{
											color: highlightColor,
											transform: "rotate(180deg)",
										}}
									/>
								) : null}
							</HStack>
						</PopoverTrigger>
						{"children" in item ? <Dropdown label={label} item={item} /> : null}
					</Popover>
				</Box>
			))}
		</HStack>
	);
}

const Dropdown = ({ item }: { label: string; item: NavCategory }) => {
	return (
		<PopoverContent minW="xs" rounded="none" bgColor="cloudWhite.50">
			<PopoverArrow bgColor="cloudWhite.50" />
			<Stack
				mx="1em"
				spacing={0}
				divider={<StackDivider bgColor="cloudWhite.300" />}
			>
				{item.children.map(({ label, link }) => (
					<Link href={link} key={label} w="full" py="0.5em">
						{label}
					</Link>
				))}
			</Stack>
		</PopoverContent>
	);
};
