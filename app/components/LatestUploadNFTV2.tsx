import {
  Avatar,
  Button,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import PriceTag from "./PriceTag";
import { NFTProps } from "./LatestUploadNFTV1";

const LatestUploadNFTV2 = ({ nft }: { nft: NFTProps }) => {
  return (
    <HStack role="group">
      <HStack position="relative">
        <Image
          rounded="lg"
          mx={8}
          w={160}
          h={160}
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
          top="35%"
          left="40%"
          p={4}
          zIndex={100}
          bg="gray.700"
          rounded="full"
          display="none"
          _groupHover={{ display: "flex", transition: "0.3s" }}
        >
          <Icon as={FaLongArrowAltRight} boxSize={3} />
        </Stack>
      </HStack>
      <VStack align="start">
        <Text>{nft?.name}</Text>
        <HStack align="center" gap={2}>
          <Avatar size="md" src={nft?.src} />
          <PriceTag price="3.5 ETH" />
          <Text color="gray.400" fontSize="xs">
            1 of {nft?.stock}
          </Text>
        </HStack>
        <Button variant="outline" size="sm" rounded="full">
          Place a bid
        </Button>
      </VStack>
    </HStack>
  );
};

export default LatestUploadNFTV2;
