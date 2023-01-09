import {
  // CloseButton,
  Flex,
  // Heading,
  // Link,
  Spacer,
  // Text,
} from "@chakra-ui/react";
import Head from "next/head";
// import { useEffect, useState } from "react";
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
  // const [cookieClosed, setCookieClosed] = useState(false);
  // useEffect(() => {
  //   if (localStorage["cookieClosed"] || cookieClosed) {
  //     setCookieClosed(true);
  //     localStorage["cookieClosed"] = true;
  //   }
  // }, [cookieClosed]);

  const fullTitle = // If not specified, assume true (i.e. no secondary only if explicitly false)
    includeSecondaryTitle === false
      ? mainTitle
      : mainTitle + " | Contextual Engineering at UIUC";

  return (
    <>
      {/* {!cookieClosed ? (
        <Flex
          position="fixed"
          p="0.5em"
          justify="center"
          align="center"
          bg="illiniBlue"
        >
          <Spacer />
          <Heading>Cookie Notice</Heading>
          <Text color="white" fontSize={["xs", "sm", "md"]} fontWeight="medium">
            We use Cookies on this site to enhance your experience and improve
            our marketing efforts. By continuing to browse without changing your
            browser settings to block or delete Cookies, you agree to{" "}
            <Link
              href="https://www.vpaa.uillinois.edu/resources/cookies"
              variant="underline"
              isExternal
            >
              the storing of Cookies and related technologies on your device.
            </Link>
          </Text>
          <Spacer />
          <CloseButton
            justifyContent="flex-end"
            p="1em"
            color="white"
            _hover={{ color: "illiniOrange" }}
            rounded="none"
            onClick={() => setCookieClosed(true)}
          />
        </Flex>
      ) : null} */}
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
