import {
  VStack,
  Heading,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Grid,
  Text,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Rank from "../Rank";
import { BiddersProps } from "@/app/page";
import { IoChevronDown } from "react-icons/io5";

const Popular = ({ bidders }: { bidders: BiddersProps[] }) => {
  const [popularFilter, setPopularFilter] = useState("Sellers");
  return (
    <VStack
      justify="space-between"
      w="full"
      align="start"
      mx="auto"
      mt={24}
      py={14}
      maxW={{ base: "full", lg: "6xl" }}
      px={{ base: 6, "2xl": 0 }}
    >
      <VStack align="start">
        <Heading color="gray.400">Popular</Heading>
        <Menu>
          <MenuButton
            as={Button}
            variant="ghost"
            size="lg"
            rounded="full"
            rightIcon={<IoChevronDown />}
            color="white"
          >
            {popularFilter}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setPopularFilter("Sellers")}>
              Sellers
            </MenuItem>
            <MenuItem onClick={() => setPopularFilter("Buyers")}>
              Buyers
            </MenuItem>
          </MenuList>
        </Menu>
      </VStack>
      <VStack align="start" w={{ base: "full", lg: 80 }}>
        <Text fontSize="xs" color="gray.400" mt={6}>
          TIMEFRAME
        </Text>
        <Select>
          <option value="option1" selected>
            Today
          </option>
          <option value="option2">Morning</option>
          <option value="option3">Dinner</option>
          <option value="option3">Evening</option>
        </Select>
      </VStack>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          "2xl": "repeat(5, 1fr)",
        }}
        gap={4}
        mt={8}
        w="full"
      >
        {bidders.map((bidder, idx) => (
          <Rank key={idx} bidder={bidder} />
        ))}
      </Grid>
    </VStack>
  );
};

export default Popular;
