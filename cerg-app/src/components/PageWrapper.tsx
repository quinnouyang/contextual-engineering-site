import { CloseButton, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "./Navigation/Footer";
import NavBar from "./Navigation/NavBar";

type PageWrapperProps = {
  readonly mainTitle: string;
  readonly includeSecondaryTitle?: boolean;
  readonly category?: string; // To highlight the active link/category in the desktop navbar (applicable to most pages)
  readonly bgColor?: string;
  readonly children?: React.ReactNode;
};

export default function PageWrapper({
  mainTitle,
  includeSecondaryTitle,
  category,
  bgColor,
  children,
}: PageWrapperProps) {
  const [bannerClosed, setBannerClosed] = useState(false);
  useEffect(() => {
    if (localStorage["bannerClosed"] || bannerClosed) {
      setBannerClosed(true);
      localStorage["bannerClosed"] = true;
    }
  }, [bannerClosed]);

  const fullTitle = // If not specified, assume true (i.e. no secondary only if explicitly false)
    includeSecondaryTitle === false
      ? mainTitle
      : mainTitle + " | Contextual Engineering at UIUC";

  return (
    <>
      {!bannerClosed ? (
        <Flex p="0.5em" justify="center" align="center" bg="illiniBlue">
          <Spacer />
          <Text color="white" fontSize={["xs", "sm", "md"]} fontWeight="medium">
            Welcome to our new website! Some things may be broken or incomplete,
            so please bear with us.
          </Text>
          <Spacer />
          <CloseButton
            justifyContent="flex-end"
            p="1em"
            color="white"
            _hover={{ color: "illiniOrange" }}
            rounded="none"
            onClick={() => setBannerClosed(true)}
          />
        </Flex>
      ) : null}
      <Head key="PageWrapper">
        <title>{fullTitle}</title>
      </Head>
      <Flex direction="column" minH="100vh" bg={bgColor ?? "warmWhite"}>
        <NavBar currCategory={category ?? ""} />
        {children}
        <Spacer />
        <Footer />
      </Flex>
    </>
  );
}
