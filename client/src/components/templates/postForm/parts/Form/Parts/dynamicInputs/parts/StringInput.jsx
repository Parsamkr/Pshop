import { FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function StringInput({ data }) {
  const { key, required, guide, title } = data;
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <FormLabel mt={"15px"}>{title}</FormLabel>
      <Input
        defaultValue=""
        placeholder={guide}
        autoComplete="off"
        {...register(key, {
          defaultValue: "",
          required: { value: required, message: `${title} باید وارد شود` },
        })}
        type="text"
      />
      {errors && errors[key] && (
        <Text color={"red"} fontSize={"13px"} as={"span"}>
          {errors[key].message}
        </Text>
      )}
    </>
  );
}
