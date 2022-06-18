import Footer from "../src/components/Footer";
import NavBar from "../src/components/NavBar/NavBar";

export default function GroupPage() {
  return (
    <>
      <NavBar {...{ label: "About" }} />
      <Footer />
    </>
  );
}
