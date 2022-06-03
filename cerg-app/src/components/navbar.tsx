import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger as OrigPopoverTrigger,
  PopoverContent,
  useDisclosure,
  Heading,
  Container,
  VStack,
  Show,
  Spacer,
  HStack,
  PopoverArrow,
  Divider,
  StackDivider,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import BlockLogo from "../figures/block-logo";
import VerticalDivider from "../figures/vertical-divider";
import { NavItem, CurrNavItem, navbarItems } from "../types/navigation";
import OrangeBar from "../figures/orange-bar";

// Temporary fix: React 18 conflict (downgraded to v17 for now...)
export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

/** TO-DO: Improve and polish mobile UI
 * Test various menu layouts (full width? sidebar?)
 * Stop the menu from pushing content down (pure overlap)
 */
export default function NavBar(curr: CurrNavItem) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="cloudWhite.50">
      <OrangeBar />
      <Container>
        <Flex py={{ base: "1.5em", md: "2em" }}>
          <HeadingLogo />
          <Spacer />
          <Show above="lg">
            <DesktopMenu {...curr} />
          </Show>
          <HStack spacing={0}>
            {/* <Search /> */}
            <Show below="lg">
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={"1em"} h={"1em"} />
                  ) : (
                    <HamburgerIcon w={"1.5em"} h={"1.5em"} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Show>
          </HStack>
        </Flex>
      </Container>
      <Flex justify={"flex-end"} w="full">
        <Collapse in={isOpen} animateOpacity>
          <MobileMenu />
        </Collapse>
      </Flex>
    </Box>
  );
}

const HeadingLogo = () => {
  return (
    <Flex>
      <Flex width={{ base: "1.5em", lg: "2em" }}>
        <BlockLogo />
      </Flex>
      <VerticalDivider style={{ margin: "0 1em 0 1em" }} />
      <Stack spacing={0}>
        <Heading as={Link} href="\#" fontSize={{ base: "1xl", md: "2xl" }}>
          Contextual Engineering <br /> Research Group
        </Heading>
        <Show above="md">
          <Link href="http://illinois.edu/" fontSize={"sm"}>
            University of Illinois Urbana-Champaign
          </Link>
        </Show>
      </Stack>
    </Flex>
  );
};

// TO-DO: Simplify names, customize & simplify styling properties and behaviors
// BUG: Dropdown SUCKS and does not line up with the carrot
const DesktopMenu = (curr: CurrNavItem) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const linkColor = "gray.600";
  const linkHoverColor = "illiniOrange";

  return (
    <HStack>
      {navbarItems.map(({ label, link, children }) => (
        <Box key={label}>
          <Popover
            trigger={"hover"}
            placement={"bottom-start"}
            onOpen={onOpen}
            onClose={onClose}
            openDelay={0}
          >
            <PopoverTrigger>
              <HStack
                as={Link}
                href={link}
                role={"group"}
                m={"0.5em"}
                spacing={0}
              >
                <Link // Technically should be Text, but this maintains consistent hover fade-in
                  fontSize={"lg"}
                  fontWeight={"semibold"}
                  color={label === curr.label ? linkHoverColor : linkColor}
                  // BUG: If toggle width instead, pushes the text up a few pixels. Workaround puts all the text slightly off vertical center
                  borderBottomWidth={"0.15em"}
                  borderBottomColor={
                    label === curr.label ? linkHoverColor : "cloudWhite.50"
                  }
                  _groupHover={{ color: linkHoverColor }}
                >
                  {label}
                </Link>
                {children && (
                  <ChevronDownIcon
                    boxSize="1.5em"
                    color={label === curr.label ? linkHoverColor : linkColor}
                    transition={"transform .25s"}
                    _groupHover={{
                      color: linkHoverColor,
                      transform: "rotate(180deg)",
                    }}
                  />
                )}
              </HStack>
            </PopoverTrigger>

            {/* TO-DO: Revise desktop UI to indicate a dropdown */}
            {children && (
              <PopoverContent rounded={"none"} minW="xs">
                <PopoverArrow />
                <Stack spacing={0} divider={<StackDivider />}>
                  {children.map((child) => (
                    <DesktopDropdownItem
                      key={child.label}
                      {...child}
                      shouldHighlight={child.label === curr?.childLabel}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </HStack>
  );
};

// Consider horizontal dividers, hover over anywhere in row should hihlight text (instead of just text)
// BUG: CurrNavItem not lined up with rest. Click About and compare against Research
const DesktopDropdownItem = ({ label, link, shouldHighlight }: NavItem) => {
  const linkColor = "gray.600";
  const highlightColor = "illiniOrange";

  return (
    <Link href={link} role={"group"} px={"1em"} py={"0.5em"} w="full">
      <Flex>
        <Box>
          <Text
            color={shouldHighlight ? highlightColor : linkColor}
            _groupHover={{ color: highlightColor }}
          >
            {label}
          </Text>
        </Box>
        <Spacer />
        <ChevronRightIcon
          color={"illiniOrange"}
          boxSize={"1.5em"}
          transition={"all .3s ease"}
          transform={"translateX(-1em)"}
          opacity={0} // Invisible until _groupHover
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
        />
      </Flex>
    </Link>
  );
};

const MobileMenu = () => {
  return (
    <VStack
      bg={"cloudwhite.50"}
      py={"0.5em"}
      minW={{ base: "100vw", sm: "sm" }}
      display={{ lg: "none" }}
      borderWidth="0.1em"
      divider={<StackDivider />}
    >
      {navbarItems.map((item) => (
        <MobileDropdownItem key={item.label} {...item} />
      ))}
    </VStack>
  );
};

const MobileDropdownItem = ({ label, children, link }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack>
      {/* TO-DO: background and text changes color during hover, though might be misleading UI if there's children (dropdown) */}
      <Flex align={"center"} px={"1em"}>
        <Link href={link} fontSize="xl" fontWeight={"semibold"}>
          {label}
        </Link>
        <Spacer />
        {/* TO-DO: Wrap with IconButton (?) */}
        {children && (
          <Icon
            as={ChevronDownIcon}
            onClick={onToggle}
            boxSize="1.5em"
            _hover={{ color: "illiniOrange" }}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
          />
        )}
      </Flex>
      {/* Bug: Dropdown does not close smoothly */}
      <Collapse
        in={isOpen}
        animateOpacity /*style={{ marginTop: "0!important" }}*/
      >
        <Divider />
        <Stack mt={"0.5em"} divider={<StackDivider />}>
          {children?.map((child) => (
            <Link key={child.label} href={child.link} pl={"2em"}>
              {child.label}
            </Link>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

// TO-DO: Functionality lol
const Search = () => {
  return (
    <IconButton
      variant="ghost"
      _hover={{
        bg: "none",
        color: "illiniOrange",
      }}
      aria-label="Open Search Bar"
    >
      <SearchIcon />
    </IconButton>
  );
};
