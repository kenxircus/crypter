import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import FillButton from "./FillButton";
import { MdOutlineAutoGraph } from "react-icons/md";
import PriceTag from "./PriceTag";
import { GiSettingsKnobs } from "react-icons/gi";

type NFTProps = {
  image: string;
  name: string;
  price: string;
  stock: number;
  highest_bid: string;
  bidders: {
    name: string;
    src: string;
  }[];
};

const NFTBidCard = ({ nft }: { nft: NFTProps }) => {
  return (
    <VStack role="group">
      <Box position="relative">
        <Image
          rounded="lg"
          fit="cover"
          alt="NFT Image"
          w={300}
          maxW={300}
          h={360}
          src={nft?.image}
          _groupHover={{
            filter: "brightness(0) invert(1)",
            transition: "0.3s",
          }}
        />
        <FillButton
          as={Stack}
          top={4}
          right={4}
          position="absolute"
          _groupHover={{ display: "flex", transition: "0.3s" }}
          display="none"
        />
        <Badge
          colorScheme="green"
          position="absolute"
          top={4}
          left={4}
          _groupHover={{ display: "flex", transition: "0.3s" }}
          display="none"
        >
          Purchasing!
        </Badge>
        <Button
          size="sm"
          rounded="full"
          bgColor="blue.600"
          right="30%"
          bottom={4}
          _hover={{ bgColor: "blue.800" }}
          rightIcon={<MdOutlineAutoGraph />}
          zIndex={100}
          _groupHover={{ display: "flex", transition: "0.3s" }}
          display="none"
          position="absolute"
        >
          Place a bid
        </Button>
      </Box>
      <HStack align="center" justify="space-between" w="full" mt={4}>
        <Text fontWeight="bold">{nft?.name}</Text>
        <PriceTag price="2.45 ETH" />
      </HStack>
      <HStack justify="space-between" w="full">
        <AvatarGroup size="xs" max={3}>
          {nft?.bidders.map((bidder) => (
            <Avatar key={bidder?.name} name={bidder?.name} src={bidder?.src} />
          ))}
        </AvatarGroup>
        <Text fontSize="xs">3 in stock</Text>
      </HStack>
      <Divider orientation="horizontal" w="full" />
      <HStack justify="space-between" w="full">
        <HStack gap={2}>
          <Icon as={GiSettingsKnobs} />
          <Text color="gray.400" fontSize="xs">
            Highest bid
          </Text>
          <Text fontSize="xs">{nft?.highest_bid}</Text>
        </HStack>
        <Text color="gray.400" fontSize="xs">
          New bid 🔥
        </Text>
      </HStack>
    </VStack>
  );
};

export default NFTBidCard;
