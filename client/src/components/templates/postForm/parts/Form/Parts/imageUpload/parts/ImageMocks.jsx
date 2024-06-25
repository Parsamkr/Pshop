import { Flex, Image } from "@chakra-ui/react";
import React from "react";

export default function ImageMocks({ handleDeleteImage, image, index }) {
    console.log(handleDeleteImage)
  return (
    <Flex
      border={"1px solid rgba(0,0,0,.4)"}
      borderRadius={"10px"}
      pos={"relative"}
      boxSize={"140px"}
    >
      <Image
        src={URL.createObjectURL(image)}
        alt="Selected Image Preview"
        width={"100%"}
        objectFit={"cover"}
      />
      <Flex
        _hover={{ opacity: "1", transition: ".6s" }}
        pos={"absolute"}
        top={0}
        transition={".5s"}
        left={0}
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        onClick={() => handleDeleteImage(index)}
        backgroundColor={"rgba(40,40,40,.5)"}
        opacity={0}
      >
        <Image src="/delete.png" width={"20px"} />
      </Flex>
    </Flex>
  );
}
