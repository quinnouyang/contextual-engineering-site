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
      <Container maxW="container.lg">
        <Flex py={{ base: 4, md: 8 }} alignItems="center">
          <HeadingLogo />
          <Spacer />
          <Show above="md">
            <DesktopNav />
          </Show>
          <VStack spacing={0}>
            <Search />
            {/* Mobile menu ICON */}
            <Show below="md">
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
          </VStack>
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

// TO-DO
const Search = () => {
  return (
    <IconButton aria-label="Toggle Search Bar" variant="ghost">
      <SearchIcon />
    </IconButton>
  );
};

// Decent but hard-coded responsive headings
const HeadingLogo = () => {
  return (
    <>
      <BlockLogo style={{ width: "2em" }} /* Hard-coded:( */ />
      <Flex>
        <VerticalDivider
          style={{
            width: "0.1em",
            height: "inherit" /* BUG: height does not follow <BlockLogo> */,
            margin: "0 1em 0 1em",
          }}
        />
        <VStack alignItems={"left"} spacing={0}>
          <Link href="\#">
            <Heading fontSize={{ base: "1xl", md: "2xl" }}>
              Contextual Engineering
              <Show above="md">
                <br />
              </Show>{" "}
              Research Group
            </Heading>
          </Link>
          <Show above="sm">
            <Link href="http://illinois.edu/">
              <Text
                /*fontStyle={"thin"}*/ fontSize={{ base: "x-small", md: "sm" }}
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
const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <HStack direction={"row"} spacing={2} alignItems="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                  backgroundColor: "gray.50",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
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

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <VStack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
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
    children: [
      {
        label: "Dropdown go brr",
        href: "#",
      },
      {
        label: "Food (no link)",
      },
    ],
  },
  {
    label: "Research",
    href: "/page",
  },
  {
    label: "People",
    href: "/people",
  },
  {
    label: "Academics",
  },
  {
    label: "News",
  },
];
