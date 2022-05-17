import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";
import { Person } from "../src/types/team-members";

export async function BioPage(person: Person) {
  const paths = person.map((post) => ({
    params: { id: post.id },
  }));
  return (
    <>
      <NavBar {...{ label: "Template" }} />
      <Footer />
    </>
  );
}
