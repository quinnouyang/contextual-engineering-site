// POTENTIAL BUG: <DesktopNav> sometimes orients vertically instead of horizontally. Shrink and expand page width page in developer toosl to (usually) fix and don't hard refresh.

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
  useColorModeValue,
  useDisclosure,
  Heading,
  Container,
  VStack,
  Show,
  Spacer,
  HStack,
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

// Temporary fix: React 18 conflict (downgraded to v17 for now...)
export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Container
        maxW={{ base: "container.sm", md: "container.md", lg: "container.lg" }}
      >
        <Flex
          py={{ base: "1em", lg: "2em" }}
          alignItems="center"
          justifyContent={"center"}
        >
          <HeadingLogo />
          <Spacer />
          <Show above="lg">
            <DesktopNav />
          </Show>
          <HStack spacing={0}>
            <Search />
            {/* Mobile menu ICON */}
            <Show below="lg">
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Show>
          </HStack>
        </Flex>
      </Container>
      {/* Mobile menu DROPDOWN */}
      <Stack justify={"flex-end"} direction={"row"}>
        <Box
          w="50vw"
          position="absolute" // Overlap outside content by not stretching parent <Box>
          zIndex={"10"}
        >
          <Collapse in={isOpen} animateOpacity>
            <MobileNav />
          </Collapse>
        </Box>
      </Stack>
    </Box>
  );
}

// TO-DO: Functionality
// UI Bug: Icon bumps up during hover
const Search = () => {
  const iconColor = useColorModeValue("illiniOrange", "white");
  return (
    <IconButton
      aria-label="Toggle Search Bar"
      variant="ghost"
      rounded={"none"}
      _hover={{
        bg: "none",
        color: iconColor,
        borderBottomColor: "illiniOrange",
        borderBottomWidth: "0.2em",
      }}
    >
      <SearchIcon />
    </IconButton>
  );
};

// Decent but slightly hard-coded responsive headings
const HeadingLogo = () => {
  const linkHoverColor = useColorModeValue("illiniOrange", "white");
  return (
    <>
      <Flex /*alignContent={"center"}*/>
        <Flex width={{ base: "1.5em", lg: "2em" }}>
          <BlockLogo />
        </Flex>
        <VerticalDivider
          style={{
            width: "0.1em",
            height: "inherit",
            margin: "0 1em 0 1em",
          }}
          color="illiniBlue"
        />
        <VStack align={"center"} alignItems={"flex-start"} spacing={0}>
          <Link href="\#" _hover={{ textDecoration: "none" }}>
            <Heading
              fontSize={{ base: "1xl", lg: "2xl" }}
              _hover={{ color: linkHoverColor }}
            >
              Contextual Engineering
              <br />
              Research Group
            </Heading>
          </Link>
          <Show above="md">
            <Link
              href="http://illinois.edu/"
              _hover={{ textDecoration: "none" }}
            >
              <Text
                fontSize={{
                  base: "x-small",
                  lg: "sm",
                }}
                _hover={{ color: linkHoverColor }}
              >
                University of Illinois Urbana-Champaign
              </Text>
            </Link>
          </Show>
        </VStack>
      </Flex>
    </>
  );
};

// TO-DO: Simplify names, customize & simplify styling properties and behaviors
// UI Bug: Dropdown bumps up during hover
const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("illiniOrange", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <HStack direction={"row"} /*alignItems="center"*/>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"} gutter={0}>
            <PopoverTrigger>
              <Link
                href={navItem.href ?? "#"}
                fontSize={"lg"}
                color={linkColor}
                m={"0.5em"}
                py={"0.5em"}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                  borderBottomColor: "illiniOrange",
                  borderBottomWidth: "0.2em",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {/* Dropdown */}
            {navItem.children && (
              <PopoverContent
                // border={0}
                // boxShadow={"xl"}
                bg={popoverContentBgColor}
                // p={"0.5em"}
                rounded={"none"}
                minW={"xs"}
              >
                <Stack spacing={0}>
                  {navItem.children.map((child) => (
                    <DropdownContent key={child.label} {...child} />
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

const DropdownContent = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      px={"1em"}
      py={"0.5em"}
      rounded={"none"}
      _hover={{ bg: useColorModeValue("gray.100", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "illiniOrange" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0} // Invisible until _groupHover
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          // align={"center"}
          flex={1}
        >
          <Icon
            color={"illiniOrange"}
            w={"1.5em"}
            h={"1.5em"}
            as={ChevronRightIcon}
          />
        </Flex>
      </Stack>
    </Link>
  );
};

// TO-DO: Implement after DesktopNav is decent
const MobileNav = () => {
  return (
    <VStack
      bg={useColorModeValue("white", "gray.800")}
      // p={4}
      display={{ lg: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </VStack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        // py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About",
    href: "/#",
  },
  {
    label: "Research",
    children: [
      {
        label: "Focus Areas",
      },
      {
        label: "Projects",
      },
      {
        label: "Resources",
      },
    ],
  },
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "News",
  },
];
