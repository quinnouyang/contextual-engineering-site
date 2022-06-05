import {
  Flex,
  // Text,
  Stack,
  Collapse,
  Icon,
  Link,
  useDisclosure,
  Spacer,
  Divider,
  StackDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { NavItem, navbarItems } from "../../types/navigation";

export default function MobileMenu() {
  return (
    <Stack
      bg="cloudWhite.50"
      py="0.5em"
      minW={{ base: "100vw", sm: "sm" }}
      // display={{ lg: "none" }}
      borderWidth="0.1em"
      divider={<StackDivider />}
    >
      {navbarItems.map((item) => (
        <MobileDropdownItem key={item.label} {...item} />
      ))}
    </Stack>
  );
}

const MobileDropdownItem = ({ label, children, link }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack>
      {/* TO-DO: background and text changes color during hover, though might be misleading UI if there's children (dropdown) */}
      <Flex align="center" px="1em">
        <Link href={link} fontSize="xl" fontWeight="semibold">
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
            transition="all 0.25s ease-in-out"
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
        <Stack mt="0.5em" divider={<StackDivider />}>
          {children?.map((child) => (
            <Link key={child.label} href={child.link} pl="2em">
              {child.label}
            </Link>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
