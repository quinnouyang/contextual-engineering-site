import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";

export default function NewsPage() {
  return (
    <>
      <NavBar {...{ label: "News" }} />
      <Footer />
    </>
  );
}
