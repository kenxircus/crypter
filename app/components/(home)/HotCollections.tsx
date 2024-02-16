import { VStack, Heading, Grid } from "@chakra-ui/react";
import React from "react";
import Collection from "../HotCollectionCard";
import HotCollectionCard from "../HotCollectionCard";
import { HotCollectionsProps } from "@/app/page";

type Props = {};

const HotCollections = ({
  collections,
}: {
  collections: HotCollectionsProps[];
}) => {
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
      <Heading>Hot collections</Heading>
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
        {collections.map((collection, idx) => (
          <HotCollectionCard key={idx} collection={collection} />
        ))}
      </Grid>
    </VStack>
  );
};

export default HotCollections;
