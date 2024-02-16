import { Bids } from "@/app/page";
import {
  VStack,
  Heading,
  Tabs,
  HStack,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  TabList,
  Tab,
  ButtonGroup,
  TabPanels,
  TabPanel,
  Grid,
  Stack,
  Show,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import NFTBidCard from "../NFTBidCard";
import { CiFilter } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";

const Discover = ({ bids }: { bids: Bids[] }) => {
  const [addedFilter, setAddedFilter] = useState("Recently added");
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
      <Heading>Discover</Heading>
      {/* Category Tabs */}
      <Tabs variant="unstyled" size="sm" w="full">
        <Stack
          direction={{ base: "column", lg: "row" }}
          mt={8}
          w="full"
          align="center"
          justify="space-between"
        >
          {/* Select Button */}
          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              size="lg"
              w={{ base: "full", lg: "auto" }}
              rounded="full"
              rightIcon={<IoChevronDown />}
              color="white"
            >
              {addedFilter}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setAddedFilter("Recently added")}>
                Recently added
              </MenuItem>
              <MenuItem onClick={() => setAddedFilter("Long added")}>
                Long added
              </MenuItem>
            </MenuList>
          </Menu>
          <Show below="lg">
            <Select>
              <option selected>All Items</option>
              <option>Art</option>
              <option>Game</option>
              <option>Photography</option>
              <option>Music</option>
              <option>Video</option>
            </Select>
          </Show>
          <Show above="lg">
            <TabList gap={4}>
              <Tab
                py={2}
                border="none"
                rounded="full"
                _active={{ bgColor: "inherit" }}
                _hover={{
                  bgColor: "whiteAlpha.900",
                  color: "blackAlpha.900",
                }}
                _selected={{
                  bgColor: "whiteAlpha.900",
                  color: "blackAlpha.900",
                }}
                color="white"
              >
                All Items
              </Tab>
              <Tab
                py={2}
                border="none"
                rounded="full"
                _active={{ bgColor: "inherit" }}
                _hover={{
                  bgColor: "whiteAlpha.900",
                  color: "blackAlpha.900",
                }}
                _selected={{
                  bgColor: "whiteAlpha.900",
                  color: "blackAlpha.900",
                }}
                color="white"
              >
                Art
              </Tab>
              <Tab
                py={2}
                border="none"
                rounded="full"
                _active={{ bgColor: "inherit" }}
                _hover={{
                  bgColor: "whiteAlpha.900",
                  color: "blackAlpha.900",
                }}
                _selected={{
                  bgColor: "whiteAlpha.900",
                  color: "blackAlpha.900",
                }}
                color="white"
              >
                Game
              </Tab>
              <Tab
                py={2}
                border="none"
                rounded="full"
                _active={{ bgColor: "inherit" }}
                _hover={{
                  bgColor: "whiteAlpha.900",
                  color: "blackAlpha.900",
                }}
                _selected={{
                  bgColor: "whiteAlpha.900",
                  color: "blackAlpha.900",
                }}
                color="white"
              >
                Photography
              </Tab>
              <Tab
                py={2}
                border="none"
                rounded="full"
                _active={{ bgColor: "inherit" }}
                _hover={{
                  bgColor: "whiteAlpha.900",
                  color: "blackAlpha.900",
                }}
                _selected={{
                  bgColor: "whiteAlpha.900",
                  color: "blackAlpha.900",
                }}
                color="white"
              >
                Music
              </Tab>
              <Tab
                py={2}
                border="none"
                rounded="full"
                _active={{ bgColor: "inherit" }}
                _hover={{
                  bgColor: "whiteAlpha.900",
                  color: "blackAlpha.900",
                }}
                _selected={{
                  bgColor: "whiteAlpha.900",
                  color: "blackAlpha.900",
                }}
                color="white"
              >
                Video
              </Tab>
            </TabList>
          </Show>
          <Button
            size="lg"
            rounded="full"
            w={{ base: "full", lg: "auto" }}
            bgColor="blue.600"
            _hover={{ bgColor: "blue.800" }}
            rightIcon={<CiFilter />}
          >
            Filter
          </Button>
        </Stack>

        {/* Content */}
        <TabPanels>
          <TabPanel>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
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
          </TabPanel>
          <TabPanel>
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
          </TabPanel>
          <TabPanel>
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
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Stack align="center" w="full">
        <Button variant="outline" rounded="full">
          Load more
        </Button>
      </Stack>
    </VStack>
  );
};

export default Discover;
