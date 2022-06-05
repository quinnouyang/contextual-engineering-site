import {
  Box,
  Flex,
  // Text,
  Stack,
  Link,
  Popover,
  PopoverTrigger as OrigPopoverTrigger,
  PopoverContent,
  useDisclosure,
  Spacer,
  HStack,
  StackDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { NavItem, CurrNavItem, navbarItems } from "../../types/navigation";

// Temporary fix: React 18 conflict (downgraded to v17 for now...)
export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

// String mappings to custom-theme.ts
const textColor = "illiniBlue";
const highlightColor = "illiniOrange";

// TO-DO: Simplify names and styling properties and behaviors (especially text color consistency)
// ISSUE: Dropdown headers with children do not remain higlighted when mouse moves to popover (e.g. Research)
export default function DesktopMenu(curr: CurrNavItem) {
  const { onOpen, onClose } = useDisclosure();

  return (
    <HStack>
      {navbarItems.map(({ label, link, children }) => (
        <Box key={label}>
          <Popover
            trigger="hover"
            placement="bottom-start"
            onOpen={onOpen}
            onClose={onClose}
            gutter={4} // Pixel distance between parent (bottom border) and content
            // Hard-coded eyeballed value to with ChevronIcon animation
            openDelay={50}
            closeDelay={50}
          >
            <PopoverTrigger>
              <HStack role="group" m="0.5em" spacing={0}>
                <Link // WORKAROUND: Should be text, but this keeps fade-in hover highlight consistent
                  href={link}
                  fontSize="lg"
                  fontWeight="semibold"
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
}

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
