import { Link } from "@chakra-ui/react";
import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";

export default function Page() {
  return (
    <>
      <NavBar />
      <Link href="/#">Go back!</Link>
      <Footer />
    </>
  );
}
