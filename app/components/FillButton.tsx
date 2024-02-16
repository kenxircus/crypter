import {
  Icon,
  Stack,
  StackProps,
  forwardRef,
  useBoolean,
} from "@chakra-ui/react";
import React from "react";
import { FaBullseye } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";

const FillButton = forwardRef<StackProps, "div">((props, ref) => {
  const [isFilled, setIsFilled] = useBoolean();
  return (
    <Stack
      align="center"
      p={1}
      rounded="full"
      bgColor="gray.700"
      onClick={setIsFilled.toggle}
      ref={ref}
      {...props}
    >
      <Icon
        as={isFilled ? IoHeart : IoIosHeartEmpty}
        boxSize={5}
        color={isFilled ? "red.500" : "whiteAlpha.900"}
        transition="color 0.2s"
      />
    </Stack>
  );
});

export default FillButton;
