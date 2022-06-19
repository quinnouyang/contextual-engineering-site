import Footer from "../src/components/Footer";
import HomepageHero from "../src/components/Heros/HomepageHero";
import NavBar from "../src/components/NavBar/NavBar";

export default function Homepage() {
  return (
    <>
      <NavBar {...{ label: "" }} />
      <HomepageHero />
      <Footer />
    </>
  );
}
