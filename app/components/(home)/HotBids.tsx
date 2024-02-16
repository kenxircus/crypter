import { VStack, Heading, Grid } from "@chakra-ui/react";
import React from "react";
import NFTBidCard from "../NFTBidCard";
import { Bids } from "@/app/page";

const HotBids = ({ bids }: { bids: Bids[] }) => {
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
      <Heading>Hot bid</Heading>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          "2xl": "repeat(4, 1fr)",
        }}
        gap={4}
        mt={8}
        w="full"
      >
        {/* NFT Bid */}
        {bids.map((nft, idx) => (
          <NFTBidCard key={idx} nft={nft} />
        ))}
      </Grid>
    </VStack>
  );
};

export default HotBids;
