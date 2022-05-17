import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";
import WithBackgroundImage from "../src/demo-components/with-background-image-and-gradient";

export default function NewsPage() {
  return (
    <>
      <NavBar {...{ label: "News" }} />
      <WithBackgroundImage />
      <Footer />
    </>
  );
}
