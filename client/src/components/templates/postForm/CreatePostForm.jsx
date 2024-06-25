import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import BackBtn from "./parts/buttons/BackBtn";
import CreateForm from "./parts/Form/CreateForm";


export default function CreatePostForm() {
  return (
    <Stack my={"50px"} alignItems={"center"}>
      <Stack gap={"20px"} dir="rtl" maxW={"500px"}>
        <Text as={"h1"} fontWeight={"500"} fontSize={"22px"}>
          ثبت آگهی
        </Text>
        <BackBtn />
        <CreateForm />
        
      </Stack>
    </Stack>
  );
}
