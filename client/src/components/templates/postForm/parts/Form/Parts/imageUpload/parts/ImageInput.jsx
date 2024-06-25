import { Flex, Image, Input } from "@chakra-ui/react";
import React from "react";

export default function ImageInput({ handleImageChange }) {

  return (
    <Flex

      justifyContent={"center"}
      alignItems={"center"}
      pos={"relative"}
      boxSize={"140px"}
      opacity={0.4}
      transition={".5s"}
      _hover={{ opacity: "8", transition: ".6s" }}
      borderRadius={"10px"}
      border={`3px dashed black}`}
    >
      <Image width={"20px"} src="/image.png" />
      <Input
        pos={"absolute"}
        opacity={0}
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
        multiple
        type="file"
        id="imageFile"
        onChange={handleImageChange}
      />
    </Flex>
  );
}
