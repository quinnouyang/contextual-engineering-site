import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconProps,
} from "@chakra-ui/react";

export default function HomepageHero() {
  return (
    <Container maxW="container.xl">
      <Stack
        align={"center"}
        py="5em"
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing="2em">
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "20%",
                position: "absolute",
                bottom: "5px",
                left: 0,
                bg: "illiniOrange",
                zIndex: -1,
              }}
            >
              Contextual Engineering
            </Text>
            <br />
            <Text as={"span"} color="illiniOrange">
              Certificate
            </Text>
          </Heading>
          <Text color="illiniBlue">
            University of Illinois students, certify yourself in user-informed design and engineering 
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              size="lg"
              textColor="cloudWhite.50"
              bg="illiniOrange"
              _hover={{ bg: "illiniBlue" }}
            >
              Learn More<ExternalLinkIcon />
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          {/* <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue("red.50", "illiniOrange")}
          /> */}
          <Box
            position={"relative"}
            height={"300px"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "http://contextual.engineering.illinois.edu/wp-content/uploads/2022/03/IMG_0868-1024x768.jpg"
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
