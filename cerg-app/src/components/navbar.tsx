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
  PopoverArrow,
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
import { NavItem, CurrNavItem, NAVBAR_ITEMS } from "../types/navigation";

// Temporary fix: React 18 conflict (downgraded to v17 for now...)
export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

/** TO-DO: Improve and polish mobile UI
 * Set illiniOrange color on appropriate interactions
 * Test various menu layouts (full width?)
 * Stop the menu from pushing content down (pure overlap)
 * Spacing, margin, etc. tweaks: visually distinct children and parents
 */
export default function NavBar(curr: CurrNavItem) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Container
        maxW={{ base: "container.sm", md: "container.md", lg: "container.lg" }}
      >
        <Flex py={{ base: "1.5em", md: "2em" }}>
          <HeadingLogo />
          <Spacer />
          <Show above="lg">
            <DesktopMenu {...curr} />
          </Show>
          <HStack spacing={0}>
            <Search />
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
      <Flex justifyContent={"flex-end"}>
        <Collapse in={isOpen} animateOpacity>
          <MobileMenu />
        </Collapse>
      </Flex>
    </Box>
  );
}

// TO-DO: Functionality lol
const Search = () => {
  const iconColor = useColorModeValue("illiniOrange", "white");
  return (
    <IconButton
      variant="ghost"
      rounded={"none"}
      _hover={{
        bg: "none",
        color: iconColor,
      }}
      aria-label="Toggle Search Bar"
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
        <VerticalDivider style={{ margin: "0 1em 0 1em" }} />
        <VStack /*align={"center"}*/ alignItems={"flex-start"} spacing={0}>
          <Link href="\#" _hover={{ textDecoration: "none" }}>
            <Heading
              fontSize={{ base: "1xl", md: "2xl" }}
              _hover={{ color: linkHoverColor }}
            >
              Contextual Engineering <br /> Research Group
            </Heading>
          </Link>
          <Show above="md">
            <Link
              href="http://illinois.edu/"
              _hover={{ textDecoration: "none" }}
            >
              <Text fontSize={"sm"} _hover={{ color: linkHoverColor }}>
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
const DesktopMenu = (curr: CurrNavItem) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("illiniOrange", "white");

  return (
    <HStack direction={"row"} /*alignItems="center"*/>
      {NAVBAR_ITEMS.map((item) => (
        <Box key={item.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                href={item.href ?? "#"}
                fontSize={"lg"}
                m={"0.5em"}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                color={item.label === curr.label ? linkHoverColor : linkColor}
                borderBottomWidth={item.label === curr.label ? "0.2em" : 0}
                borderBottomColor="illiniOrange"
              >
                {item.label}
              </Link>
            </PopoverTrigger>

            {item.children && (
              <PopoverContent rounded={"none"} minW="xs">
                <PopoverArrow />
                <Stack spacing={0}>
                  {item.children.map((child) => (
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

const DesktopDropdownItem = ({
  label,
  href,
  subLabel,
  shouldHighlight,
}: NavItem) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const highlightColor = useColorModeValue("illiniOrange", "white");

  return (
    <Link
      href={href}
      role={"group"}
      // display={"block"}
      px={"1em"}
      py={"0.5em"}
      rounded={"none"}
      // _hover={{ bg: useColorModeValue("gray.100", "gray.900") }}
      _hover={{ textDecoration: "none" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            // transition={"all .3s ease"}
            color={shouldHighlight ? highlightColor : linkColor}
            _hover={{ color: highlightColor }} /* _groupHover ? */
            // fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Spacer />
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-1em)"}
          opacity={0} // Invisible until _groupHover
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
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

const MobileMenu = () => {
  return (
    <VStack
      bg={useColorModeValue("white", "gray.800")}
      px={"1em"}
      py={"0.5em"}
      minW="xs"
      // w="fit-content"
      display={{ lg: "none" }}
      borderWidth="0.1em"
      // position={"absolute"}
    >
      {NAVBAR_ITEMS.map((item) => (
        <MobileDropdownItem key={item.label} {...item} />
      ))}
    </VStack>
  );
};

const MobileDropdownItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack>
      <Flex
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Link href={href ?? "#"}>{label}</Link>
        {children && (
          <Icon
            as={ChevronDownIcon}
            onClick={onToggle}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={"1.5em"}
            h={"1.5em"}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          // mt={2}
          pl={"1em"}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          // align={"start"}
        >
          {/* children && [no ?] */}
          {children?.map((child) => (
            <Link key={child.label} href={child.href}>
              {child.label}
            </Link>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
