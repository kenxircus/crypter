import { Tag } from "@chakra-ui/react";
import React from "react";

type Props = {
  price: string;
};

const PriceTag = (props: Props) => {
  return (
    <Tag
      variant="outline"
      color="green.400"
      colorScheme="green"
      border=" 1.25px solid"
      fontSize="xs"
      rounded="md"
    >
      {props.price}
    </Tag>
  );
};

export default PriceTag;
