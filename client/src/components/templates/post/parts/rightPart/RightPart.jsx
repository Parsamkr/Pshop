import colors from "@/theme/colors";
import getTimeDifference from "@/utils/post/timeDiffrence";
import { Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function RightPart({ postData }) {
  const { title, updatedAt, district, content } = postData;

  return (
    <Stack dir="rtl" flex={1}>
      <Text fontSize={"25px"} fontWeight={"500"}>
        {title}{" "}
      </Text>
      <Text my={"10px"} fontSize={"14px"} color={colors.secondary[800]}>
        {" "}
        {getTimeDifference(updatedAt)} پیش در {district}{" "}
      </Text>
      <Stack>
        
        <Text fontSize={"20px"} fontWeight={"400"}>
          {" "}
          توضیحات{" "}
        </Text>
        <Text my={"10px"} fontSize={"14px"}>
          {content}
        </Text>
      </Stack>
    </Stack>
  );
}
