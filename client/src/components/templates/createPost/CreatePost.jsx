import React, { Suspense } from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";
import colors from "@/theme/colors";
import SelectCat from "./parts/SelectCat";
export default function CreatePost() {
  return (
    <Flex justifyContent={"center"}>
      <Stack minW={"550px"} bg={"white"} dir="rtl" py={"50px"}>
        <Text fontWeight={"500"} fontSize={"18px"} as="h1">
          ثبت آگهی
        </Text>
        <Text
          color={colors.secondary[800]}
          fontWeight={"400"}
          fontSize={"13px"}
          as="span"
        >
          انتخاب دسته‌بندی
        </Text>
        <Suspense>
          <SelectCat />
        </Suspense>
      </Stack>
    </Flex>
  );
}
