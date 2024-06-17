import React from "react";
import {
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Button,
} from "@chakra-ui/react";
import colors from "@/theme/colors";

export default function LoginInput({
  codeHandler,
  secondPage,
  errors,
  reform,
  PhoneHandler,
  phone,
  code,
}) {
  return (
    <Box>
      <InputGroup pos={"relative"} size="md">
        <Input
          transition={".5s"}
          onChange={(e) => {
            secondPage
              ? codeHandler(e.target.value)
              : PhoneHandler(e.target.value);
          }}
          border={
            "1px solid " + (errors.length ? "red" : colors.secondary[600])
          }
          _focus={{
            boxShadow: "none",
            borderRadius: "15px",
            transition: ".3s",
            border: "1px solid " + colors.secondary[800],
          }}
          _hover={{ border: "1px solid " + colors.secondary[800] }}
          type={"text"}
          value={secondPage ? code : phone}
          placeholder={secondPage ? "کد تایید ۶ رقمی" : "شمارهٔ موبایل"}
          fontSize={"15px"}
        />
        <InputRightElement width="4.5rem">
          <Text
            display={secondPage ? "none" : "default"}
            backgroundColor={colors.secondary[400]}
            padding={"7px 15px"}
            fontSize={"10px"}
            borderRadius={"100px"}
            size="sm"
          >
            ۹۸+
          </Text>
        </InputRightElement>
        {secondPage && (
          <Button
            onClick={() => reform()}
            padding={"10px 15px"}
            color={"white"}
            borderRadius={"50px"}
            fontWeight={"400"}
            fontSize={"10px"}
            position={"absolute"}
            top={"130%"}
            left={"0px"}
            _hover={{ backgroundColor: colors.blue[600] }}
            bgColor={colors.blue[300]}
          >
            {" "}
            تغییر شمارهٔ موبایل
          </Button>
        )}
      </InputGroup>
      {errors.length > 0 &&
        errors.map((err) => (
          <Box key={err} fontSize={"12px"} color={"red"} margin={"5px"}>
            {err}
          </Box>
        ))}
    </Box>
  );
}
