import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";
import TopBar from "../src/figures/top-bar";

export default function ResourcesPage() {
  return (
    <>
      <TopBar />
      <NavBar {...{ label: "Research", childLabel: "Resources" }} />
      <Footer />
    </>
  );
}
