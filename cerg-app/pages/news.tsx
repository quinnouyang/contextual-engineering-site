import Footer from "../src/components/Footer";
import NavBar from "../src/components/NavBar/NavBar";
import WithBackgroundImage from "../src/demo/with-background-image-and-gradient";

export default function NewsPage() {
  return (
    <>
      <NavBar {...{ label: "News" }} />
      <WithBackgroundImage />
      <Footer />
    </>
  );
}
