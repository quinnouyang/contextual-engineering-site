import PageWrapper from "../src/components/PageWrapper";
import {
  Container,
  VStack,
  Text,
  Link,
  Image,
  Center,
  Heading,
  Divider,
  Flex,
  Button,
} from "@chakra-ui/react";
import ColorHero, { ColorHeroProps } from "../src/components/Heros/ColorHero";
import React from "react";

const coursesHeroProps: ColorHeroProps = {
  variant: "largeHero",
  heading: "Courses",
  text: (
    <Text
      color="white"
      fontSize={{ base: "md", md: "lg", lg: "xl" }}
      fontWeight="medium"
    >
      A comprehensive list of UIUC courses on or related to contextual design
      and engineering, open to undergraduate and graduate students. Many of
      these are taught by our principal investigator,{" "}
      <Link
        href="https://appliedresearch.illinois.edu/directory/profile/awitmer"
        textDecoration="underline"
        _hover={{ color: "illiniBlue", textDecoration: "underline" }}
        color="white"
        isExternal
      >
        Ann Witmer
      </Link>
      .
    </Text>
  ),
  divider: true,
};

const textbookHeroProps: ColorHeroProps = {
  variant: "largeHero",
  heading: "Textbook",
  text: "Coming this summer: the first comprehensive text dedicated to Contextual Engineering!",
  bgColor: "illiniBlue",
  divider: true,
};

export default function CoursesTextbookPage() {
  return (
    <PageWrapper
      {...{ mainTitle: "Courses & Textbook", category: "Resources" }}
    >
      <ColorHero {...coursesHeroProps} />
      <Container py={["1em", "2em", "3em"]}>
        <VStack spacing={["1em", "1.5em"]}>
          {COURSES.map(({ title, subtitle, description, link }) => (
            <VStack
              key="title"
              p={["1.5em", "2em"]}
              align="left"
              bgColor="white"
            >
              <Heading
                as={link ? Link : undefined}
                href={link}
                textDecoration={link ? "underline" : undefined}
                _hover={{ textDecoration: link ? "underline" : "none" }}
                fontSize={["md", "xl", "2xl"]}
              >
                {title}
              </Heading>
              <Heading fontSize={["md", "xl"]}>{subtitle}</Heading>
              <Divider />
              {typeof description === "string" ? (
                <Text variant="article">{description}</Text>
              ) : (
                description
              )}
            </VStack>
          ))}
        </VStack>
      </Container>
      <ColorHero {...textbookHeroProps} />
      <Container py={["1em", "2em", "3em"]}>
        <Flex
          direction={{ base: "column-reverse", lg: "row" }}
          p={["1.5em", "2em"]}
          bgColor="white"
          gap={["1.5em", "2em"]}
        >
          <VStack spacing="1em">
            <Heading fontWeight="semibold">{textbook.title}</Heading>
            <Text variant="article">{textbook.description}</Text>
            <Button
              as={Link}
              href={textbook.link}
              isExternal
              size="lg"
              textColor="white"
              bg="illiniOrange"
              _hover={{ color: "white", bg: "illiniBlue" }}
            >
              See it on Amazon
            </Button>
          </VStack>
          <Image
            src="/images/textbook-cover.jpeg"
            w="full"
            maxW="20em"
            alignSelf="center"
            alt="Textbook cover"
          />
        </Flex>
      </Container>
    </PageWrapper>
  );
}

type Course = {
  title: string;
  subtitle: string;
  description: string | React.ReactNode;
  link?: string;
};

const COURSES: Course[] = [
  {
    title: "ABE 232/AFST 233 - Context in International Interventions",
    subtitle: "Term: Fall 2022. Credits: 3 hours",
    description:
      "An exploration of the progress and pitfalls of a real-life engineering project in Nigeria to make the case for Contextual Engineering, which evaluates non-technical influences to determine the likelihood that an infrastructure intervention will work for a particular international community. While this course includes engineering principles, we encourage non-engineers to enroll and learn about the relationship between technical and social sciences when working on international projects in Sub-Saharan Africa and beyond. Counts towards the non-western culture and social sciences general education categories.",
    link: "https://courses.illinois.edu/schedule/2022/fall/ABE/232",
  },
  {
    title: "ABE 532 - Advanced Context in International Interventions",
    subtitle: "Term: Fall 2022. Credits: 4 hours",
    description:
      "Sharing a lecture with ABE 232/AFST 233, this advanced course on Contextual Engineering addresses the loss of infrastructure usability, sustainability, and resiliency in non-industrialized societal settings that often results from disconnects and differing objectives among stakeholders. Using case studies and technical infrastructure designs, the impacts of globalization, Western attitudes, power dynamics, and place-based knowledge are explored and applied to engineering design and implementation processes. Application of these concepts will then be conducted for specific design efforts associated with the student's own discipline.",
    link: "https://courses.illinois.edu/schedule/2022/fall/ABE/532",
  },
  {
    title:
      "ABE 199 - International Engineering Service Project Management for Student Organizations",
    subtitle: "Term: Fall 2022. Credit: 1 hour (undergraduate)",
    description:
      "When students are drawn to participate in engineering service organizations, many new members quickly drop out in frustration from the complexity of technical and logistical challenges associated with working with an unfamiliar client. This course trains student practitioners on how to assess, design, and implement a project by addressing the technical design, societal conditions, and project management skills that are needed to allow participants to contribute meaningfully to their projects.",
    link: "https://courses.illinois.edu/schedule/2022/fall/ABE/199",
  },
  {
    title: "ABE 450/LAST440-550 - International Water Project I",
    subtitle:
      "Term: Fall 2022. Credits: 3 hours (undergraduate), 4 hours (graduate)",
    description: (
      <Text variant="article">
        The first part of two-semester applied design course providing
        assistance for a rural Central American community in designing and
        implementing a contextually appropriate water system. Enrollees will
        work closely with alumni mentors and professional advisors on client
        assessment, conceptual engineering design, and strategies for
        implementation, and have the opportunity to travel to Honduras during
        Winter Break. Check out the project website{" "}
        <Link
          href="http://hwpillinois.weebly.com/"
          variant="underline"
          isExternal
        >
          here!
        </Link>
      </Text>
    ),
    link: "https://courses.illinois.edu/schedule/2022/fall/ABE/450",
  },
  {
    title: "ABE 451/LAST441-550 - International Water Project II ",
    subtitle:
      "Term: Spring 2023. Credits: 3 hours (undergraduate), 4 hours (graduate)",
    description: (
      <Text variant="article">
        The second part of two-semester applied design course providing
        assistance for a rural Central American community in designing and
        implementing a contextually appropriate water system. Enrollees will
        work closely with alumni mentors and professional advisors on client
        assessment, conceptual engineering design, and strategies for
        implementation, and have the opportunity to travel to Honduras during
        Winter Break. Check out the project website{" "}
        <Link
          href="http://hwpillinois.weebly.com/"
          variant="underline"
          isExternal
        >
          here!
        </Link>
      </Text>
    ),
  },
];

const textbook = {
  title: "Contextual Engineering: Translating User Voice Into Design",
  description: `This book shows readers a new way of thinking about the engineering design process, as well as how to expand their understanding of the role of technical designers in society, whether working with international communities or user populations from their own hometown...At the same time, readers will learn techniques to explore their own predispositions and the biases they may not be aware they have, equipping them to interact with others more impartially. This self-reflection process also assists the designer in working with and accepting the uncertainty that is inherent in exploring context.`,
  link: "https://www.amazon.com/Contextual-Engineering-Translating-Synthesis-Technology/dp/3031076915",
};
