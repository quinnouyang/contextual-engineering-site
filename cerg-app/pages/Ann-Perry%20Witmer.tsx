import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";
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
