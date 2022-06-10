import Footer from "../src/components/footer";
import Hero from "../src/components/hero";
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
