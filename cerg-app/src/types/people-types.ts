export type Person = {
  readonly name: string;
  readonly title?: string;
  readonly shortBio: string;
  readonly headshot: string;
  readonly link?: string;
};

export const people: Person[] = [
  {
    name: "Ann-Perry Witmer",
    title: "Ph.D, P.E.",
    shortBio: `The principle investigator at CERG, Ann holds professional engineer licenses and is a LEED accredited professional. In addition to teaching senior design and contextual engineering courses at UIUC, Ann acts as faculty advisor to Engineers Without Borders-UIUC and AWWA/WEF student chapters. Her research focus is on investigating the relationship between technical design and non-engineering considerations such as politics, culture, and economics.`, // REVISE
    headshot: "/images/headshots/smiley-e1580149018141-768x1024.jpeg", // Old site
    link: "https://appliedresearch.illinois.edu/directory/profile/awitmer",
  },
  {
    name: "Abhiroop Chattopadhyay",
    title: "M.S., P.E.",
    shortBio: `Abhi is a Ph.D. candidate in the department of Electrical and Computer Engineering. He is interested in developing energy solutions to serve the energy needs in communities where the traditional electrical grid is lacking. His work focuses on developing approaches to optimize the design of solar and wind energy systems contextually, merging the technical design process with ethnography-based investigation methods for needs assessment.`,
    headshot: "/images/headshots/jsoltysikdotcom-45-768x512.jpeg",
  },
  {
    name: "Muhammad Talal Khalid", // Old site
    shortBio: `Muhammad is a PhD student in the department of Electrical and Computer Engineering. Talal's interests lie in the electrification of the transportation sector, the largest contributor to US greenhouse gas emissions. He takes a systems perspective to understand the interactions between the operations of key stakeholders involved in the development of sustainable EVFCI in demographically and socioeconomically diverse communities by the application of system dynamics framework.`,
    headshot: "/images/headshots/MTK-pic.jpeg",
  },
  {
    name: "Emily Lawson-Bulten",
    title: "E.I.T",
    shortBio: `Emily (she/her) is a Ph.D. student in the department of Agriculture and Biological Engineering. Her research focuses on increasing community agency in disaster scenarios through their water infrastructure design. She has worked on water projects across the globe, including Jordan, Ecuador, Ethiopia, and currently, Honduras. Before joining CERG at UIUC, Emily worked for NRCS as a natural resource engineer and as a private consultant in construction management and natural gas distribution.`,
    headshot:
      "/images/headshots/244931942_480104406315112_8069889508813995790_n.jpeg", // Old site
  },
  {
    name: "Alina Lusebrink",
    title: "M.S.",
    shortBio: `Alina (hu/hus) is a 3rd year Ph.D. student in Agricultural and Biological Engineering. Hu is interested in the use of bioinspired materials in design and implementation to address climate change appropriately for distinct physical and societal landscapes, focusing particularly on making sustainable change within communities.`,
    headshot: "/images/headshots/rory-768x960.jpeg",
  },
  {
    name: "Julissa Nunez",
    shortBio: `Julissa is second year Masters student in the department of Agriculture and Biological Engineering studying contextual engineering. Her masters research is focused on the application of place based context to drinking water system design. Specifically, she aims to identify contextual inflection points in the design process.`,
    headshot: "/images/headshots/julissa.jpeg", // Old site
  },
  {
    name: "Jessica Altenberg",
    shortBio: `Jessie is a senior studying Mechanical Engineering with a minor in business. Jessie has been a member of CERG since spring 2020. For her first two years with the group, Jessie and her research partners conducted a case study on Enactus USA. Currently she is a research assistant for Talal Khalid, assisting with research related to optimizing public fast charging of electric vehicles, with a focus on demand charges. Outside of CERG Jessie is involved in TAMID and the Illinois Consulting Academy on campus.`,
    headshot: "/images/headshots/altenberg.jpeg",
  },
  {
    name: "Kariem Hashem", // Old site
    shortBio: `Kariem is a sophomore studying Civil and Environmental Engineering. Aside from being a member of the contextual engineering research group, Kariem is the project lead of a pedestrian bridge project in Chilleweni, Malawi, which operates as part of the University of Illinois' Engineers Without Borders chapter. `, // REVISE
    headshot:
      "/images/headshots/38515476_1949266065135076_7262329478905331712_n.jpeg",
  },
  {
    name: "Arin Rzonca",
    shortBio: `Arin (any pronouns) is a fifth-year undergraduate student in Computer Science. Arin is particularly interested in the ability of computing technology to help consultant groups better apply the information they gather from client communities. Arin's work focuses on domestic applications of contextual principles and the complex role of organizational stakeholders in service projects. Outside of CERG, Arin is interested in helping improve cyber resilience for critical infrastructure.`,
    headshot: "/images/headshots/arin-246x300.jpeg", // Old site
  },
  {
    name: "Jessica Mingee", // Old site
    shortBio: `Jessica is a junior pursuing a major in Mechanical Engineering and a minor in Sustainability, Energy, and Environment. She is a project co-lead of the Hopkins Park project team of Engineers Without Borders, studying how to repair their water and wastewater system. Based on her interest in understanding how contextual engineers gain the trust of their client communities, her research focuses on community organizing techniques and how contextual engineers can utilize them to be more effective in their infrastructure interventions.`,
    headshot: "/images/headshots/jessica-242x300.jpeg",
  },
  {
    name: "Aisha Syed",
    shortBio: `Aisha (she/her) is majoring in Geography with a concentration in GIS. She is passionate about using GIS and data analysis to inform environmentally and socially sustainable solutions. She is involved with the Contextual Engineering Research Group where she investigates community contexts, thus bridging the gap between engineering and social science. She is also involved in the BioMASS Research Group where she seeks to apply GIS to disaster relief and resilience efforts.`,
    headshot: "/images/headshots/headshot.png",
  },
  {
    name: "Abigail Mohan",
    shortBio: `Abby is a senior majoring in Electrical Engineering with a concentration in power systems and renewable energy. Outside of the research group, she is minoring in Sustainability, and involved in ECESAC and Women in Engineering. She is particularly interested in investigating how Contextual Engineering can be applied to the implementation of renewable technology, and how organizations such as Engineers Without Borders can incorporate Contextual Engineering concepts into their project processes.`,
    headshot: "/images/headshots/IMG_7767.jpeg",
  },
  {
    name: "Syd Trimble",
    shortBio: `Syd Trimble (she/they) is a 2022 UIUC graduate with a Bachelor's degree in Natural Resources & Environmental Science and a minor in Chemistry. She has a background in waste management and vermicomposting and supports community resiliency through citizen science volunteerism and career path. `,
    headshot: "/images/headshots/PXL_20210703_204128094.jpg",
  },
  {
    name: "Taylor Shimkus",
    shortBio: `Taylor (she/her) is a junior in Chemical Engineering with a minor in Computer Science. Her interests include water treatment, sustainable energy, and their contextual applications. In addition to working with CERG, she leads the Ecuador Water Distribution project for Engineers Without Borders.`,
    headshot: "/images/headshots/Shimkus_headshot.jpg",
  },
  {
    name: "Dale Robbennolt",
    shortBio: `Dale graduated from UIUC in 2022 with Bachelor's degrees in Civil Engineering and Sociology. His research focus is on contextual factors and social equity in transportation. He has also contributed to research in graduate engineering education and public transportation system responses to the COVID-19 pandemic. He is currently continuing his studies by pursuing a PhD in Civil Engineering in Transportation at UT Austin. `,
    headshot: "/images/headshots/Screen Shot 2022-06-25 at 2.41.27 AM.png",
  },
  {
    name: "Jacob Harris",
    shortBio: `Jacob is a senior in Engineering Mechanics. He has been on the Engineers without Borders Ecuador team since sophomore year. Jacob joined the Rural Context Identification for Climate Change Adaption in spring 2022.`,
    headshot:
      "/images/headshots/vOZsyDTK2-BeLVRdJxGDvgSN9mOz3cUz_p5sZtGQcejnRGWqOafReFhYU_vLDeqqgzzTlwSR70ngeII7VNA0v3vnzL_SuyI-Igl7v0ERWEFujMpv20qPsozEXBnG.png",
  },
  {
    name: "Connor LaSalle",
    shortBio: `Connor is a junior in Agricultural engineering, minoring in natural resource conservation. He has been a member of the contextual engineering research group for a semester, and enjoys all of the unique perspectives it offers in regards to engineering design. He is also a member of global engineering ambassadors, and pursuing a certificate in contextual engineering.`,
    headshot: "/images/headshots/08.jpg",
  },
  {
    name: "Namita Johri", // Old site
    shortBio: `Namita is a sophomore in Civil and Environmental Engineering, pursuing minors in Environmental Law and Economics, as well as Art and Design. She has interests in sustainability, clean water solutions, renewable energy, and environmental engineering. Namita assisted Keilin Jahnke with her research on the applications of contextual engineering in classroom settings, where they examined whether students equally consider technical and non-technical approaches to problem-solving. Currently, she is working on a research topic regarding the contextual implications of hydraulic fracking, such as environmental and economic considerations.`, // Truncated
    headshot: "/images/headshots/IMG_2966-204x300.jpeg",
  },
  {
    name: "Keilin Kahnke", // Old site
    title: "Ph.D.",
    shortBio: `Keilin recently completed her Ph.D. in the department of Agricultural and Biological Engineering.  Her research interests include the motivations of all stakeholders of international engineering projects and the impact of non-technical aspects on infrastructure design and durability in rural communities. Keilin is passionate about developing—and teaching others how to develop—engineering designs that are durable, usable, and meet real needs by understanding the context holistically.  Keilin teaches courses on both international engineering and innovation and works to help students enhance their creativity, acquire effective strategies to identity and define problems, and work through the design process.`, // Truncated
    headshot: "/images/headshots/KeilinJahnke_HeadshotOutdoor-2.jpeg",
  },
  {
    name: "Samantha Lindgren", // Old site
    title: "Ph.D.",
    shortBio: `A current Link Foundation Energy Fellow, Sam's current research aims to broaden our understanding of the role of youth in advancing sustainable energy in rural households in low- and middle-income countries. Specifically, she examines whether children's attitudes about energy affect household behaviors such as the adoption of efficient cookstoves or solar cookers, or decisions about fuel selection and use. She also works with informal educators at camps in rural Illinois and in Namibia, and at a high school in Cambodia, to assess how youth's attitudes about topics in sustainable energy and agriculture change after participating in activities that are focused on conservation, and aligned to the United Nation's Sustainable Development Goals and Education for Sustainable Development framework.`,
    headshot:
      "/images/headshots/88257A96-3C09-40CB-84B3-DC4E05FDFDF3-225x300.jpeg",
  },
  {
    name: "NIck Perozzi", // Old site
    title: "E.I.T.",
    shortBio: `Nick is a M.S. student in the Department of Agricultural and Biological Engineering. Looking at cultural, political, educational, technical and economic components of a project, his research focuses on international engineering projects and the impact of a project's origin on its execution and outcome. Nick has been involved with international engineering projects since his undergraduate days at Illinois, and he currently works as a project lead and a board member for a non-profit organization.`,
    headshot: "/images/headshots/Close-Up-250kb-300x300.jpeg",
  },
  {
    name: "Alex Timmons", // Old site
    title: "M.S.",
    shortBio: `Alex Timmons recently completed her master's degree in the Department of Agricultural and Biological Engineering. Her research focused on bridging the gap between a technical engineering mindset and a sociological and cultural focus in relation to engineering design projects, particularly internationally. Alex has a strong dual interest in engineering and social sciences and hopes to share this passion with others by encouraging the importance of cultural focus within technical design. Her undergraduate work focused particularly on water resources and systems and she hopes to expand on this work within her graduate studies, as well as studying the potential impact of contextual engineering processes on a global scale.`,
    headshot:
      "/images/headshots/Alexandra-Timmons-Engineering-Cropped-293x300.jpeg",
  },
  {
    name: "Kealie Vogel", // Old site
    title: "M.S.",
    shortBio: `Kealie received her B.S. in Natural Resources and Environmental Sciences with a concentration in Human Dimensions of the Environment at UIUC in 2019. Her research interests center around human interests within environmental policymaking and US energy policy, stakeholder experiences with environmental regulatory processes, and the relationship between stakeholder participation in these regulatory processes and positive environmental outcomes. Her graduate research focuses on the politics of the Dakota Access Pipeline (DAPL) in Illinois and Iowa.`,
    headshot: "/images/headshots/781A8542-202x300.jpeg", // Edited
  },
  {
    name: "Kelsey Schreiber", // Old site
    title: "M.S.",
    shortBio: `Kelsey recently completed her M.S. degree in the Department of Agricultural and Biological Engineering. Her research focused on the definition of success in international engineering. Looking at both qualitative and quantitative datasets, she hopes to explain the necessity of defining success from stakeholder perspectives and the implications this has on project sustainability. Kelsey has always enjoyed looking at the human aspect of engineering. As an undergraduate she researched the cross-section of water, energy, and policy, specifically working to quantify the potential direct and indirect energy and water savings from appliance retrofits at the residential scale. She also looked at the sociotechnical nature of green infrastructure plans in major U.S. cities and how that effects policymaking.`,
    headshot: "/images/headshots/schreiber_headshot-300x199.jpeg",
  },
  {
    name: "Cecilia Abbamonte", // Old site
    shortBio: `Cecilia is a senior studying Engineering Physics. Her research interests include applying principles of Contextual Engineering to domestic projects and exploring how engineering needs can vary within the United States, particularly in rural areas. Her current research involves reverse engineering the infrastructure in the Village of Hopkins Park, Illinois, to understand where the original engineers went wrong and how the designs could have been more successful. She also hopes to expand the findings to apply to rural infrastructure projects across the United States. Cecilia has also been involved in several international engineering projects, including water system design in Guatemala and Honduras.`,
    headshot: "/images/headshots/MVIMG_20190822_201756_1-225x300.jpeg",
  },
  {
    name: "Katlyn Carrington", // Old site
    shortBio: `Katlyn is currently a junior studying in the College of ACES with a major in Agricultural and Consumer Economics. Within a deep passion for global perspectives, she is pursuing a concentration in Policy, International Trade and Development. She seeks a deeper understanding of sustainable development efforts through her minor in Environmental Economics and Law. She then looks to create meaningful impact through applying her studies to a social entrepreneurship organization she is actively involved in – Illinois Enactus. She now serves as a project manager of an initiative known as International Sourcing Team, which looks for innovative entrepreneurial solutions for communities in need. She is particularly interested in investigating dynamic economic and cultural research and its potential contributions to sustainable development initiatives on both a domestic and global scale.`,
    headshot: "/images/headshots/KateCarrington_Photo.jpeg",
  },
  {
    name: "Ryan Lake", // Old site
    shortBio: `Ryan is a junior studying Civil and Environmental Engineering. His focus considers the need to apply Contextual Engineering to both domestic and international engineering/entrepreneurship projects. He is working with the organization Enactus USA to develop a domestic predictive tool and evaluate the criteria for success in student-led entrepreneurship projects. He is also the Internal Vice-President for Engineers Without Borders and a clarinet in the Marching Illini.`,
    headshot: "/images/headshots/Resumep1-214x300.jpeg",
  },
  {
    name: "Isabella Long", // Old site
    shortBio: `Isabella is currently a senior pursuing a degree in Agricultural and Biological Engineering. She has an interest in the human aspect of engineering, and the application of international engineering projects. Her research interests are focused on the application of contextual engineering in both domestic and international engineering projects. Currently, she is focused on the water and wastewater system of Hopkins Park, Illinois, and reverse engineering the project to understand what actions could have been done to create a more successful design. In addition to research, Isabella is a member of the Ecuador project team of Engineers Without Borders, studying how to design and install a new water distribution system to the community. `,
    headshot: "/images/headshots/headshot-226x300.jpeg",
  },
  {
    name: "Lavanya Upadhyaya", // Old site
    shortBio: `Lavanya is a junior pursuing a dual degree in Engineering Physics, with a concentration in Nuclear Engineering, and Statistics, a minor in Mathematics, and a certificate in Data Science and Analytics. Lavanya is one of the leads of the Hopkins Park wastewater system project team of Engineers Without Borders - UIUC, studying how to repair their wastewater system so that it better fits the needs of the community. She is also the Co-President of the EWB-UIUC Chapter, where she has worked on major projects such as establishing a network of external contacts for the chapter, improving communication between projects and the Executive Board, revamping organization and relay of information within the chapter, and applying for chapter-wide grants.`, // Truncated: first two paras
    headshot: "/images/headshots/lavanya-202x300.jpeg",
  },
  {
    name: "Quinn Ouyang",
    shortBio: `Quinn (he/him) is a sophomore studying computer science and music. Beyond applying software tools to aid projects, he is particularly interested in developing contextual approaches for digital user-informed interfaces. He also built some of the website that you're on right now.`,
    headshot: "/images/headshots/IMG_20220520_113156_250.jpg",
  },
  {
    name: "Aaryaman Patel",
    shortBio: `Aaryaman is a junior studying Mechanical Engineering. He has a profound interest in sustainability and hopes to incorporate it in the work he does as an engineer. He got involved with the Contextual Engineering team in the summer of 2021 and is currently working on improving the cardamom drying process for the farmers in Guatemala. He had the opportunity to talk about this project during the 2021 EWB 'Pathways to Resilience' Virtual Conference and even visit Guatemala for a site visit.`, // Truncated
    headshot: "/images/headshots/Headshot.jpg",
  },
  {
    name: "Alec McKay",
    shortBio: `Alec is a 5th year in Math and Physics. His interests include sustainability and data analysis. Alec joined the Cardamom project in spring 2022.`,
    headshot: "/images/headshots/Copy of Alec grad pic.jpg",
  },
];
