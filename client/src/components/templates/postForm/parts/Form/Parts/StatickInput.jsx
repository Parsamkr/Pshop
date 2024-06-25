import colors from "@/theme/colors";
import {
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function StatickInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Stack gap={"5px"} py={"10px"}>
      <FormLabel mt={"15px"}>قیمت </FormLabel>
      <InputGroup>
        <InputRightElement
          color={colors.secondary[700]}
          left={"20px"}
          pointerEvents="none"
        >
          <Text> تومان </Text>
        </InputRightElement>
        <Input
          autoComplete="off"
          {...register("amount", {
            required: { value: true, message: `قیمت باید وارد شود ` },
            validate: (value) => {
              if (value == "") return true;
              const isNumber = !isNaN(value); // Check if value is a number
              return isNumber || "لطفا عدد وارد کنید"; // Return error message if not a number
            },
            setValueAs: (value) => (value == "" ? "" : parseFloat(value)),
          })}
          placeholder={"مبلغ"}
        />
      </InputGroup>
      {errors?.amount && (
        <Text color={"red"} fontSize={"13px"} as={"span"}>
          {errors.amount.message}
        </Text>
      )}
      <FormLabel mt={"15px"}>عنوان آگهی</FormLabel>
      <Input
        autoComplete="off"
        placeholder="عنوان آگهی"
        {...register("title_post", {
          required: "عنوان آگهی الزامیست",
          maxLength: { value: 30, message: "طول عنوان زیاد میباشذ" },
        })}
        type="text"
      />
      {errors?.title_post && (
        <Text color={"red"} fontSize={"13px"} as={"span"}>
          {errors.title_post.message}
        </Text>
      )}
      <FormLabel mt={"15px"}>توضیحات آگهی </FormLabel>
      <Textarea
        autoComplete="off"
        minH={"180px"}
        placeholder="توضیحات آگهی"
        {...register("description", {
          required: { value: true, message: `توضیحات باید وارد شود ` },
          maxLength: { value: 1600, message: "طول توضیحات آگهی زیاد میباشذ" },
        })}
        type="text"
      />
      {errors?.description && (
        <Text color={"red"} fontSize={"13px"} as={"span"}>
          {errors.description.message}
        </Text>
      )}
    </Stack>
  );
}
