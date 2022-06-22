export type Publication = {
  readonly title: string;
  readonly abstract?: string;
  readonly link?: string;
};

export const publications: Publication[] = [
  {
    title:
      "An ethnographic justification for establishment of a contextual engineering discipline",
    link: "https://www.emerald.com/insight/content/doi/10.1108/JEDT-11-2018-0211/full/html",
  },
  {
    title:
      "Contextual engineering assessment using an influence-identification tool",
    // link: "https://www.emeraldinsight.com/doi/abs/10.1108/JEDT-05-2018-0091",
  },
  {
    title:
      "Contextual Engineering Leverages Local Knowledge to Guide Water System Design",
    link: "https://awwa.onlinelibrary.wiley.com/doi/abs/10.1002/awwa.1535",
    abstract:
      "Working on a water system for a rural community in Ecuador, engineering practitioners examine the importance of place-based knowledge and an understanding of the local people when designing sustainable infrastructure.",
  },
  {
    title:
      "Cultivating the Assimilative Perspective in Contextual Engineering - Knowing What You Don't Know",
    abstract:
      "This paper emphasizes the need for direct interaction and communication with members of a client society, in addition to background research, in order to achieve a more robust perception of its context and needs.",
    link: "https://jhe.ewb.org.au/index.php/jhe/article/view/173",
  },
  {
    title: "Making the case for food security through contextual engineering",
    link: "https://www.opastonline.com/wp-content/uploads/2019/01/making-the-case-for-food-security-through-contextual-engineering-jahr-19.pdf",
  },
  {
    title:
      "The Need for Teaching Place-Based Contextualization For Sustainable Power System Infrastructure Design",
    abstract:
      "Using the example of energy infrastructure design, researchers examine the failures of student-designed international energy projects, and make the case for programs that teach contextual analysis to engineering students.",
    link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9399820",
  },
  {
    title:
      "The influence of development objectives and local context upon international service engineering infrastructure design",
    link: "https://www.ingentaconnect.com/contentone/intellect/tmsd/2018/00000017/00000002/art00002",
  },
  {
    title:
      "Understanding and incorporating stakeholder perspectives in international engineering: a phrase mining analysis",
    link: "https://doi.org/10.13031/aim.201901425",
  },
];
