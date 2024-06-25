import { Box, FormLabel, Select, Text } from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function BooleanInput({ data }) {
  const { key, required, title } = data;
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Box my={"20px"}>
      <FormLabel mb={"15px"}> {title} </FormLabel>
      <Select
        {...register(key, {
          required: { value: required, message: `${title} باید وارد شود` },
          setValueAs: (value) => (value === "true" ? true : false),
        })}
        placeholder={"--"}
      >
        <option value={true}> دارد </option>
        <option value={false}> ندارد </option>
      </Select>
      {errors && errors[key] && (
        <Text color={"red"} fontSize={"13px"} as={"span"}>
          {errors[key].message}
        </Text>
      )}
    </Box>
  );
}
