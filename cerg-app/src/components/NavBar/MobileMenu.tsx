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
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { NavItem, navbarItems } from "../../types/navigation";

// BUG: Carousel arrow overlays extended dropdown
export default function MobileMenu() {
  return (
    <Stack
      bg="cloudWhite.50"
      minW={{ base: "100vw", sm: "sm" }}
      p="1em"
      borderWidth={1}
      // display={{ lg: "none" }}
      divider={<StackDivider />}
    >
      {navbarItems.map((item) => (
        <MenuItem key={item.label} {...item} />
      ))}
    </Stack>
  );
}
const MenuItem = ({ label, children, link }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  // WORKAROUND: No higlight color if pressed on touchscreen
  const hoverColor = useMediaQuery("(pointer: fine)").at(0)
    ? "illiniOrange"
    : "illiniBlue";

  return (
    <Stack>
      <Flex
        as={Link}
        href={link}
        onClick={children && onToggle}
        role="group"
        justify="space-between"
        align="center"
      >
        <Link
          fontSize="xl"
          fontWeight="semibold"
          _groupHover={{ color: hoverColor }}
        >
          {label}
        </Link>
        {children && (
          <ChevronDownIcon
            transition="0.25s"
            _groupHover={{ color: hoverColor }}
            transform={isOpen ? "rotate(180deg)" : ""}
            boxSize="1.5em"
          />
        )}
      </Flex>

      {/* Bug: Dropdown does not close smoothly */}
      <Collapse
        in={isOpen}
        animateOpacity /*</Stack>style={{ margin: "0!important" }}*/
      >
        <Divider />
        <Stack spacing={0} pl="1em" divider={<StackDivider />}>
          {children &&
            children.map(({ label, link }, i, arr) =>
              arr.length - 1 !== i ? ( // Not last child
                <Link key={label} py="0.5em" href={link}>
                  {label}
                </Link>
              ) : (
                // Remove extra bottom padding of last child
                <Link key={label} pt="0.5em" href={link}>
                  {label}
                </Link>
              )
            )}
        </Stack>
      </Collapse>
    </Stack>
  );
};
