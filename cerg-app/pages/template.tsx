import Footer from "../src/components/Footer";
import NavBar from "../src/components/NavBar/NavBar";

export default function TemplatePage() {
  return (
    <>
      <NavBar {...{ label: "Template" }} />
      <Footer />
    </>
  );
}
