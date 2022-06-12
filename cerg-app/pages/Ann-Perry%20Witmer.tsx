import Footer from "../src/components/Footer";
import NavBar from "../src/components/NavBar/NavBar";
import { PEOPLE } from "../src/types/team-members";
import BioPage from "./bio-page";

export default function AnnPerryWitmerPage() {
  return (
    <>
      <NavBar {...{ label: "Template" }} />
      <BioPage {...PEOPLE[0]} />
      <Footer />
    </>
  );
}
