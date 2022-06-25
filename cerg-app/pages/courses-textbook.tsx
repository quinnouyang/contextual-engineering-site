import PageWrapper from "../src/components/PageWrapper";
import { Container, VStack, Box, Text, Link, Image, Center } from "@chakra-ui/react";
import ColorHero from "../src/components/Heros/ColorHero";

function InfoBox(props: any) {
  return <Text border="2px solid black" margin="10px" padding="5px">{ props.children }</Text>
}

const SPACING = "10px";

export default function CoursesTextbookPage() {
  return (
    <PageWrapper
      {...{ mainTitle: "Courses & Textbook", category: "Resources" }}
    >
      <ColorHero heading="Courses"></ColorHero>
      <VStack marginLeft="10%" marginRight="10%" marginBottom={SPACING}>
        {
          COURSES.map(course =>
            <Box backgroundColor="lightgray" width="100%" margin={SPACING}>
              <Text margin={SPACING}><b>{ course.title }</b></Text>
              <InfoBox>{ course.description }</InfoBox>
              {
                course.notices === undefined ? '' : course.notices.map(notice => <InfoBox>{ notice }</InfoBox>)
              }
            </Box>
          )
        }
      </VStack>
      <ColorHero heading="Textbook"></ColorHero>
      <Container marginTop={SPACING} marginBottom={SPACING}>
          <VStack spacing={SPACING}>
            <Center><Text fontSize="3xl">{ TEXTBOOK_TITLE }</Text></Center>
            <Text>{ TEXTBOOK_DESCRIPTION }</Text>
            <Link href={TEXTBOOK_URL} isExternal>
              <Center>
                <Image width="50%" height="50%" src={TEXTBOOK_IMAGE} />
              </Center>
            </Link>
            <Center>
                <Link href={ TEXTBOOK_URL } fontSize="2xl" color="blue" isExternal>Go to book</Link>
            </Center>
          </VStack>
      </Container>
    </PageWrapper>
  );
}

enum Semester {
  Fall,
  Spring
}

interface Course {
  semester: Semester;
  title: string;
  description: string;
  notices?: any[];
}

export const COURSES: Course[] = [
  {
      semester: Semester.Fall,
      title: 'ABE 232/AFST 233 – Context in International Interventions',
      description: 'An exploration of the progress and pitfalls of a real-life engineering project in Nigeria to make the case for Contextual Engineering, which evaluates non-technical influences to determine the likelihood that an infrastructure intervention will work for a particular international community. While engineering principles will be included in this course, non-engineers are encouraged to enroll and learn about the relationship between technical and social sciences when working on an international project in Sub-Saharan Africa and beyond. 3 credits.',
      notices: [<b>GEN ED COURSE IN NON-WESTERN CULTURE STUDIES AND SOCIAL SCIENCES!</b>]
  },
  {
      semester: Semester.Fall,
      title: 'ABE 532 – Advanced Context in International Interventions',
      description: 'Contextual Engineering addresses the loss of infrastructure usability, sustainability, and resiliency in non-industrialized societal settings that often results from disconnects and differing objectives among stakeholders. Using case studies and technical infrastructure designs, the impacts of globalization, Western attitudes, power dynamics, and place-based knowledge are explored and applied to engineering design and implementation processes. Application of these concepts will then be conducted for specific design efforts associated with the student’s own discipline. 4 credits.'
  },
  {
      semester: Semester.Fall,
      title: 'ABE 450/LAST440-550 – International Water Project I',
      description: 'First part of two-semester, applied design course provides assistance for a rural Central American community in designing and implementing a contextually appropriate water system. Enrollees will work closely with alumni mentors and professional advisors on client assessment, conceptual engineering design, and strategies for implementation, and have the opportunity to travel to Honduras during Winter Break. Undergrad-3 credits; Grad-4 credits.',
      notices: [
          'Returning for 2022-23 AY!!',
          <>Website: <Link href="http://hwpillinois.weebly.com/" color="blue" isExternal>http://hwpillinois.weebly.com/</Link></>
      ]
  },
  {
      semester: Semester.Spring,
      title: 'ABE 199 – International Engineering Service Project Management for Student Organizations',
      description: 'Students are drawn to participate in engineering service organizations for a variety of reasons, but with little preparation and understanding of the technical and logistical challenges associated with working with an unfamiliar client, many new members quickly drop out in frustration. This course trains student practitioners on how to assess, design, and implement a project by addressing the technical design, societal conditions, and project management skills that are needed to allow participants to contribute meaningfully to their projects. Undergrad-1 credit.',
  },
  {
      semester: Semester.Spring,
      title: 'ABE 451/LAST441-550 – International Water Project II ',
      description: 'Second part of two-semester, applied design course provides assistance for a rural Central American community in designing and implementing a contextually appropriate water system. Enrollees will work closely with alumni mentors and professional advisors on completing final design of a functional sanitary water system, revising preliminary designs based on data gathered during travel to Honduras during Winter Break. Undergrad-3 credits; Grad-4 credits.',
      notices: [<>Website: <Link href="http://hwpillinois.weebly.com/" color="blue" isExternal>http://hwpillinois.weebly.com/</Link></>]
  }
];

const TEXTBOOK_TITLE: string = 'Predicting Rural Responses to Climate Change';
const TEXTBOOK_DESCRIPTION: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. (50 words)';
const TEXTBOOK_IMAGE: string = '/images/gabions1.jpeg';
const TEXTBOOK_URL: string = 'https://www.google.com/';