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
import { cards } from "../types/carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Illini Blue with opacity
const bgColor = "rgba(19, 41, 75, 0.5)";
const bgHoverColor = "rgba(19, 41, 75, 0.75)";

const fgColor = "cloudWhite.50";

const sliderSettings = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 7000,
};

// UI Issue: Card hover still interactible if no link
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
