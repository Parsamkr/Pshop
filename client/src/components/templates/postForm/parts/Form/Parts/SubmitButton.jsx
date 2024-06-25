import colors from "@/theme/colors";
import { Button, Flex } from "@chakra-ui/react";
import React from "react";

export default function SubmitButton() {
  return (
    <Flex justifyContent={"end"}>
      <Button
        color={"white"}
        bgColor={colors.blue[500]}
        p={"25px 35px"}
        type="submit"
        transition={".5s"}
        fontWeight={"400"}
        _hover={{ opacity: ".7", transition: ".5s" }}
      >
        ثبت اگهی
      </Button>
    </Flex>
  );
}
