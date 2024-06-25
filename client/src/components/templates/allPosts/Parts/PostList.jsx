import React from "react";
import { Flex } from "@chakra-ui/react";
import PostCard from "./PostCard";
export default function PostList({ Posts }) {
  return (
    <Flex
      width={"calc(100vw - 270px)"}
      wrap={"wrap"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      padding={"20px 20px"}
    >
      {Posts &&
        Posts.map((post) => {
          return <PostCard key={post._id} PostData={post} />;
        })}
    </Flex>
  );
}
