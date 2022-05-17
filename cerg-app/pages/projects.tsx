import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";

export default function ProjectsPage() {
  return (
    <>
      <NavBar {...{ label: "Research", childLabel: "Projects" }} />
      <Footer />
    </>
  );
}
