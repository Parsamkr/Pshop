import { Flex, Spinner } from "@chakra-ui/react";
import colors from "@/theme/colors";
import React from "react";

export default function Loading() {
  return (
    <Flex
      dir="rtl"
      justifyContent={"center"}
      alignItems={"center"}
      height={"calc(100vh - 70px)"}
    >
      <Spinner size={"xl"} color={colors.blue[500]} thickness="1px" />
    </Flex>
  );
}
