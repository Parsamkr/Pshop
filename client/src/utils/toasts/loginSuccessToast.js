"use client";

import { toast, Bounce } from "react-toastify";
const loginSuccessToast = () => {
  return toast.success("ورود موفق", {
    position: "top-left",
    style: { textAlign: "right", fontFamily: "iransans" },
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
};
export default loginSuccessToast;
