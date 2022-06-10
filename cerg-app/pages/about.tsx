import Footer from "../src/components/footer";
import NavBar from "../src/components/NavBar/NavBar";
import CallToActionWithVideo from "../src/demo-components/cta-with-image";

export default function AboutPage() {
  return (
    <>
      <NavBar {...{ label: "About" }} />
      <CallToActionWithVideo />
      <Footer />
    </>
  );
}
