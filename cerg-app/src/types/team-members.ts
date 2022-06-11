export interface Person {
  readonly name: string;
  readonly title?: string;
  readonly shortBio: string;
  readonly headshotPath: string;
  readonly externalSite?: string;
}

export const PEOPLE: Array<Person> = [
  {
    name: "Ann-Perry Witmer",
    title: "Ph.D, P.E.",
    shortBio: `Ann holds Professional Engineer licenses and is a LEED Accredited Professional. In addition to teaching senior design and contextual engineering courses at UIUC, Ann acts as faculty advisor to Engineers Without Borders-UIUC and AWWA/WEF student chapters. Her research focus is on investigating the relationship between technical design and non-engineering considerations such as politics, culture and economics.`,
    headshotPath: "/images/smiley-e1580149018141-768x1024.jpeg",
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

// readonly email?: string; // POSTPONED (AND UNDECIDED)
// readonly pronouns?: string; // POSTPONED
// readonly fullBio: string; // POSTPONE
// readonly researchTopics?: string[]; // POSTPONE
// readonly publications?: string[]; // POSTPONE
// readonly education?: string[]; // POSTPONE
// readonly awards?: string[]; // POSTPONE
// readonly affiliations?: string[]; // POSTPONE

// email: "awitmer@illinois.edu",
// fullBio: `Ann-Perry Witmer came to engineering in midlife when she enrolled in the University of Illinois’ College of Engineering after a successful career in newspapering. After graduating with honors and becoming the first civil engineering major  to win the prestigious Harvey Jordan Award from the College of Engineering, she became a practicing professional engineer in Wisconsin, designing water systems for communities throughout the Midwest. She also served as chair of the American Water Works Association’s state section and continues to play a leadership role in the international AWWA organization. Ann holds Professional Engineer licenses in Wisconsin, Illinois, and Minnesota, and is a LEED Accredited Professional.
// While working in consulting, Ann helped to create organizations that work directly with communities in Central America and the Caribbean to provide engineering assistance for disadvantaged communities in need of safe, sustainable drinking water, which led her to her current role at the University of Illinois. In addition to teaching senior design and contextual engineering courses in the Department of Agricultural and Biological Engineering, Ann leads the robust Contextual Engineering Research Group and acts as faculty advisor to Engineers Without Borders-UIUC and AWWA/WEF student chapters. Her service travels have taken her to Central America, Africa, Asia and South America, where she’s developed a deep understanding of the relationship between technical and social considerations that must be co-evaluated for design effectiveness.
// In addition to her B.S., M.S. and Ph.D. degrees from the University of Illinois, Ann also holds degrees in journalism and art history magna cum laude from Boston University. Her research focus is on investigating the relationship between technical design and non-engineering considerations such as politics, culture and economics.`,
//   researchTopics: [
//     `Identification of community context for the purpose of informing technical, organizational, and/or business practices to better meet community need`,
//     `Relationship between technical design/implementation/operation and non-technical variability of societal constitution`,
//     `Application of contextual analysis to design processes for the purpose of improving design sustainability and applicability`,
//   ],
//   publications: [
//     `Witmer, A., Andino Martinez, J.G., Coiado, O.C., Mingee, J.M., Andrade, F., and Pollack-Lagushenko, T., (2021) Building STEAM for Global Engineering through Collaboration with the Social Sciences and Humanities during the COVID-19 Pandemic,  American Society for Engineering Education Annual Conference & Exposition, Long Beach, CA`,
//     `Chattopadhyay, A. Witmer, A., and Sauer, P., 2021, The Need for Teaching Place-Based Contextualization for Sustainable Power System Infrastructure Design, IEEE Transactions on Power Systems, In press.`,
//     `Witmer, A., (2020) Cultivating the Assimilative Perspective in Contextual Engineering – Knowing What You Don't Know, Journal of Humanitarian Engineering, 8(1). Doi:10.36479/jhe.v8i1.173.`,
//     `Witmer, A., (2020), Contextual Engineering Leverages Local Knowledge to Guide Water System Design, J Am Water Works Assoc, 112: 42-50. doi:10.1002/awwa.1535`,
//     `Witmer, A. (2019) An Ethnographic Justification for Establishment of a Contextual Engineering Discipline, Journal of Engineering, Design and Technology, doi 10.1108/JEDT-11-2018-0211`,
//     `Witmer, A. (2019) Making the Case for Food Security through Contextual Engineering, Journal of Agriculture and Horticulture Research, Vol 2, Issue 1, 1-4.`,
//     `Witmer, A. (2018). Contextual Engineering To Address Preservation Of Rural Societies. Journal of Academic Perspectives Volume (3), 1.`,
//     `Witmer, A. (2018) Contextual Engineering Assessment Using an Influence-Identification Tool, Journal of Engineering, Design and Technology, Vol. 16, Issue 6, pp. 889-909. https://doi.org/10.1108/JEDT-05-2018-0091.`,
//     `Witmer, A. (2018), The Influence of Development Objectives and Local Context Upon International Service Engineering Infrastructure Design, International Journal of Technology Management, Vol. 17, Issue 2, pp. 135-150.`,
//     `Witmer, A. Women In Engineers Without Borders. Women And Ideas In Engineering: Twelves Stories From Illinois. Laura Hahn and Angie Wolters. Champaign, IL: University of Illinois Press, 2018. Print.`,
//     `Witmer, A. (2017, October), “Considering Context In Engineering Design” presented at 2017 Engineers Without Borders-USA National Conference, Milwaukee, WI.`,
//     `Witmer, A., & Jahnke, K. (2016, June), “Drawing Upon Non-Engineering Disciplines to Research Sustainability of Engineered Infrastructure in South America” presented at 2016 ASEE Annual Conference & Exposition, New Orleans, Louisiana. 10.18260/p.26868`,
//     `Jahnke, K., & Witmer, A., & Tan, M., & Witmer, G. F. (2016, June), “Bringing a Cross-Disciplinary, Contextual Approach to International Service Engineering Learning” presented at 2016 ASEE Annual Conference & Exposition, New Orleans, Louisiana. 10.18260/p.26395`,
//     `Witmer, A. (2015, April) “Letting Go For Success in International Service” presented at TEDxUIUC Conference, Urbana, IL.`,
//   ],
//   education: [
//     `Ph.D. in Agricultural and Biological Engineering, University of Illinois at Urbana-Champaign, 2018`,
//     `M.S. in Environmental Engineering, University of Illinois at Urbana-Champaign, 2016`,
//     `B.S. in Civil and Environmental Engineering, highest honors, University of Illinois at Urbana-Champaign, 2002`,
//     `B.S. in Journalism, magna cum laude, Boston University, 1982`,
//     `B.A. in Art History, magna cum laude, Boston University, 1982`,
//   ],
//   awards: [
//     `Peter J. Bosscher Award for Outstanding Faculty Advisor, Engineers Without Borders-USA, 2020`,
//     `Illinois International Graduate Achievement Award, 2017`,
//     `J. Frederick Miller Award for distinguished volunteer service, University YMCA, 2017`,
//     `Leon Smith Award for outstanding service, Wisconsin Water Association, 2008`,
//     `Harvey Jordan Award, University of Illinois College of Engineering, 2002`,
//     `Public Service Award, Isaac Walton League of America, Illinois Division, 1990`,
//     `Keystone Press Award, Pennsylvania Newspaper Publishers Association, 1984`,
//   ],
//   affiliations: [
//     `Research Scientist, Applied Research Institute`,
//     `Lecturer, Department of Agricultural and Biological Engineering`,
//     `Lecturer, Department of Electrical and Computer Engineering`,
//     `Lecturer, Carle Illinois College of Medicine`,
//     `Chair, Global STEAM Working Group of the Illinois Global Institute`,
//     `Illinois Water Scholar, Institute for Sustainability, Energy and Environment`,
//     `Faculty, Center for African Studies`,
//     `Faculty, Center for Latin American and Caribbean Studies`,
//     `Faculty, Center for Global Studies`,
//   ],
// },

// fullBio: `Abhiroop (Abhi) Chattopadhyay, P.E., is a Ph.D. student in the department of Electrical and Computer Engineering.

//   He is interested in the applicability of microgrids to serve the energy needs in communities where the traditional electrical grid is lacking. He is interested in understanding the socio-economic influences that can help more communities across the world utilize renewable energy. His work focuses on developing approaches to optimize the design of solar microgrid systems contextually, merging the technical design process with ethnography-based investigation methods for needs assessment.

//   Before joining the Contextual Engineering Research Group, he was a graduate research assistant at the Information Trust Institute, where his research focused on the development of cyber-threat detection and mitigation methods in large-scale power systems.

//   Abhi began his involvement with international engineering projects during his undergraduate days at Illinois Tech, and has continued his involvement ever since.
//   Before returning to academia for his M.S. degree, Abhi worked in the water and wastewater engineering consulting industry as a design electrical engineer. He also served as a prototyping engineer at a couple of startups and was a technical advisor for prototyping at another.`,
//   publications: [
//     `Chattopadhyay, A. -P. Witmer and P. W. Sauer, “The Need for Teaching Place-Based Contextualization for Sustainable Power System Infrastructure Design”, IEEE Transactions on Power Systems, [accepted], doi: 10.1109/TPWRS.2021.3072069.`,
//     `Chattopadhyay,and B. Kaufman, “Archimedean Principles and Mathematical Heritage: A Synthesis”, Axiomathes, vol.31, no. 2, pp. 145-155, 2021.`,
//     `Shenai, and A. Chattopadhyay, “Optimization of High-Voltage Wide Bandgap Semiconductor Power Diodes”, IEEE Transactions on Electron Devices, vol. 62, no, 2, pp. 359-365, 2015`,
//     `Chattopadhyay, A.-P. Witmer and P. W. Sauer, “Contextual Challenges in Using DERs to Advance Rural Electrification”, Accepted at the 55th Annual Hawaii International Conference on System Sciences (HICSS), 2022.`,
//     `Chattopadhyay, A. Valdes, P. W. Sauer, and R. Nuqui, “A Localized Cyber Threat Mitigation Approach for Wide Area Control of FACTS”, Accepted at IEEE SmartGridComm, 2021.`,
//     `Chattopadhyay, A. Valdes, P. W. Sauer, and R. Nuqui, “A Cyber Threat Mitigation Approach for Wide Area Control of SVCs using Stability Monitoring”, 2021 IEEE MadridPowerTech, 2021.(Recipient of the Basil Papadias Student Paper Award).`,
//     `Chattopadhyay, S. Dasgupta, R. Macwan, A. Valdes, G. Gross, P. W. Sauer, and R.Nuqui, “Fast, Approximate State Estimation-Based Approach for Cyber Threat Detection in Power Systems”, 53rd Annual Hawaii International Conference on System Sciences, 2020`,
//   ],
//   education: [
//     `B.S. in Electrical Engineering, summa cum laude, Illinois Institute of Technology, 2014`,
//     `M.S. in Electrical and Computer Engineering, University of Illinois Urbana-Champaign, 2020`,
//   ],

// fullBio: `Muhammad Talal Khalid is a PhD student in the department of Electrical and Computer Engineering.
//     Talal’s interests lie in the electrification of the transportation sector – the largest contributor to US greenhouse gas emissions. He is motivated to study the sustainable implementation of electric vehicle fast charging infrastructure (EVFCI) in communities to advance the deeper penetration of electric vehicles (EVs). He takes a systems perspective to understand the interactions between the operations of key stakeholders involved in the development of sustainable EVFCI in demographically and socioeconomically diverse communities by the application of System Dynamics framework. Talal contributes to CERG by proposing and analyzing policies to enhance EV adoption, engrained in the context of the community being served by the EVFCI.

//     Talal completed his Masters in Engineering and Masters in Engineering Management from the University of Technology Sydney, before joining UIUC, where he studies the techno-economic and social aspects of the electricity system. He completed his undergraduate education in Mechanical Engineering and also served as Mechanical Design Engineer at an MNC`,
//     education: [
//       `Masters in Engineering (Energy Planning and Policy), University of Technology Sydney, 2019`,
//       `Masters in Engineering Management, University of Technology Sydney, 2019`,
//       `Bachelors in Engineering, University of Technology Sydney, 2016`,
//     ],

// fullBio: `Emily Lawson-Bulten, E.I.T. is a direct to PhD student in Contextual Engineering through the Department of Agricultural and Biological Engineering. She is interested in the contextual applications of international engineering in specific reference to water infrastructure projects. In her research, she hopes to identify ways large organizations, such as NGO aide organizations, can apply contextual engineering to increase efficiency and applicability in water systems.

//   Emily received her B.S.E in Civil and Environmental Engineering from Calvin University with a minor in International Development Studies. There, she was active in international work as a research fellow of the Clean Water Institute, working with organizations like Reach Beyond in Ecuador, as a McGregor Fellow researching water policy in the Western United States, and with the Umm el-Jimal archaeological reservoir restoration project in Jordan.

//   After graduation from Calvin in 2017, Emily briefly worked in industry at Holland Engineering doing Natural Gas distribution design and environmental inspection. In January of 2019 she began working at Kent Conservation District as a Natural Resource Engineer under the Natural Resource Conservation Service (NRCS). At NRCS, Emily was privileged to work directly with landowners in 19 counties of Western Michigan, learning how to adjust engineering designs for their circumstances and operations. Through this work she reached out to the Contextual Engineering Team at Illinois and chose to pursue a degree under Ann Witmer in this new and innovative field.`,
//   education: [
//     `B.S.E. in Civil and Environmental Engineering w/ minor in International Development Studies from Calvin University 2017`,
//   ],
//   awards: [`Surge Fellowship at University of Illinois`],
