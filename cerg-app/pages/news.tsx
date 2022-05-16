import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";
import TopBar from "../src/figures/top-bar";

export default function NewsPage() {
  return (
    <>
      <TopBar />
      <NavBar {...{ label: "News" }} />
      <Footer />
    </>
  );
}
