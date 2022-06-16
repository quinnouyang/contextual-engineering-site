import Footer from "../src/components/Footer";
import NavBar from "../src/components/NavBar/NavBar";
import CallToActionWithVideo from "../src/demo/cta-with-image";

export default function AboutPage() {
  return (
    <>
      <NavBar {...{ label: "About" }} />
      <CallToActionWithVideo />
      <Footer />
    </>
  );
}
