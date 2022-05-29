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
} from "@chakra-ui/react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const illiniBlueOpaque = "rgba(19, 41, 75, 0.5)";
const illiniBlueOpaqueHover = "rgba(19, 41, 75, 0.75)";

const sliderSettings = {
  dots: true,
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
    title: "Photo 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://contextual.engineering.illinois.edu/wp-content/uploads/2018/06/spring-measurement-students.jpg",
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

  return (
    <Box position={"relative"}>
      <Show above="md">
        <IconButton
          aria-label="left-arrow"
          position="absolute"
          left={"2em"}
          top={"50%"}
          color="cloudWhite.50"
          background={illiniBlueOpaque}
          _hover={{ background: illiniBlueOpaqueHover }}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <ChevronLeftIcon boxSize="2em" />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          position="absolute"
          right={"2em"}
          top={"50%"}
          color="cloudWhite.50"
          background={illiniBlueOpaque}
          _hover={{ background: illiniBlueOpaqueHover }}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <ChevronRightIcon boxSize="2em" />
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
                  background={illiniBlueOpaque}
                  p="1em"
                  maxW="60ch"
                  _hover={{ background: illiniBlueOpaqueHover }}
                >
                  <Heading
                    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    color="cloudWhite.50"
                  >
                    {card.title}
                  </Heading>
                  <Text
                    fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    color="cloudWhite.50"
                  >
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
