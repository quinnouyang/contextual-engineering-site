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

const textColor = "illiniBlue";
const highlightColor = "illiniOrange";

export default function NavBar(curr: CurrNavItem) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box /*bg="cloudWhite.50"*/>
      <OrangeBar />
      <Container>
        <Flex py={{ base: "1.5em", md: "2em" }}>
          <HeadingLogo />
          <Spacer />
          <Show above="lg">
            <DesktopMenu {...curr} />
          </Show>
          <Show below="lg">
            <HStack spacing={0}>
              {/* <Search /> */}
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
            </HStack>
          </Show>
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

// TO-DO: Simplify names and styling properties and behaviors (especially text color consistency)
// ISSUE: Dropdown headers with children do not remain higlighted when mouse moves to popover (e.g. Research)
const DesktopMenu = (curr: CurrNavItem) => {
  const { onOpen, onClose } = useDisclosure();

  return (
    <HStack>
      {navbarItems.map(({ label, link, children }) => (
        <Box key={label}>
          <Popover
            trigger={"hover"}
            placement={"bottom-start"}
            onOpen={onOpen}
            onClose={onClose}
            gutter={4} // Pixel distance between parent (bottom border) and content
            // Hard-coded eyeballed value to with ChevronIcon animation
            openDelay={50}
            closeDelay={50}
          >
            <PopoverTrigger>
              <HStack role={"group"} m={"0.5em"} spacing={0}>
                <Link // WORKAROUND: Should be text, but this keeps fade-in hover highlight consistent
                  href={link}
                  fontSize={"lg"}
                  fontWeight={"semibold"}
                  color={label === curr.label ? highlightColor : ""}
                  borderBottomWidth="0.15em"
                  borderBottomColor={
                    label === curr.label ? highlightColor : "transparent"
                  }
                  // "Balances" border thickeness to keep text centered
                  borderTopWidth="0.15em"
                  borderTopColor="transparent"
                >
                  {label}
                </Link>
                {children && (
                  <ChevronDownIcon
                    boxSize="1.5em"
                    color={label === curr.label ? highlightColor : textColor}
                    transition={"transform 0.25s"}
                    _groupHover={{
                      color: highlightColor,
                      transform: "rotate(180deg)",
                    }}
                  />
                )}
              </HStack>
            </PopoverTrigger>

            {children && (
              <PopoverContent minW="xs" rounded={"none"} shadow="none">
                <Stack mx={"1em"} spacing={0} divider={<StackDivider />}>
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

const DesktopDropdownItem = ({ label, link, shouldHighlight }: NavItem) => {
  return (
    <Flex as={Link} href={link} role={"group"} py={"0.5em"}>
      <Link // WORKAROUND: Should be text, but this keeps fade-in hover highlight consistent
        fontWeight={"semibold"}
        color={shouldHighlight ? highlightColor : textColor}
        _groupHover={{ color: highlightColor }}
        borderBottomWidth="0.15em"
        borderBottomColor={shouldHighlight ? highlightColor : "transparent"}
        // "Balances" border thickeness to keep text centered
        borderTopWidth="0.15em"
        borderTopColor="transparent"
      >
        {label}
      </Link>
      <Spacer />
      <ChevronRightIcon
        color={"illiniOrange"}
        boxSize={"1.5em"}
        transition={"all 0.25s"}
        transform={"translateX(-1em)"}
        opacity={0} // Invisible until _groupHover
        _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
        pt={"0.15em"} // WORKAROUND: "Balance" border thickness to keep icon centered
      />
    </Flex>
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
            transition={"all 0.25s ease-in-out"}
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
