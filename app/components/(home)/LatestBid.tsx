import {
  Stack,
  Box,
  Image,
  HStack,
  IconButton,
  Progress,
  Text,
  VStack,
  Heading,
  Avatar,
  Icon,
  Card,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { IoMdPricetag } from "react-icons/io";
import { MdFullscreen } from "react-icons/md";
import { TbPlayerPlayFilled } from "react-icons/tb";

type Props = {};

const LatestBid = (props: Props) => {
  return (
    <Stack
      direction={{
        base: "column",
        "2xl": "row",
      }}
      w="full"
      mx="auto"
      justify="space-between"
      mt={24}
      px={{ base: 6, "2xl": 0 }}
      maxW={{ base: "full", lg: "6xl" }}
    >
      {/* Slider Image */}
      <Box position="relative">
        <Image
          w={{ base: "full", lg: 640 }}
          rounded="lg"
          alt="image"
          src="https://ui8-crypter-nft.herokuapp.com/images/content/video-preview.jpg"
        />
        <Box position="absolute" bottom={2} w="full" px={2}>
          <HStack bgColor="gray.800" px={3} py={2} rounded="full">
            <IconButton
              aria-label="Play video"
              size="sm"
              variant="ghost"
              fontSize={20}
              icon={<TbPlayerPlayFilled />}
              textColor="whiteAlpha.700"
              _hover={{
                bgColor: "gray.800",
                textColor: "whiteAlpha.900",
              }}
            />
            <Progress value={40} rounded="full" w="full" />
            <Text>2:20</Text>
            <IconButton
              aria-label="Play video"
              size="sm"
              variant="ghost"
              fontSize={20}
              icon={<HiMiniSpeakerWave />}
              textColor="whiteAlpha.700"
              _hover={{
                bgColor: "gray.800",
                textColor: "whiteAlpha.900",
              }}
            />
            <IconButton
              aria-label="Play video"
              size="sm"
              variant="ghost"
              fontSize={20}
              icon={<MdFullscreen />}
              textColor="whiteAlpha.700"
              _hover={{
                bgColor: "gray.800",
                textColor: "whiteAlpha.900",
              }}
            />
          </HStack>
        </Box>
      </Box>

      {/* Description Box */}
      <VStack align="start" mt={2}>
        <Heading size="2xl" maxW="sm">
          the creator network{" "}
        </Heading>
        <HStack w="full" mt={2}>
          <HStack flex={1}>
            <Avatar
              size="md"
              src="https://ui8-crypter-nft.herokuapp.com/images/content/avatar-user.jpg"
            />
            <VStack align="start">
              <Text fontSize="xs" color="gray.400">
                Creator
              </Text>
              <Text fontSize="sm" mt={-2}>
                Enrico Cole
              </Text>
            </VStack>
          </HStack>
          <HStack flex={1}>
            <Stack align="center" rounded="full" p={3} bgColor="green.600">
              <Icon boxSize={22} size="md" as={IoMdPricetag} />
            </Stack>
            <VStack align="start">
              <Text fontSize="xs" color="gray.400">
                Instant Price
              </Text>
              <Text fontSize="sm" mt={-2}>
                3.5 ETH
              </Text>
            </VStack>
          </HStack>
        </HStack>
        {/* Auction Details */}
        <Card w="full" mt={2} py={2}>
          <VStack align="center" p={4}>
            <Text>Current Bid</Text>
            <Heading>1.00 ETH</Heading>
            <Text size="lg" color="gray.400">
              $3,618.36
            </Text>
            {/* auction */}
            <VStack mt={4}>
              <Text>Auction ending in</Text>
              <HStack gap={8}>
                <VStack align="center">
                  <Heading>19</Heading>
                  <Text mt={-2} color="gray.400">
                    Hrs
                  </Text>
                </VStack>
                <VStack align="center">
                  <Heading>24</Heading>
                  <Text mt={-2} color="gray.400">
                    mins
                  </Text>
                </VStack>
                <VStack align="center">
                  <Heading>19</Heading>
                  <Text mt={-2} color="gray.400">
                    secs
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </VStack>
        </Card>
        {/* CTA */}
        <Stack w="full" mt={4}>
          <Button
            size="lg"
            rounded="full"
            bgColor="blue.600"
            _hover={{ bgColor: "blue.800" }}
          >
            Place a bid
          </Button>
          <Button rounded="full" variant="outline">
            View Item
          </Button>
        </Stack>
      </VStack>
    </Stack>
  );
};

export default LatestBid;
