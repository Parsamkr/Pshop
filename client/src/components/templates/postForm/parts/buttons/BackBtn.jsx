"use client";
import useSlugtree from "@/store/catStores/slugTree";
import colors from "@/theme/colors";
import { Box, Flex, Image, Skeleton, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function BackBtn() {
  const pageSlug = useSearchParams().get("slug");
  const { tree, searchTree } = useSlugtree();
  const [catdata, setCatData] = useState([]);

  useEffect(() => {
    if (pageSlug && tree.children.length) {
      searchTree(tree, pageSlug).then((data) => setCatData(data));
    }
  }, [pageSlug, tree]);

  return (
    <Skeleton my={"20px"} isLoaded={catdata?.name}>
      <Flex
        position={"relative"}
        padding={"0px 20px"}
        height={"120px"}
        alignItems={"center"}
        border={`1px solid ${colors.darkenGrey[400]}`}
        borderRadius={"5px"}
      >
        <Text
          fontWeight={"500"}
          color={colors.darkenGrey[400]}
          fontSize={"21px"}
          as="h3"
        >
          {" "}
          {catdata.name ?? "loading.."}{" "}
        </Text>
        <Box position={"relative"} height={"100%"} width={"250px"} mx={"20px"}>
          <Image
            src={catdata.image}
            pos={"absolute"}
            top={"50%"}
            transform={"translate(0,-50%)"}
            right={"0"}
          />
        </Box>
        <Box
          as={Link}
          href={"/createPost"}
          position={"absolute"}
          padding={"10px 20px"}
          left={"-50px"}
          borderRadius={"5px"}
          transition={".5s"}
          _hover={{
            backgroundColor: colors.blue[400],
            transform: "translate(0,5px)",
            transition: ".4s",
          }}
          backgroundColor={colors.blue[500]}
          color={"white"}
        >
          {" "}
          تغییر دسته بندی{" "}
        </Box>
      </Flex>
    </Skeleton>
  );
}
