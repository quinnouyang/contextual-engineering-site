import Footer from "../src/components/Footer";
import NavBar from "../src/components/NavBar/NavBar";

export default function ResourcesPage() {
  return (
    <>
      <NavBar {...{ label: "Research", childLabel: "Resources" }} />
      <Footer />
    </>
  );
}
