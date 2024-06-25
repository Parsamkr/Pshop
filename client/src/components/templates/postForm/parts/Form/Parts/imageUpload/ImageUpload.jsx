"use client";
import React, { useEffect, useState } from "react";
import { Divider, Flex, Stack, Text } from "@chakra-ui/react";
import ImageInput from "./parts/ImageInput";
import ImageMocks from "./parts/ImageMocks";
import ImageText from "./parts/ImageText";
import ImageValidation from "@/utils/ImageValidation/ImageValidation";
import colors from "@/theme/colors";
import { useFormContext } from "react-hook-form";

export default function ImageUpload() {
  const { setValue } = useFormContext();
  const [selectedImages, setSelectedImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]); // State for error messages

  useEffect(() => {
    if (selectedImages) setValue("images", selectedImages);
  }, [selectedImages]);
  const handleImageChange = async (event) => {
    const newImages = Array.from(event.target.files); // Convert FileList to array
    const { errorMessages, filteredImages } = await ImageValidation(newImages);
    if (errorMessages.length > 0) {
      setErrorMessage(errorMessages);
      return;
    }
    setSelectedImages((prevImages) => [...prevImages, ...filteredImages]);
    setErrorMessage(false); // Clear any previous error messages
  };
  const handleDeleteImage = (index) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((image, i) => i !== index)
    );
  };

  return (
    <Stack>
      <ImageText />
      <Flex
        justifyContent={"flex-start"}
        gap={"40px"}
        wrap={"wrap"}
        alignItems={"center"}
      >
        <ImageInput handleImageChange={handleImageChange} />
        {selectedImages.length > 0 &&
          selectedImages.map((image, index) => (
            <ImageMocks
              key={index}
              index={index}
              image={image}
              handleDeleteImage={handleDeleteImage}
            />
          ))}
      </Flex>
      {errorMessage && (
        <Text fontSize={"13px"} as={"span"} color={"red"} my={"10px"}>
          {errorMessage}
        </Text>
      )}
      <Divider borderColor={colors.secondary[600]} />
    </Stack>
  );
}
