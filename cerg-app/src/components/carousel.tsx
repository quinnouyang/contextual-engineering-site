import React from "react";
import {
  Box,
  IconButton,
  Stack,
  Heading,
  Text,
  Container,
  Link,
  Show,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Illini Blue with opacity
const bgColor = "rgba(19, 41, 75, 0.5)";
const bgHoverColor = "rgba(19, 41, 75, 0.75)";

const fgColor = "cloudWhite.50";

const sliderSettings = {
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 7000,
};

// UI Issue: Card hover still interactible if no link
interface Card {
  title: string;
  text: string;
  image: string;
  link?: string;
}

const cards: Card[] = [
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
    image:
      "http://contextual.engineering.illinois.edu/wp-content/uploads/2018/01/KBM-animal-trough-2.jpg",
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

export default function Carousel() {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const iconSize = useBreakpointValue({ base: "3em", lg: "4em" });

  return (
    <Box position={"relative"}>
      <Show above="md">
        <IconButton
          aria-label="left-arrow"
          position="absolute"
          h={iconSize}
          left={"2em"}
          top={"50%"}
          color={fgColor}
          background={bgColor}
          _hover={{ background: bgHoverColor }}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <ChevronLeftIcon boxSize={iconSize} />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          position="absolute"
          h={iconSize}
          right={"2em"}
          top={"50%"}
          color={fgColor}
          background={bgColor}
          _hover={{ background: bgHoverColor }}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <ChevronRightIcon boxSize={iconSize} />
        </IconButton>
      </Show>

      <Slider {...sliderSettings} ref={(slider: any) => setSlider(slider)}>
        {cards.map((card, index) => (
          // Could refactor (redundant nested Stacks because I forgot how to center)
          <Box
            key={index}
            h="50vh"
            backgroundSize="cover"
            backgroundPosition={"center"}
            backgroundImage={card.image}
          >
            <Container h="full">
              <Stack h="full" justifyContent={"center"}>
                <Stack
                  as={Link}
                  href={card.link}
                  background={bgColor}
                  p="1em"
                  maxW={{ base: "40ch", lg: "50ch" }}
                  _hover={{ background: bgHoverColor }}
                >
                  <Heading
                    fontSize={{ base: "2xl", lg: "3xl" }}
                    color={fgColor}
                  >
                    {card.title}
                  </Heading>
                  <Divider borderColor={fgColor} />
                  <Text fontSize={{ base: "sm", lg: "md" }} color={fgColor}>
                    {card.text}
                  </Text>
                </Stack>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
