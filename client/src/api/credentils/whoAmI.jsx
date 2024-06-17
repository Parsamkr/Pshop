import getCookie from "@/utils/cookies/getCookie";
const whoAmI = async () => {
  try {
    const { value: token } = await getCookie("access_token");
    if (!token) {
      console.log("please Log in ");
      return false;
    }
    const myAthorization = "Barear " + token;
    const user = await fetch("http://localhost:3000/user/whoami/", {
      cache: "no-cache",
      headers: { Authorization: myAthorization },
    });
    return user;
  } catch (error) {
    console.log("error : ", error);
  }
};
export default whoAmI;
