import {
  Avatar,
  Box,
  HStack,
  Heading,
  Image,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export type Collection = {
  name: string;
  images: string[];
  src: string;
  owner: string;
  items: number;
};

const HotCollectionCard = ({ collection }: { collection: Collection }) => {
  return (
    <VStack align="start">
      <Box>
        <Image
          rounded="lg"
          fit="cover"
          alt="Collection Image"
          w={{ base: "full", "2xl": 350 }}
          maxW={{ base: "full", "2xl": 350 }}
          h={240}
          src={collection?.images[0]}
        />
        <HStack mt={2} w="full">
          {collection?.images.slice(1, 4).map((image, idx) => (
            <Image
              key={idx}
              alt="Collection Image"
              rounded="lg"
              w={110}
              h={75}
              src={image}
            />
          ))}
        </HStack>
      </Box>
      <Heading size="md">{collection?.name}</Heading>
      <HStack w="full" justify="space-between">
        <HStack>
          <Avatar size="xs" src={collection?.src} />
          <Text>{collection?.owner}</Text>
        </HStack>
        <Tag>{collection?.items} items</Tag>
      </HStack>
    </VStack>
  );
};

export default HotCollectionCard;
