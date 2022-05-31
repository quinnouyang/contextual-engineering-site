export interface Person {
  readonly name: string;
  readonly title?: string;
  readonly shortBio: string;
  readonly headshotPath: string;
  readonly externalSite?: string;
}

export const people: Array<Person> = [
  {
    name: "Ann-Perry Witmer",
    title: "Ph.D, P.E.",
    shortBio: `Ann holds Professional Engineer licenses and is a LEED Accredited Professional. In addition to teaching senior design and contextual engineering courses at UIUC, Ann acts as faculty advisor to Engineers Without Borders-UIUC and AWWA/WEF student chapters. Her research focus is on investigating the relationship between technical design and non-engineering considerations such as politics, culture and economics.`,
    headshotPath: "/images/smiley-e1580149018141-768x1024.jpeg/",
    externalSite:
      "https://appliedresearch.illinois.edu/directory/profile/awitmer",
  },
  {
    name: "Abhiroop Chattopadhyay",
    title: "P.E., M.S.",
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
    title: "E.I.T",
    shortBio: `Emily is a direct PhD student in Contextual Engineering through the Department of Agricultural and Biological Engineering. She is interested in the contextual applications of international engineering in specific reference to water infrastructure projects. In her research, she hopes to identify ways large organizations, such as NGO aide organizations, can apply contextual engineering to increase efficiency and applicability in water systems.`,
    headshotPath:
      "https://contextual.engineering.illinois.edu/wp-content/uploads/2021/10/244931942_480104406315112_8069889508813995790_n.jpg",
  },
  {
    name: "Alina “Rory” Lusebrink",
    shortBio: `Alina (“Rory”) Lusebrink (per/they) is a Ph.D. student in Systems and Entrepreneurial Engineering and a SURGE Fellow.
Per is interested in the use of bioinspired materials in design and implementation to address climate change appropriately for distinct physical and societal landscapes. They are particularly focused on making sustainable change within communities.`,
    headshotPath:
      "https://contextual.engineering.illinois.edu/wp-content/uploads/2022/01/rory-768x960.jpg",
  },
  {
    name: "Julissa Nunez",
    shortBio: `Julissa is second year Masters student in the department of Agriculture and Biological Engineering studying Contextual Engineering. Her masters research is focused on the application of place based context to drinking water system design. Specifically, she aims to identify contextual inflection points in the design process.`,
    headshotPath:
      "https://contextual.engineering.illinois.edu/wp-content/uploads/2020/10/julissa.jpg",
  },
  {
    name: "Jessica Altenberg",
    shortBio: `Jessica Altenberg is a sophomore studying Mechanical Engineering. Besides engaging in Contextual Engineering research, Jessica is involved in American Society of Mechanical Engineers and TAMID. Jessica is a member of the Special projects team for ASME, working on projects for Engineering Open House and other events throughout the school year.`,
    headshotPath: `https://contextual.engineering.illinois.edu/wp-content/uploads/2020/04/Professional-Headshot.jpg`,
  },
  {
    name: "Kariem Hashem",
    shortBio: `Kariem Hashem is a sophomore studying Civil and Environmental Engineering. Aside from being a member of the contextual engineering research group, Kariem is the project lead of a pedestrian bridge project in Chilleweni, Malawi, which operates as part of the University of Illinois’ Engineers Without Borders chapter. `,
    headshotPath: `https://contextual.engineering.illinois.edu/wp-content/uploads/2020/04/38515476_1949266065135076_7262329478905331712_n.jpg`,
  },
];