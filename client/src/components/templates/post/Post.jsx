"use client";
import GetPosts from "@/api/posts/GetPosts";
import { Flex } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "./parts/Loading";
import LeftPart from "./parts/leftPart/LeftPart";
import RightPart from "./parts/rightPart/rightPart";

export default function Post({ id }) {
  const { data: postData, isLoading } = useQuery({
    queryKey: ["SinglePostData"],
    queryFn: () => GetPosts(id).then((data) => data.post),
    staleTime : 1000
  });
  console.log(postData);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Flex mt={"50px"} justifyContent={"center"}>
      <Flex alignItems={"center"} w={"900px"} border={"1px solid black"}>
        <LeftPart />
        <RightPart postData={postData} />
      </Flex>
    </Flex>
  );
}
