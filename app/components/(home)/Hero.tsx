import { Text, VStack, Heading, Button } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <VStack
      direction={{
        base: "column",
        "2xl": "row",
      }}
      w="full"
      mx="auto"
      mt={24}
      px={{ base: 6, "2xl": 0 }}
      maxW={{ base: "full", lg: "6xl" }}
    >
      <Text color="gray.600" fontSize="xs">
        CREATE, EXPLORE & COLLECT DIGITAL ARTS NFTS.
      </Text>
      <Heading>The new creative economy.</Heading>
      <Button variant="outline" rounded="full" size="lg" mt={4}>
        {" "}
        Start your search
      </Button>
    </VStack>
  );
};

export default Hero;
