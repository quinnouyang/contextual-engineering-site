import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";
import TopBar from "../src/figures/orange-bar";

export default function ResearchPage() {
  return (
    <>
      <TopBar />
      <NavBar {...{ label: "Research" }} />
      <Footer />
    </>
  );
}
