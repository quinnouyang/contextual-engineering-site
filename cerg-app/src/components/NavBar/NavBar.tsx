import {
  Box,
  Flex,
  // Text,
  IconButton,
  Stack,
  Collapse,
  Link,
  useDisclosure,
  Heading,
  Container,
  Show,
  Spacer,
  HStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon/*, SearchIcon*/ } from "@chakra-ui/icons";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import BlockLogo from "../../figures/block-logo";
import VerticalDivider from "../../figures/vertical-divider";
import OrangeBar from "../../figures/orange-bar";
import { CurrNavItem } from "../../types/navigation";

export default function NavBar(currPage: CurrNavItem) {
  const { isOpen, onToggle } = useDisclosure();
  const [isDesktop] = useMediaQuery("(min-width: 62em) and (pointer: fine)"); // 62em is default lg screen width

  return (
    <Box /*bg="cloudWhite.50"*/>
      <OrangeBar />
      <Container>
        <Flex py={{ base: "1.5em", md: "2em" }}>
          <HeadingLogo />
          <Spacer />
          {isDesktop ? (
            <DesktopMenu {...currPage} />
          ) : (
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
                variant="ghost"
                aria-label="Toggle Navigation"
              />
            </HStack>
          )}
        </Flex>
      </Container>
      <Flex justify="flex-end" w="full">
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
          <Link href="http://illinois.edu/" fontSize="sm">
            University of Illinois Urbana-Champaign
          </Link>
        </Show>
      </Stack>
    </Flex>
  );
};

// TO-DO: Functionality lol
// const Search = () => {
//   return (
//     <IconButton
//       variant="ghost"
//       _hover={{
//         bg: "none",
//         color: "illiniOrange",
//       }}
//       aria-label="Open Search Bar"
//     >
//       <SearchIcon />
//     </IconButton>
//   );
// };
