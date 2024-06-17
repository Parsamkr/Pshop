import api from "@/utils/config";
import deleteCookie from "@/utils/cookies/deleteCookie";
import getCookie from "@/utils/cookies/getCookie";

const LogOutApi = async () => {
  try {
    const { value: token } = await getCookie("access_token");
    if (!token) {
      return;
    }
    const myAthorization = "Barear " + token;
    const res = await api.get("/auth/logout", {
      headers: {
        "Content-Type": "application/json",
        Authorization: myAthorization,
      },
    });
    await deleteCookie("access_token");
    return res;
  } catch (error) {
    console.log(error.message);
  }
};
export default LogOutApi;
