import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const CombinedLogo = (props: any) => {
  return (
    <svg
      // xmlns="http://www.w3.org/2000/svg"
      height={32}
      viewBox="0 0 150 28"
      width="150"
      // version="1.1"
      // {...props}
    >
      <a href="http://illinois.edu/">
        <g transform="matrix(1.25 0 0 -1.25 -351.31 616.46)">
          <g transform="matrix(2.2804 0 0 2.2804 -434.91 -615.65)">
            <path
              d="m0.046875-0.017578v2.998h1.7129v5.1387h-1.7129v2.998h7.709v-2.998h-1.7129v-5.1387h1.7129v-2.998h-7.709zm49.094 1.3789c-2.51 0-4.334 1.8945-4.334 4.207v0.023437c0 2.3125 1.8005 4.1836 4.3105 4.1836s4.3359-1.8945 4.3359-4.207v-0.023437c0-2.3125-1.8012-4.1836-4.3125-4.1836zm12.541 0.023437c-1.6612 0-2.8457 0.97812-2.8457 2.4531v0.021484c0 1.6162 1.0566 2.0695 2.6953 2.4883 1.36 0.34875 1.6367 0.5807 1.6367 1.0332v0.023437c0 0.47625-0.43938 0.76562-1.1719 0.76562-0.92875 0-1.6965-0.38383-2.4277-0.98633l-1.0586 1.2676c0.97625 0.87125 2.2187 1.3008 3.4512 1.3008 1.755 0 2.9863-0.90523 2.9863-2.5215v-0.023438c0-1.4175-0.93008-2.0095-2.5801-2.4395-1.4062-0.36125-1.7539-0.53531-1.7539-1.0703v-0.023437c0-0.395 0.35867-0.70898 1.0449-0.70898 0.685 0 1.3952 0.30273 2.1152 0.80273l0.92969-1.3477c-0.82375-0.6625-1.8352-1.0352-3.0215-1.0352zm-47.979 0.11719v8.1328h1.791v-8.1328h-1.791zm3.916 0v8.1328h5.8457v-1.625h-4.0566v-6.5078h-1.7891zm7.1562 0v8.1328h5.8438v-1.625h-4.0547v-6.5078h-1.7891zm7.1953 0v8.1328h1.7891v-8.1328h-1.7891zm3.916 0v8.1328h1.7656v-5.1699l3.9395 5.1699h1.5215v-8.1328h-1.7656v5.0078l-3.8125-5.0078h-1.6484zm19.299 0v8.1328h1.7891v-8.1328h-1.7891zm-6.0684 1.5098c1.4412 0 2.4648 1.1616 2.4648 2.5566v0.023437c0 1.395-0.99891 2.5332-2.4414 2.5332-1.44 0-2.4629-1.1616-2.4629-2.5566v-0.023437c0-1.3938 0.9982-2.5332 2.4395-2.5332z"
              fill="#13294b"
              transform="matrix(.8 0 0 -.8 314.25 485.85)"
            />
            <path
              d="m319.08 483.81h1.0278v1.7129h-5.4821v-1.7129h1.028c0.18905 0 0.3426-0.15336 0.3426-0.34259v-4.1113c0-0.18923-0.15355-0.34259-0.3426-0.34259h-1.028v-1.7131h5.4821v1.7131h-1.0278c-0.18923 0-0.3426 0.15336-0.3426 0.34259v4.1113c0 0.18923 0.15337 0.34259 0.3426 0.34259"
              stroke="#e04e39"
              stroke-width=".030369"
              fill="#e84a27"
            />
          </g>
        </g>
      </a>
    </svg>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container maxW="6xl">
        <HStack p={8}>
          <Stack>
            <CombinedLogo color={useColorModeValue("gray.700", "white")} />
            <Heading size="md">Contextual Engineering Research Group</Heading>
            <Text fontSize="sm">Copyright © 2022. All rights reserved.</Text>
          </Stack>
          <Spacer />
          <Flex
            w="32vw"
            wrap="wrap"
            justifyContent="right"
            columnGap={4}
            rowGap={2}
          >
            <Link fontWeight="semibold" href="#">
              About
            </Link>
            <Link fontWeight="semibold" href="#">
              People
            </Link>
            <Link fontWeight="semibold" href="#">
              Research
            </Link>
            <Link fontWeight="semibold" href="#">
              Contact
            </Link>
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
}
