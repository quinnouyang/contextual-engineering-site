import {
  Box,
  Flex,
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
import { HamburgerIcon, CloseIcon /*, SearchIcon*/ } from "@chakra-ui/icons";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import BlockLogo from "../../figures/block-logo";
import VerticalDivider from "../../figures/vertical-divider";
import OrangeBar from "../../figures/orange-bar";
import { CurrNavItem } from "../../types/navigation";

export default function NavBar(currPage: CurrNavItem) {
  const { isOpen, onToggle } = useDisclosure();
  const [isDesktop] = useMediaQuery("(min-width: 62em)"); // 62em is default lg screen width

  return (
    // boxShadow only needs to be visible at top. Hard-coded cloudWhite.300
    <Box bg="cloudWhite.50" boxShadow="0em 0em 0.5em 0em #D2D2D2">
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
              <IconButton // Eyeballed boxSizes
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon boxSize={{ base: "1em", md: "1.5em" }} />
                  ) : (
                    <HamburgerIcon boxSize={{ base: "1.5em", md: "2em" }} />
                  )
                }
                _hover={{ color: "illiniOrange", bgColor: "transparent" }} // custom-theme defaults don't work:(
                boxSize={{ base: "2.5em", md: "3em" }}
                variant="ghost"
                aria-label="Toggle Navigation"
              />
            </HStack>
          )}
        </Flex>
      </Container>

      <Flex position="absolute" justify="flex-end" w="full" zIndex={1}>
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
