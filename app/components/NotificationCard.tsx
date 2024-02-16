import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: string;
  subTitle: string;
  date: string;
  image: string;
};

const NotificationCard = (props: Props) => {
  return (
    <HStack
      w="full"
      justifyContent="space-between"
      p={4}
      rounded="lg"
      _hover={{ bgColor: "gray.500" }}
      transition="all 0.3s ease"
      cursor="pointer"
    >
      <HStack gap={4}>
        <Image
          boxSize={75}
          rounded="lg"
          alt="Notification Image"
          src={props.image}
        />
        <VStack gap={-2} alignItems="start">
          <Text fontWeight="bold">{props.title}</Text>
          <Text fontWeight="bold">{props.subTitle}</Text>
          <Text fontSize="sm" color="gray.300">
            {props.date}
          </Text>
        </VStack>
      </HStack>
      <Box w={3} h={3} bgColor="blue.600" rounded="full" />
    </HStack>
  );
};

export default NotificationCard;
