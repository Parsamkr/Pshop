import { ModalBody, Stack } from "@chakra-ui/react";
import React from "react";
import LoginInput from "./loginFormParts/LoginInput";
import { useState } from "react";
import phoneSchema from "@/utils/loginControl/PhoneSchema";
import SendOtpAPI from "@/api/credentils/SendOtpApi";
import MyModalFooter from "./loginFormParts/MyModalFooter";
import LogInFormTitle from "./loginFormParts/LogInFormTitle";
import CheckOtpApi from "@/api/credentils/CheckOtpApi";
import loginSuccessToast from "@/utils/toasts/loginSuccessToast";
import { useRouter } from "next/navigation";
export default function LoginModalForm() {
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState([]);
  const router = useRouter();
  const [secondPage, setSecondPage] = useState(false);
  const [myCode, setMyCode] = useState("");

  const reform = () => {
    setNumber("");
    setErrors([]);
    setMyCode("");
    setSecondPage(false);
  };
  const handleCodeSubmit = () => {
    const res = CheckOtpApi(number, myCode).then((data) => {
      if (data.status == 200) {
        reform();
        // loginSuccessToast();
        router.push("/");
      }
      if (data.status == 401) {
        setErrors(data.error);
      }
    });
  };
  const handlePhoneSubmit = () => {
    try {
      phoneSchema.parse(number);
      setErrors([]);
      SendOtpAPI(number).then((res) => {
        if (res.status == 200) {
          setErrors([]);
          setNumber(res.phone);
          setSecondPage(!secondPage);
        }
        if (res.status !== 200) {
          setErrors(res.message);
        }
      });
    } catch (error) {
      setErrors(error.errors.map((err) => err.message));
    }
  };

  return (
    <>
      <Stack padding={"20px 40px"} gap={"20px"}>
        <LogInFormTitle secondPage={secondPage} phone={number} />
        <LoginInput
          secondPage={secondPage}
          reform={reform}
          phone={number}
          code={myCode}
          codeHandler={setMyCode}
          errors={errors}
          PhoneHandler={setNumber}
        />
      </Stack>

      <ModalBody></ModalBody>
      <MyModalFooter
        handlePhoneSubmit={handlePhoneSubmit}
        handleCodeSubmit={handleCodeSubmit}
        secondPage={secondPage}
      />
    </>
  );
}
