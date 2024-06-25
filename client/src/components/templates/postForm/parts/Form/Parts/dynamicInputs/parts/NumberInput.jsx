import { FormLabel, Input, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export default function NumberInput({ data }) {
  const { key, required, guide, title } = data;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <FormLabel mt={"15px"}>{title}</FormLabel>
      <Input
        autoComplete="off"
        {...register(key, {
          required: { value: required, message: `${title} باید وارد شود` },
          validate: (value) => {
            if (value == "") return true;
            const isNumber = !isNaN(value); // Check if value is a number
            return isNumber || "لطفا عدد وارد کنید"; // Return error message if not a number
          },
          setValueAs: (value) => (value == "" ? "" : parseFloat(value)),
        })}
        placeholder={guide}
      />
      {errors && errors[key] && (
        <Text color={"red"} fontSize={"13px"} as={"span"}>
          {errors[key].message}
        </Text>
      )}
    </>
  );
}
