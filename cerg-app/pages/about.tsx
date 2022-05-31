import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";

export default function AboutPage() {
  return (
    <>
      <NavBar {...{ label: "About" }} />
      <Footer />
    </>
  );
}
