import setCookie from "@/utils/cookies/setCookie";
const { default: api } = require("@/utils/config");
const CheckOtpApi = async (mobile, code) => {
  try {
    console.log("here 1 ");
    const res = await api.post(
      "/auth/check-otp",
      { mobile, code },
      { headers: "application/json" }
    );
    console.log("here 1 ", res);
    if (res.token) {
      setCookie("access_token", res.token);
    }
    return { data: res, status: 200, error: [] };
  } catch (error) {
    return { data: false, status: 401, error: ["wrong code try again ? "] };
  }
};

export default CheckOtpApi;
