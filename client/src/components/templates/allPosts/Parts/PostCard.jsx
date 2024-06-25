import { Box, Flex, Image, Skeleton, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Link from "next/link";
import colors from "@/theme/colors";

export default function PostCard({ PostData }) {
  const { title, images, amount, district, _id } = PostData;
  const [imageLoad, setImageLoad] = useState(false);
  return (
    <Flex
      borderRadius={"5px"}
      padding={"10px"}
      minW={"300px"}
      width={"30%"}
      margin={"10px"}
      cursor={"pointer"}
      as={Link}
      href={`post/${_id}`}
      border={`1px solid ${colors.secondary[500]}`}
      justifyContent={"space-between"}
    >
      <Stack alignItems={"start"} justifyContent={"space-between"}>
        <Text fontSize={"18px"} fontWeight={"400"} as={"span"}>
          {" "}
          {title}{" "}
        </Text>
        <Box fontSize={"13px"} color={colors.secondary[800]} fontWeight={"400"}>
          <Text my={"5px"} as={"p"}>
            {amount} تومان
          </Text>
          <Text my={"5px"} as={"span"}>
            {district}
          </Text>
        </Box>
      </Stack>
      <Skeleton isLoaded={imageLoad}>
        <Image
          onLoad={() => setImageLoad(true)}
          borderRadius={"5px"}
          src={images[0] ? `http://localhost:3000/${images[0]}` : "noImage.jpg"}
          boxSize={"136px"}
          objectFit={"cover"}
        />
      </Skeleton>
    </Flex>
  );
}
