import { Box } from "@chakra-ui/react";
import { CategoryLabel } from "../types/navigation-types";
import Footer from "./Footer";
import NavBar from "./NavBar/NavBar";

type PageWrapperProps = {
  category?: CategoryLabel;
  children?: React.ReactNode;
};

export default function PageWrapper({ category, children }: PageWrapperProps) {
  const currCategory = category ?? { label: "" };

  return (
    <Box bg="lightGrey">
      <NavBar {...currCategory} />
      {children}
      <Footer />
    </Box>
  );
}
