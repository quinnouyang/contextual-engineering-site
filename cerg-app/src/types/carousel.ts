export interface Card {
  title: string;
  text: string;
  image: string;
  link?: string;
}

export const cards: Card[] = [
  {
    title: "Paper on AFER Wins Best Graduate Research Award at REFA Conference",
    text: "A team of graduate students presented their work on Apple Florida Ethanol Rosewater (AFER) at the 47th national REFA conference. I need more text so here we go, technical term technical term number 3.1415926...",
    image: "/images/skateboard.jpeg",
    // "https://contextual.engineering.illinois.edu/wp-content/uploads/2018/06/spring-measurement-students.jpg",
    link: "/team",
  },
  {
    title:
      "Extra long title to test how extra long titles look. Okay, maybe a bit longer...",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/KBM-animal-trough-2.jpeg",
    link: "/#",
  },
  {
    title: "Photo 3",
    text: "“Applying Societal Context to Technical Design Processes” workshop will be held at the 129th ASEE Annual Conference and Exposition in Minneapolis, MN, June 26. Come and learn about how to apply Contextual Engineering to your engineering courses and practices. Visit this website for more information.",
    image:
      "http://contextual.engineering.illinois.edu/wp-content/uploads/2018/01/IMG_0854.jpg",
  },
  // {
  //   title: "Hahahaha",
  //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   image: "noimagesoit'swhite",
  //   link: "/#",
  // },
];
