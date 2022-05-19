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
import { NavItem, CurrNavItem, NAVBAR_ITEMS } from "../types/navigation";
import OrangeBar from "../figures/orange-bar";

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
      <Flex /*position="absolute"*/ justify={"flex-end"} w="full">
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
          <Heading as={Link} href="\#" fontSize={{ base: "1xl", md: "2xl" }}>
            Contextual Engineering <br /> Research Group
          </Heading>
          <Show above="md">
            <Link href="http://illinois.edu/" fontSize={"sm"}>
              University of Illinois Urbana-Champaign
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
                m={"0.5em"}
                fontSize={"lg"}
                fontWeight={"semibold"}
                color={item.label === curr.label ? linkHoverColor : linkColor}
                borderBottomWidth={item.label === curr.label ? "0.15em" : 0}
                borderBottomColor="illiniOrange"
              >
                {item.label}
              </Link>
            </PopoverTrigger>

            {item.children && (
              <PopoverContent rounded={"none"} minW="xs">
                <PopoverArrow />
                <VStack spacing={0} align="start">
                  {item.children.map((child) => (
                    <DesktopDropdownItem
                      key={child.label}
                      {...child}
                      shouldHighlight={child.label === curr?.childLabel}
                    />
                  ))}
                </VStack>
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
  // subLabel,
  shouldHighlight,
}: NavItem) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const highlightColor = useColorModeValue("illiniOrange", "white");

  return (
    <Link href={href} role={"group"} px={"1em"} py={"0.5em"} w="full">
      <Flex>
        <Box>
          <Text
            color={shouldHighlight ? highlightColor : linkColor}
            _hover={{ color: highlightColor }}
          >
            {label}
          </Text>
          {/* <Text fontSize={"sm"}>{subLabel}</Text> */}
        </Box>
        <Spacer />
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-1em)"}
          opacity={0} // Invisible until _groupHover
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
        >
          <Icon
            color={"illiniOrange"}
            w={"1.5em"}
            h={"1.5em"}
            as={ChevronRightIcon}
          />
        </Flex>
      </Flex>
    </Link>
  );
};

const MobileMenu = () => {
  return (
    <VStack
      bg={useColorModeValue("white", "gray.800")}
      py={"0.5em"}
      spacing={"0.5em"}
      minW={{ base: "100vw", sm: "sm" }}
      display={{ lg: "none" }}
      borderWidth="0.1em"
      divider={<StackDivider />}
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
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
        px={"1em"}
      >
        <Link href={href ?? "#"} fontSize="xl" fontWeight={"semibold"}>
          {label}
        </Link>
        <Spacer />
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
        {/* Smh slightly diff color than <StacDivider> lol */}
        <Divider mt={"0.5em"} />
        <VStack
          mt={"0.5em"}
          spacing={"0.5em"}
          align={"start"}
          divider={<StackDivider borderColor={"cloudWhite.300"} />}
        >
          {/* children && [no ?] */}
          {children?.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              pl={"2em"}
              fontSize="md"
              _active={{ color: "illiniOrange" }}
            >
              {child.label}
            </Link>
          ))}
        </VStack>
      </Collapse>
    </Stack>
  );
};
