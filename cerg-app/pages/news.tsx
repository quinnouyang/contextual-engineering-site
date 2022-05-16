import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";
import TopBar from "../src/figures/orange-bar";

export default function NewsPage() {
  return (
    <>
      <TopBar />
      <NavBar {...{ label: "News" }} />
      <Footer />
    </>
  );
}
