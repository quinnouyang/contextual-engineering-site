import Carousel from "../src/components/carousel";
import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";

export default function HomePage() {
  return (
    <>
      <NavBar {...{ label: "Home" }} />
      <Carousel />
      <Footer />
    </>
  );
}
