import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";
import TopBar from "../src/figures/top-bar";

export default function ProjectsPage() {
  return (
    <>
      <TopBar />
      <NavBar {...{ label: "Research", childLabel: "Projects" }} />
      <Footer />
    </>
  );
}
