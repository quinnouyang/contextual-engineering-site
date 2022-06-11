export interface Project {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly link?: string;
}

export const projects: Project[] = [
  {
    title: "Predicting Rural Responses to Climate Change",
    description: `Testing a modified version of the Contextual Tool, undergraduate
            researchers are surveying various rural communities in Illinois to
            determine their community influences. This is probably not fully
            accurate. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    image: "/images/skateboard.jpeg",
    link: "/team",
  },
  {
    title:
      "Extra long title to test how extra long titles look. Okay, maybe a bit longer...",
    description:
      "“Applying Societal Context to Technical Design Processes” workshop will be held at the 129th ASEE Annual Conference and Exposition in Minneapolis, MN, June 26. Come and learn about how to apply Contextual Engineering to your engineering courses and practices. Visit this website for more information.",
    image: "/images/smiley-e1580149018141-768x1024.jpeg/",
  },
  {
    title: "Predicting Rural Responses to Climate Change",
    description: `Testing a modified version of the Contextual Tool, undergraduate
            researchers are surveying various rural communities in Illinois to
            determine their community influences. This is probably not fully
            accurate. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    image: "/images/skateboard.jpeg",
    link: "/team",
  },
];
