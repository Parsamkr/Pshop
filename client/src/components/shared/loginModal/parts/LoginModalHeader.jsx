import {
  Box,
  Divider,
  Flex,
  ModalCloseButton,
  ModalHeader,
} from "@chakra-ui/react";
import React from "react";
import colors from "@/theme/colors";

export default function LoginModalHeader({ handleClose, close }) {
  return (
    <>
      <Flex
        padding={"15px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <ModalHeader flex={1} fontWeight={500} fontSize={"18px"}>
          ورود به حساب کاربری
        </ModalHeader>
        {close ? (
          <ModalCloseButton
            position={"relative"}
            outline={"0px solid transparent"}
            p={3}
            size={"2px"}
            borderRadius={100}
          />
        ) : (
          <Box onClick={() => handleClose()}>بازگشت به خانه</Box>
        )}
      </Flex>
      <Divider border={".5px solid " + colors.secondary[600]} />
    </>
  );
}
