import {
  Container,
  Divider,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import ColorHero, { ColorHeroProps } from "../src/components/Heros/ColorHero";
import PageWrapper from "../src/components/PageWrapper";

const heroProps: ColorHeroProps = {
  heading: "About Us",
};

type Information = {
  label: string;
  link: string;
};

const moreInformation: Information[] = [
  {
    label: "Our People",
    link: "/people",
  },
  {
    label: "Focus Areas",
    link: "/contact",
  },
  {
    label: "Research Projects",
    link: "/projects",
  },
];

export default function GroupPage() {
  return (
    <PageWrapper {...{ mainTitle: "About the Group", category: "About" }}>
      <ColorHero {...heroProps} />
      <Container py={{ base: "2em", md: "3em", lg: "4em" }}>
        <Image
          src="/images/spring-measurement-students.jpeg"
          objectFit="cover"
          h="md"
        />
        <VStack p="2em" spacing="1em" bgColor="white" align="left">
          <Text fontSize={{ base: "md", md: "lg" }}>
            We, the Contextual Engineering Research Group at the{" "}
            <Link
              href="http://illinois.edu/"
              textDecoration="underline"
              _hover={{ color: "illiniOrange" }}
              isExternal
            >
              University of Illinois Urbana-Champaign
            </Link>
            , investigate the ways in how engineers can work sustainably on
            projects in communities different from those they are used to. We
            explore the application of engineering technology throughout the
            world to evolve our understanding of appropriate technology and
            place-based design, striving to deliver tailored engineering
            solutions and expertise to people around the world: from those in
            modern industrialized cities to those in tradition-centered remote
            villages.
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }}>
            Historically, we have placed heavy emphasis on rural societies,
            which are increasingly threatened by a global trend towards urban
            migration. These often include farming communities, where their loss
            can imperil the food security of nations without the resources to
            import supplies from other countries. We believe that rural access
            to basic needs like water, electricity, and roads will increase
            migration back to these breadbaskets of alternatively developed
            countries, supporting self-sufficiency and improved physical
            mobility of all citizens dependent upon local food.
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }}>
            At the same time, we reassert our dedication to engineering as its
            own discipline, focusing on the unique responsibilities and
            challenges of technical design, unburdened by the characterizations
            of engineering as a social development process. The paradoxical
            unification of engineering with social sciences while separating
            technical problem-solving from other development responsibilities
            creates an entirely new way of pursuing technical solutions to
            engineering challenges around the world:{" "}
            <Link
              href="/contextual-engineering"
              textDecoration="underline"
              _hover={{ color: "illiniOrange" }}
            >
              contextual engineering
            </Link>
            .
          </Text>
          <Divider />
          <Heading fontSize="lg">To Learn More:</Heading>
          <VStack pl="2em" align="left">
            {moreInformation.map(({ label, link }) => (
              <Link href={link}>{label}</Link>
            ))}
          </VStack>
        </VStack>
      </Container>
    </PageWrapper>
  );
}
