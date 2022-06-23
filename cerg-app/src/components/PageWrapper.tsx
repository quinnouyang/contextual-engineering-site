import { Flex, Spacer } from "@chakra-ui/react";
import Head from "next/head";
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
  const fullTitle = // If not specified, assume true (i.e. no secondary only if explicitly false)
    includeSecondaryTitle === false
      ? mainTitle
      : mainTitle + " | Contextual Engineering at UIUC";

  return (
    <>
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
