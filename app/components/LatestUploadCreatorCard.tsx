import { HStack, Box, Badge, Avatar, VStack, Text } from "@chakra-ui/react";
export type CreatorProps = {
  name: string;
  avatar: string;
  price: string;
  stock: number;
  image: string;
};
export default function LatestUploadCreatorCard({
  creator,
}: {
  creator: CreatorProps;
}) {
  return (
    <HStack>
      <Box position="relative">
        <Avatar size="md" src={creator?.avatar} />
        <Badge
          position="absolute"
          rounded="full"
          top={0}
          left={0}
          zIndex={10}
          bgColor="whiteAlpha.900"
          border="1px solid gray.900"
          textColor="gray.900"
        >
          {creator?.stock}
        </Badge>
      </Box>
      <VStack align="start">
        <Text fontSize="xs">{creator?.name}</Text>
        <Text fontSize="xs" mt={-2}>
          <Text as="span" color="gray.400">
            {creator?.price}
          </Text>
        </Text>
      </VStack>
    </HStack>
  );
}
