"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FormControl, Stack } from "@chakra-ui/react";
import Loaction from "./Parts/Loaction";
import ImageUpload from "./Parts/ImageUpload";
export default function CreateForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      location: { lat: 10, lng: 10 },
    },
  });
  console.log("watch : ", watch("location"));
  return (
    <>
      <FormControl onSubmit={handleSubmit((data) => console.log(data))}>
        <Stack>
          <Loaction setValue={setValue} />
          {/* <ImageUpload /> */}
          {/* <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText> */}
        </Stack>
      </FormControl>
    </>
  );
}
