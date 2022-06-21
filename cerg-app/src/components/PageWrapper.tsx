import { Flex, Spacer } from "@chakra-ui/react";
import { CategoryLabel } from "../types/navigation-types";
import Footer from "./Footer";
import NavBar from "./NavBar/NavBar";

type PageWrapperProps = {
  category?: CategoryLabel;
  bgColor?: string;
  children?: React.ReactNode;
};

export default function PageWrapper({
  category,
  bgColor,
  children,
}: PageWrapperProps) {
  const currCategory = category ?? { label: "" };

  return (
    <Flex direction="column" minH="100vh" bg={bgColor ?? "lightGrey"}>
      <NavBar {...currCategory} />
      {children}
      <Spacer />
      <Footer />
    </Flex>
  );
}
