// utils/otpAPI.js
import axios from "axios"; // Assuming you're using axios for API requests

const sendOtpAPI = async (number) => {
  try {
    const response = await axios.post(
      "/auth/send-otp",
      { mobile: number },
      { headers: { "Content-Type": "application/json" } }
    );
    if (response.status === 200) {
      console.log("OTP sent successfully:", response.data);
      return {
        status: 200,
        phone: number,
        message: "کد برای شما ارسال شد ",
        code: response.data.code,
      };
    } else {
      console.error("Error sending OTP:", response.statusText);
      return {
        status: 401,
        message: "مشکلی پیش امده لطفا دوباره تلاش کنید",
      };
    }
  } catch (error) {
    console.error("Error sending OTP:", error.response);
    if (error.response.status == 400) {
      return {
        status: 400,
        message: [
          "کد برای این شماره ارسال شده !",
          "لطفا برای تلاش مجدد دقایقی صبر کنید",
        ],
      };
    }
  }
};

export default sendOtpAPI;
