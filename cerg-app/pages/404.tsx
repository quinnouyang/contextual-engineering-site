import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";

export default function ErrorPage() {
  return (
    <>
      <NavBar {...{ label: "Error" }} />
      {/* <ErrorPage /> */}
      <Footer />
    </>
  );
}
