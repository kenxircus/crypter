import {
  Avatar,
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import PriceTag from "./PriceTag";

export type NFTProps = {
  cover: string;
  name: string;
  creator: string;
  src: string;
  price: string;
  stock: number;
};

const LatestUploadNFTV1 = ({ nft }: { nft: NFTProps }) => {
  return (
    <VStack align="start">
      {/* Content */}
      <Box position="relative" role="group">
        <Image
          rounded="lg"
          w={{ base: "full", lg: 450 }}
          h={{ base: 800, lg: 450 }}
          fit="cover"
          alt="image"
          src={nft?.cover}
          _groupHover={{
            filter: "brightness(0) invert(1)",
            transition: "0.3s",
          }}
        />
        <Stack
          position="absolute"
          top="45%"
          left="45%"
          p={4}
          zIndex={100}
          bg="gray.700"
          rounded="full"
          display="none"
          _groupHover={{ display: "flex", transition: "0.3s" }}
        >
          <Icon as={FaLongArrowAltRight} boxSize={3} />
        </Stack>
      </Box>

      {/* Description */}
      <HStack justify="space-between" w="full" mt={4}>
        <HStack>
          <Avatar size="md" src={nft?.src} />
          <VStack align="start">
            <Heading size="md">{nft?.name}</Heading>
            <Text fontSize="sm" mt={-1}>
              {nft?.stock} in stock
            </Text>
          </VStack>
        </HStack>
        <VStack>
          <Text color="gray.400" fontSize="xs">
            Highest bid
          </Text>
          <PriceTag price="3.5 ETH" />
        </VStack>
      </HStack>
    </VStack>
  );
};

export default LatestUploadNFTV1;
