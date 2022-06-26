export type FocusArea = {
  readonly label: string;
  readonly description: string;
  readonly image: string;
};

export const focusAreas: FocusArea[] = [
  {
    label: "Contextualized Design and Technology",
    description: `The technical aspect of contextual engineering: the integration of community context into the applied design process. Critically includes processing the specific needs of a community to produce appropriate technical solutions.`,
    image: "/images/IMG_5374.JPG",
  },
  {
    label: "Identification of Community Influences",
    description: `Observing and analyzing the variety of social influences that impact engineering projects and make communities unique. The Contextual Predictive Tool is one comprehensive way for engineers to better understand the aspects that influence a community that they are working with.`,
    image: "/images/IMG_0628.jpg",
  },
  {
    label: "Effects of Stakeholder Motivations",
    description: `Analyzing the varying–and often conflicting–goals and motivations of stakeholders to determine how they affect project progress and outcomes. Usually includes non-profits, funding parties, the involved community, and more.`,
    image: "/images/mayor-interview-2.JPG",
  },
  {
    label: "Impacts of Group Marginalization",
    description: `Uplifting and integrating community voices that have historically been ignored in the engineering design process. This can include women or entire communities, in general groups or individuals not usually in the position to influence decisions.`,
    image: "/images/IMG_4124.jpg",
  },
  {
    label: "Climate Change Responses",
    description: `Applying context to ensure engineering projects are environmentally and socially sustainable, particularly for rural communities that are prone to the damaging effects of climate change. Although developing long-lasting solutions are important, significant focus often goes towards determining how various communities will respond to global warming, critically informing technical decisions.`,
    image: "/images/freetown mudslides.JPG",
  },
];
