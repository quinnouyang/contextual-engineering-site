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
import { navbarItems, NavCategory, NavPage } from "../../types/navigation-types";

export default function MobileMenu() {
  return (
    <Stack
      minW={{ base: "100vw", sm: "sm" }}
      p="1em"
      bg="cloudWhite.50"
      borderWidth={1}
      divider={<StackDivider />}
    >
      {navbarItems.map((item) => (
        <MenuItem key={item.label} {...item} />
      ))}
    </Stack>
  );
}
const MenuItem = (item: NavCategory | NavPage) => {
  const { isOpen, onToggle } = useDisclosure();
  const hoverColor = useMediaQuery("(pointer: fine)").at(0)
    ? "illiniOrange"
    : "illiniBlue";

  return (
    <Stack>
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
          _groupHover={{ color: hoverColor }}
        >
          {item.label}
        </Link>
        {"children" in item ? (
          <ChevronDownIcon
            transition="0.25s"
            _groupHover={{ color: hoverColor }}
            transform={isOpen ? "rotate(180deg)" : ""}
            boxSize="1.5em"
          />
        ) : null}
      </Flex>

      {/* Bug: Dropdown does not close smoothly */}
      <Collapse
        in={isOpen}
        animateOpacity /*</Stack>style={{ margin: "0!important" }}*/
      >
        <Divider />
        <Stack spacing={0} pl="1em" divider={<StackDivider />}>
          {"children" in item
            ? item.children.map(({ label, link }, i, arr) =>
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
              )
            : null}
        </Stack>
      </Collapse>
    </Stack>
  );
};
