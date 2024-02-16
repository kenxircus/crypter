"use client";
import {
  Avatar,
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Icon,
  IconButton,
  Input,
  Image,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  VStack,
  Show,
  Divider,
  Hide,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import {
  TbBell,
  TbBrandAppgallery,
  TbBulb,
  TbCopy,
  TbHeart,
  TbSearch,
  TbLogout2,
} from "react-icons/tb";
import React from "react";
import NotificationCard from "../NotificationCard";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <HStack as="nav" borderBottom="1px solid" borderColor="gray.600">
      <Stack
        direction={{ base: "column", lg: "row" }}
        justifyContent="space-between"
        p={6}
        mx="auto"
        w="7xl"
      >
        <HStack>
          <Image
            boxSize={30}
            width="auto"
            objectFit="cover"
            src="https://ui8-crypter-nft.herokuapp.com/images/logo-light.png"
            alt="Crypter Logo"
          />
          <Hide breakpoint="(max-width: 1180px)">
            <Divider
              h={10}
              mx={6}
              orientation="vertical"
              borderColor="gray.600"
            />
            <HStack gap={6}>
              <Link href="/">
                <Text color="gray.600">Discover</Text>
              </Link>
              <Link href="/">
                <Text color="gray.600">How it work</Text>
              </Link>
            </HStack>
          </Hide>
        </HStack>
        <HStack gap={4}>
          <Hide breakpoint="(max-width: 1025px)">
            <InputGroup>
              <InputRightElement pointerEvents="none">
                <Icon as={TbSearch} />
              </InputRightElement>
              <Input type="text" placeholder="Search" />
            </InputGroup>
          </Hide>

          <Box position="relative">
            <Center>
              <Box
                w={3}
                h={3}
                backgroundColor="green.500"
                rounded="full"
                position="absolute"
                right={0}
                top={0}
              ></Box>
            </Center>
            <Popover>
              <PopoverTrigger>
                <IconButton
                  variant="ghost"
                  aria-label="Notification"
                  _hover={{ bgColor: "transparent", color: "blue.600" }}
                  icon={<TbBell fontSize={25} />}
                />
              </PopoverTrigger>
              <PopoverContent border="none" w="md">
                <PopoverHeader
                  bgColor="inherit"
                  borderRadius="lg"
                  borderBottom="none"
                  w="full"
                  p={6}
                >
                  <HStack justifyContent="space-between">
                    <Heading>Notification</Heading>
                    <Button bgColor="blue.600" rounded="full">
                      See all
                    </Button>
                  </HStack>
                </PopoverHeader>
                <PopoverBody>
                  <VStack align="start">
                    <NotificationCard
                      title="ETH Received"
                      subTitle="0.08 ETH"
                      date="2 days ago"
                      image="https://ui8-crypter-nft.herokuapp.com/images/content/notification-pic-1.jpg"
                    />
                    <NotificationCard
                      title="C O I N Z"
                      subTitle="New bid 0.2 ETH"
                      date="3 days ago"
                      image="https://ui8-crypter-nft.herokuapp.com/images/content/notification-pic-2.jpg"
                    />
                    <NotificationCard
                      title="ETH Received"
                      subTitle="0.08 ETH"
                      date="4 days ago"
                      image="https://ui8-crypter-nft.herokuapp.com/images/content/notification-pic-3.jpg"
                    />
                    <NotificationCard
                      title="ETH Received"
                      subTitle="0.08 ETH"
                      date="5 days ago"
                      image="https://ui8-crypter-nft.herokuapp.com/images/content/notification-pic-4.jpg"
                    />
                  </VStack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
          <Box>
            <Button
              rounded="full"
              bgColor="blue.600"
              _hover={{ bgColor: "blue.800" }}
            >
              Upload
            </Button>
          </Box>
          <Popover>
            <PopoverTrigger>
              <HStack
                w="auto"
                gap={8}
                px={2}
                py={1}
                border="2px solid"
                borderColor="gray.700"
                rounded="full"
                cursor="pointer"
                _hover={{ borderColor: "blue.600" }}
                transition={"border-color 0.2s ease"}
              >
                <Avatar
                  size="sm"
                  src="https://ui8-crypter-nft.herokuapp.com/images/content/avatar-user.jpg"
                />
                <HStack gap={-2}>
                  <Text fontSize="sm" textAlign="center" mx={2}>
                    7.00698
                  </Text>
                  <Text as="span" color="green.500">
                    ETH
                  </Text>
                </HStack>
              </HStack>
            </PopoverTrigger>
            <PopoverContent border="none">
              <PopoverBody>
                <VStack align="start" mt={6}>
                  <Heading size="lg">Enrico Cole</Heading>
                  <HStack mt={-2}>
                    <Text color="gray.400" fontSize="sm">
                      0xc4c16ab5ac7d...b21a
                    </Text>
                    <IconButton
                      variant="ghost"
                      aria-label="Copy Address"
                      size="xs"
                      fontSize={15}
                      icon={<TbCopy />}
                    />
                  </HStack>

                  <VStack px={4} align="start">
                    <HStack gap={2}>
                      <Image
                        boxSize={35}
                        src="https://ui8-crypter-nft.herokuapp.com/images/content/etherium-circle.jpg"
                        alt="ETH"
                      />
                      <VStack align="start" gap={0}>
                        <Text fontSize="sm" color="gray.400">
                          Balance
                        </Text>
                        <Heading fontWeight="bold" fontSize="lg">
                          4.00698 ETH
                        </Heading>
                      </VStack>
                    </HStack>
                    <Button
                      variant="outline"
                      size="sm"
                      rounded="full"
                      mx="auto"
                    >
                      Manage fun on Coinbase
                    </Button>
                  </VStack>

                  {/* Menu */}
                  <VStack gap={2} w="full">
                    <Button
                      w="full"
                      borderBottom="1px solid"
                      borderColor="gray.600"
                      variant="ghost"
                      rounded="none"
                      justifyContent="start"
                      px={0}
                      leftIcon={<Icon as={TbHeart} />}
                      _hover={{ color: "blue.700" }}
                    >
                      View Profile
                    </Button>
                    <Button
                      w="full"
                      borderBottom="1px solid"
                      borderColor="gray.600"
                      variant="ghost"
                      rounded="none"
                      justifyContent="start"
                      px={0}
                      leftIcon={<Icon as={TbBrandAppgallery} />}
                      _hover={{ color: "blue.700" }}
                    >
                      My Items
                    </Button>
                    <Button
                      w="full"
                      borderBottom="1px solid"
                      borderColor="gray.600"
                      variant="ghost"
                      rounded="none"
                      justifyContent="start"
                      px={0}
                      leftIcon={<Icon as={TbBulb} />}
                      _hover={{ color: "blue.700" }}
                    >
                      Dark Theme
                    </Button>
                    <Button
                      w="full"
                      borderColor="gray.600"
                      variant="ghost"
                      rounded="none"
                      justifyContent="start"
                      px={0}
                      leftIcon={<Icon as={TbLogout2} />}
                      _hover={{ color: "blue.700" }}
                      mb={3}
                    >
                      Disconnect
                    </Button>
                  </VStack>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </HStack>
      </Stack>
      {/* Logo */}
    </HStack>
  );
};

export default Navbar;
