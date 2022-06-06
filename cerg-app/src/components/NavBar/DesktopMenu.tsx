import {
  Box,
  // Text,
  Stack,
  Link,
  Popover,
  PopoverTrigger as OrigPopoverTrigger,
  PopoverContent,
  useDisclosure,
  HStack,
  StackDivider,
  useMediaQuery,
  PopoverArrow,
} from "@chakra-ui/react";
import { ChevronDownIcon /*, ChevronRightIcon*/ } from "@chakra-ui/icons";
import { NavItem, CurrNavItem, navbarItems } from "../../types/navigation";

// Temporary fix: React 18 conflict (downgraded to v17 for now...)
export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

// String mappings to custom-theme.ts
const textColor = "illiniBlue";
const highlightColor = "illiniOrange";

// TO-DO: Simplify names and styling properties and behaviors (especially text color consistency)
// ISSUE: Dropdown headers do not remain higlighted/"selected" when cursor moves to popover (e.g. Research)
export default function DesktopMenu(curr: CurrNavItem) {
  const { onOpen, onClose } = useDisclosure();
  const [isNotTouchScreen] = useMediaQuery("(pointer: fine)");

  return (
    <HStack>
      {navbarItems.map(({ label, link, children }) => (
        <Box key={label}>
          <Popover
            trigger={isNotTouchScreen ? "hover" : "click"}
            placement="bottom-start"
            onOpen={onOpen}
            onClose={onClose}
            gutter={6} // Pixel distance between parent (bottom border) and content
            // Eyeballed values to match ChevronIcon animation (on hover)
            openDelay={50}
            closeDelay={50}
          >
            <Box role="group">
              <PopoverTrigger>
                <HStack m="0.5em" spacing={0}>
                  <Link
                    href={link}
                    fontSize="lg"
                    fontWeight="semibold"
                    _groupHover={{ color: highlightColor }}
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
                      transition="0.25s"
                      _groupHover={{
                        color: highlightColor,
                        transform: "rotate(180deg)",
                      }}
                    />
                  )}
                </HStack>
              </PopoverTrigger>

              {children && (
                <PopoverContent minW="xs" rounded="none" shadow="none">
                  <PopoverArrow />
                  <Stack mx="1em" spacing={0} divider={<StackDivider />}>
                    {children.map((child) => (
                      <MenuDropdownItem
                        key={child.label}
                        {...child}
                        // shouldHighlight={child.label === curr?.childLabel}
                      />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Box>
          </Popover>
        </Box>
      ))}
    </HStack>
  );
}

const MenuDropdownItem = ({ label, link /*, shouldHighlight*/ }: NavItem) => {
  return (
    <Link // WORKAROUND: Should be text, but this keeps fade-in hover highlight consistent
      href={link}
      w="full"
      py="0.5em"
      // fontWeight="semibold"
      // color={shouldHighlight ? highlightColor : textColor}
    >
      {label}
    </Link>
  );
};
