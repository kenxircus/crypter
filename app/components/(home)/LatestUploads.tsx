import {
  Stack,
  Show,
  VStack,
  Box,
  Text,
  Wrap,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import LatestUploadCreatorCard, {
  CreatorProps,
} from "../LatestUploadCreatorCard";
import LatestUploadNFTV1, { NFTProps } from "../LatestUploadNFTV1";
import LatestUploadNFTV2 from "../LatestUploadNFTV2";

type Props = {
  creators: CreatorProps[];
  nfts: NFTProps[];
};

const LatestUploads = ({ creators, nfts }: Props) => {
  return (
    <Stack
      direction={{
        base: "column",
        lg: "row",
      }}
      mx="auto"
      w="full"
      mt={24}
      px={{ base: 6, "2xl": 0 }}
      maxW={{ base: "full", lg: "6xl" }}
    >
      <LatestUploadNFTV1 nft={nfts[0]} />
      <Show above="lg">
        <VStack flex={1} ml={-24}>
          {nfts.map((nft, idx) => {
            if (idx === 0) return null;
            return <LatestUploadNFTV2 key={idx} nft={nft} />;
          })}
        </VStack>
        <Divider orientation="vertical" h={500} w={1} />
      </Show>

      {/* Latest Uploads from Creators */}
      <Box mt={16}>
        <Text color="gray.400" fontSize="xs">
          {" "}
          Latest upload from creators 🔥
        </Text>
        <Wrap
          direction={{ base: "row", lg: "column" }}
          mt={{ base: 4, lg: 0 }}
          justify="space-between"
        >
          {/* Creator */}
          {creators.map((creator, idx) => (
            <LatestUploadCreatorCard key={idx} creator={creator} />
          ))}
        </Wrap>
      </Box>
    </Stack>
  );
};

export default LatestUploads;
