import Footer from "../src/components/Footer";
import NavBar from "../src/components/NavBar/NavBar";

export default function ContextualEngineeringPage() {
  return (
    <>
      <NavBar {...{ label: "About" }} />
      <Footer />
    </>
  );
}
