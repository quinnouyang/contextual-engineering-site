import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

const Details = () => {
  // "horizontal -> vertical" GridItems for smaller screens
  const respColSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    // By default, Stacks do not take full width and height spaces (unlike flexboxes)
    // Padding, spacing, etc. units *4 = # of pixels
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      {/* Another VStack to adjust Header and Text spacing */}
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your details</Heading>
        <Text>If you already have an account, click here to login.</Text>
      </VStack>
      {/* GridItems automatically fill columns L->R, T->B. ColSpan determines how many columns the item takes. */}
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={respColSpan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Quinn" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={respColSpan}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Ouyang" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="902 College Court" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={respColSpan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Urbana" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={respColSpan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="usa">United States of America</option>
              <option value="mom">ur mom</option>
              <option value="mars">Mars</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button variant="primary" size="lg" w="full">
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
