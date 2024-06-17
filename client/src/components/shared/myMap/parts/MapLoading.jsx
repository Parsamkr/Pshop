import {  Flex, Spinner } from "@chakra-ui/react";
import React from "react";

export default function MapLoading({ loading }) {
  return (
    <>
      {loading && (
        <Flex
          pos={"absolute"}
          top={"0"}
          backgroundColor={"rgba(30,30,30,.5)"}
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          right={"0"}
          zIndex={2}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      )}
    </>
  );
}
