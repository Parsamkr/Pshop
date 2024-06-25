import { Box, FormLabel, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

export default function SelectInput({ data }) {
  const { key, required, title, enum: options, type } = data;
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
          setValueAs: (value) => {
            value == "" ?? type == "number" ? parseFloat(value) : value;
          },
        })}
        placeholder={"--"}
      >
        {options.length > 0 &&
          options.map((option) => (
            <option key={option} value={option}>
              {" "}
              {option}{" "}
            </option>
          ))}
      </Select>
      {errors && errors[key] && (
        <Text color={"red"} fontSize={"13px"} as={"span"}>
          {errors[key].message}
        </Text>
      )}
    </Box>
  );
}
