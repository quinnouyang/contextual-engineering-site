import {
  AspectRatio,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  // Toggle settings: (darkMode, lightMode)
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={6}
      alignItems="flex-start"
      bg={bgColor}
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Cart</Heading>
        <Text>
          If price is too hard on your eyes,{" "}
          <Button variant="link" colorScheme="black" onClick={toggleColorMode}>
            try changing the theme
          </Button>
        </Text>
      </VStack>

      {/* Horizontally: Image, Header & Text, [space-between] Price */}
      <HStack spacing={6} alignItems="center" w="full">
        {/* To fix and maintain dimensions */}
        <AspectRatio ratio={1} w={24}>
          <Image src="/images/skateboard.jpeg" alt="Skateboard" />
        </AspectRatio>
        <HStack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Penny Board</Heading>
            <Text color={secondaryTextColor}>PNYCOMP2751</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $119.00
          </Heading>
        </HStack>
      </HStack>

      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="lg">$162.79</Heading>
      </HStack>
    </VStack>
  );
};

export default Cart;
