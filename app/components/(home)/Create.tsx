import {
  VStack,
  HStack,
  Text,
  Heading,
  Button,
  Image,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const Create = () => {
  return (
    <VStack
      justify="space-between"
      w="full"
      align="start"
      mx="auto"
      mt={8}
      py={14}
      maxW={{ base: "full", lg: "6xl" }}
      px={{ base: 6, "2xl": 0 }}
    >
      <Stack direction={{ base: "column", lg: "row" }} w="full">
        <VStack flex={1} align="start">
          <Text color="gray.400">SAVE YOUR TIME WITH STACKS</Text>
          <Heading maxW="sm" fontSize="6xl">
            Earn Free crypto with Crypter
          </Heading>
          <Text color="gray.400">A creative agency that lead and inspire</Text>

          {/* CTA */}
          <HStack mt={8}>
            <Button
              size="lg"
              rounded="full"
              bgColor="blue.600"
              _hover={{ bgColor: "blue.800" }}
            >
              Start creating
            </Button>
            <Button rounded="full" variant="outline">
              Discover more
            </Button>
          </HStack>
        </VStack>
        <Image
          alt="Create Image"
          flex={1}
          mt={{ base: 8, lg: 0 }}
          src="https://ui8-crypter-nft.herokuapp.com/images/content/cubes-dark.png"
        />
      </Stack>
    </VStack>
  );
};

export default Create;
