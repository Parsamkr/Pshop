"use client";
import {
  Modal,
  ModalContent,
  ModalOverlay,
  Stack,
  Box,
} from "@chakra-ui/react";
import React from "react";
import LoginModalHeader from "./parts/LoginModalHeader";
import LoginModalForm from "./parts/LoginModalForm";
import { useRouter } from "next/navigation";

export default function LoginModal({ close }) {
  const router = useRouter();
  const handleClose = () => {
    router.push("/");
  };
  return (
    <Box zIndex={"10"}>
      <Modal
        trapFocus={false}
        isCentered
        dir={"rtl"}
        onClose={() => {
          handleClose();
        }}
        isOpen={true}
      >
        {close ? <ModalOverlay /> : <ModalOverlay bgColor={"white"} />}

        <ModalContent
          boxShadow={!close && `0px 0px 30px  rgba(36, 69, 135 , .3)`}
          minWidth={"560px"}
          dir="rtl"
        >
          <Stack>
            <LoginModalHeader handleClose={handleClose} close={close} />
            <LoginModalForm close={close} />
          </Stack>
        </ModalContent>
      </Modal>
    </Box>
  );
}
