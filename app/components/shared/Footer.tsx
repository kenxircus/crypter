"use client";
import {
  Box,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box as="footer" pt={24} pb={14}>
      <HStack justifyContent="space-between" p={6} mx="auto" w="7xl">
        <VStack align="start">
          <Image
            boxSize={30}
            width="auto"
            objectFit="cover"
            src="https://ui8-crypter-nft.herokuapp.com/images/logo-light.png"
            alt="Crypter Logo"
          />
          <Heading maxW="xs" fontSize="3xl" mt={6} fontWeight="light">
            The New Creative Economy.
          </Heading>
        </VStack>
        <VStack align="start">
          <Heading fontSize="lg">Crypter.</Heading>
          <VStack align="start" mt={6}>
            <Link href="/">
              <Text color="gray.400">Discover</Text>
            </Link>
            <Link href="/" color="gray.500">
              <Text color="gray.400">Connect Wallet</Text>
            </Link>
          </VStack>
        </VStack>
        <VStack align="start">
          <Heading fontSize="lg">Info</Heading>
          <VStack align="start" mt={6}>
            <Link href="/">
              <Text color="gray.400">FAQ</Text>
            </Link>
            <Link href="/" color="gray.500">
              <Text color="gray.400">Create Item</Text>
            </Link>
          </VStack>
        </VStack>
        <VStack align="start">
          <Heading fontSize="lg">Join Newsletter</Heading>
          <VStack align="start" mt={6}>
            <Text color="gray.400">
              Subscribe our newsletter to get more free design course and
              resource
            </Text>

            <InputGroup>
              <InputRightElement zIndex={50}>
                <IconButton
                  aria-label="Subscribe"
                  rounded="full"
                  bgColor="blue.600"
                  size="xs"
                  _hover={{ bgColor: "blue.800" }}
                  icon={<IoIosArrowRoundForward fontSize={16} />}
                />
              </InputRightElement>
              <Input placeholder="Email" />
            </InputGroup>
          </VStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Footer;
