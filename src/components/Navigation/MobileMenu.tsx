import {
	Flex,
	Stack,
	Collapse,
	Link,
	useDisclosure,
	Divider,
	StackDivider,
	useMediaQuery,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
	navbarItems,
	NavCategory,
	NavPage,
} from "../../types/navigation-types";

export default function MobileMenu() {
	return (
		<Stack
			minW={{ base: "100vw", sm: "sm" }}
			p="1em"
			bg="cloudWhite.50"
			borderWidth={1}
			divider={<StackDivider bgColor="cloudWhite.300" />}
		>
			{navbarItems.map((item) => (
				<MenuItem key={item.label} {...item} />
			))}
		</Stack>
	);
}

const MenuItem = (item: NavCategory | NavPage) => {
	const { isOpen, onToggle } = useDisclosure();
	const [isNotTouchscreen] = useMediaQuery("(pointer: fine)");

	return (
		<Stack height="fit-content">
			<Flex
				as={Link}
				href={"link" in item ? item.link : undefined}
				onClick={"children" in item ? onToggle : undefined}
				role="group"
				justify="space-between"
				align="center"
			>
				<Link
					fontSize="xl"
					fontWeight="medium"
					_groupHover={{
						color: isNotTouchscreen ? "illiniOrange" : "illiniBlue",
					}}
				>
					{item.label}
				</Link>
				{"children" in item ? (
					<ChevronDownIcon
						boxSize="1.5em"
						transition="0.25s"
						_groupHover={{
							color: isNotTouchscreen ? "illiniOrange" : "illiniBlue",
						}}
						transform={isOpen ? "rotate(180deg)" : ""}
					/>
				) : null}
			</Flex>

			{"children" in item ? (
				// Bug: opening Collapse creates empty top margin
				<Collapse in={isOpen}>
					<Divider borderColor="cloudWhite.300" />
					<Stack
						spacing={0}
						pl="1em"
						divider={<StackDivider bgColor="cloudWhite.300" />}
					>
						{item.children.map(({ label, link }, i, arr) => (
							<Link
								key={label}
								pt="0.5em"
								// No bottom padding for last item
								pb={arr.length - 1 !== i ? "0.5em" : 0}
								href={link}
							>
								{label}
							</Link>
						))}
					</Stack>
				</Collapse>
			) : null}
		</Stack>
	);
};
