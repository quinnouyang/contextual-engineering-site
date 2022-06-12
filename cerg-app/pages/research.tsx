import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";
import NavBar from "../src/components/NavBar/NavBar";

export default function ResearchPage() {
  return (
    <>
      <NavBar {...{ label: "Research" }} />
      {/* <Hero /> */}
      <Footer />
    </>
  );
}
