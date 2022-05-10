import { SimpleGrid } from "@chakra-ui/react";
import BioCard from "../src/components/biocard";
import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";

export default function Page() {
  return (
    <>
      <NavBar />
      <SimpleGrid columns={4}>
        <BioCard />
        <BioCard />
        <BioCard />
        <BioCard />
        <BioCard />
      </SimpleGrid>
      <Footer />
    </>
  );
}
