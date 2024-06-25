import colors from "@/theme/colors";
import { Text } from "@chakra-ui/react";
import React from "react";

export default function ImageText() {
  return (
    <>
      <Text fontWeight={"500"} fontSize={"16px"} as={"h1"}>
        {" "}
        عکس آگهی
      </Text>
      <Text
        my={"20px"}
        color={colors.secondary[700]}
        fontWeight={"400"}
        fontSize={"14px"}
        as={"h1"}
      >
        {" "}
        عکس‌هایی از فضای داخل و بیرون ملک اضافه کنید. در صورت نداشتن عکس از ملک،
        آگهی را بدون عکس ثبت کنید.
      </Text>
    </>
  );
}
