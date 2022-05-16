import { Box, Flex, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";
import BioCard from "../src/components/biocard";
import TopBar from "../src/figures/top-bar";

export interface IState {
  person: {
    name: string;
    creds?: string;
    shortBio: string;
    fullBio?: string;
    headshotPath?: string;
  };
}

const people: IState["person"][] = [
  {
    name: "Ann-Perry Witmer",
    creds: "Ph.D, P.E.",
    shortBio: `Ann holds Professional Engineer licenses and is a LEED Accredited Professional. In addition to teaching senior design and contextual engineering courses at UIUC, Ann acts as faculty advisor to Engineers Without Borders-UIUC and AWWA/WEF student chapters. Her research focus is on investigating the relationship between technical design and non-engineering considerations such as politics, culture and economics.`,
    headshotPath: "/images/smiley-e1580149018141-768x1024.jpeg/",
  },
  {
    name: "Abhiroop Chattopadhyay",
    creds: "P.E., M.S.",
    shortBio: `Abhi is a Ph.D. student in the department of Electrical and Computer Engineering. He is interested in the applicability of microgrids to serve the energy needs in communities where the traditional electrical grid is lacking. His work focuses on developing approaches to optimize the design of solar microgrid systems contextually, merging the technical design process with ethnography-based investigation methods for needs assessment.`,
    headshotPath:
      "https://contextual.engineering.illinois.edu/wp-content/uploads/2020/02/jsoltysikdotcom-45-768x512.jpg",
  },
  {
    name: "Muhammad Talal Khalid",
    shortBio: `Muhammad is a PhD student in the department of Electrical and Computer Engineering. Talal's interests lie in the electrification of the transportation sector, the largest contributor to US greenhouse gas emissions. He takes a systems perspective to understand the interactions between the operations of key stakeholders involved in the development of sustainable EVFCI in demographically and socioeconomically diverse communities by the application of System Dynamics framework.`,
    headshotPath:
      "https://contextual.engineering.illinois.edu/wp-content/uploads/2022/04/MTK-pic.jpg",
  },
  {
    name: "Emily Lawson-Bulten",
    creds: "E.I.T",
    shortBio: `Emily is a direct PhD student in Contextual Engineering through the Department of Agricultural and Biological Engineering. She is interested in the contextual applications of international engineering in specific reference to water infrastructure projects. In her research, she hopes to identify ways large organizations, such as NGO aide organizations, can apply contextual engineering to increase efficiency and applicability in water systems. In January of 2019, she began working at Kent Conservation District as a Natural Resource Engineer under the Natural Resource Conservation Service (NRCS).`,
    headshotPath:
      "https://contextual.engineering.illinois.edu/wp-content/uploads/2021/10/244931942_480104406315112_8069889508813995790_n.jpg",
  },
];

export default function TeamPage() {
  return (
    <>
      <TopBar />
      <NavBar {...{ label: "Team" }} />
      <VStack>
        <Heading>Meet the Team</Heading>
        <Box>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
            spacing={"2em"}
          >
            {people.map((person) => {
              return <BioCard key={person.name} person={person} />;
            })}
            {/* x2 people! */}
            {people.reverse().map((person) => {
              return <BioCard key={person.name} person={person} />;
            })}
          </SimpleGrid>
        </Box>
      </VStack>
      <Footer />
    </>
  );
}
