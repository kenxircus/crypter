import {
  Avatar,
  Badge,
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { FaLongArrowAltUp } from "react-icons/fa";
import { HiOutlineTrophy } from "react-icons/hi2";
import { BiddersProps } from "../page";

const Rank = ({ bidder }: { bidder: BiddersProps }) => {
  const [isPlus, setIsPlus] = useState(true);
  return (
    <Card bgColor="gray.800" rounded="lg" px={4}>
      <CardHeader borderBottom="1px solid" borderColor="gray.600" px={0}>
        <HStack justify="space-between">
          <RankBadge rank={bidder?.rank} />
          <HStack>
            <IconButton
              aria-label="Options"
              icon={
                <Icon boxSize={25} as={isPlus ? CiSquarePlus : CiSquareMinus} />
              }
              _hover={{ bgColor: "none", color: "blue.600" }}
              variant="ghost"
              colorScheme="gray"
              onClick={() => setIsPlus(!isPlus)}
            />
            <IconButton
              aria-label="View Profile"
              icon={<Icon as={FaLongArrowAltUp} transform="rotate(45deg)" />}
              _hover={{ bgColor: "none", color: "blue.600" }}
              variant="ghost"
              colorScheme="gray"
            />
          </HStack>
        </HStack>
      </CardHeader>
      <CardBody px={0}>
        <Center>
          <VStack>
            <Box position="relative">
              <Image
                position="absolute"
                bottom={0}
                right={0}
                alt="rank gem"
                src="https://ui8-crypter-nft.herokuapp.com/images/content/reward-1.svg"
                zIndex={10}
              />
              <Avatar size="lg" name="Dan Abrahmov" src={bidder?.src} />
            </Box>

            <Text fontWeight="bold" fontSize="sm">
              {bidder?.name}
            </Text>
            <Text fontSize="sm" color="gray.400" mt={-2}>
              {bidder?.price}
            </Text>
          </VStack>
        </Center>
      </CardBody>
    </Card>
  );
};

export const RankBadge = ({ rank }: { rank: string }) => {
  switch (rank) {
    case "1":
      return (
        <Badge colorScheme="blue" rounded="full" px={2}>
          <HStack>
            <Icon as={HiOutlineTrophy} />
            <Text fontWeight="bold">#{rank}</Text>
          </HStack>
        </Badge>
      );
    case "2":
      return (
        <Badge colorScheme="purple" rounded="full" px={2}>
          <HStack>
            <Icon as={HiOutlineTrophy} />
            <Text fontWeight="bold">#{rank}</Text>
          </HStack>
        </Badge>
      );
    case "3":
      return (
        <Badge colorScheme="green" rounded="full" px={2}>
          <HStack>
            <Icon as={HiOutlineTrophy} />
            <Text fontWeight="bold">#{rank}</Text>
          </HStack>
        </Badge>
      );
    case "4":
      return (
        <Badge colorScheme="darkgray" rounded="full" px={2}>
          <HStack>
            <Icon as={HiOutlineTrophy} />
            <Text fontWeight="bold">#{rank}</Text>
          </HStack>
        </Badge>
      );
    case "5":
      return (
        <Badge colorScheme="lightgray" rounded="full" px={2}>
          <HStack>
            <Icon as={HiOutlineTrophy} />
            <Text fontWeight="bold">#{rank}</Text>
          </HStack>
        </Badge>
      );
    default:
      return (
        <Badge colorScheme="blue" rounded="full" px={2}>
          <HStack>
            <Icon as={HiOutlineTrophy} />
            <Text fontWeight="bold">#{rank}</Text>
          </HStack>
        </Badge>
      );
  }
};

export default Rank;
