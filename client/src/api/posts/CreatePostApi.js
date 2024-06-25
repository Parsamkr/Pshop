"use server";
import api from "@/utils/config";
import getCookie from "@/utils/cookies/getCookie";

const CreatePostApi = async (formData) => {
  try {
    const { value: token } = await getCookie("access_token");
    if (!token) {
      console.log("please Log in ");
      return false;
    }
    const myAthorization = "Barear " + token;

    const res = await api.post("post/create", formData, {
      headers: {
        Authorization: myAthorization,
      },
    });
    if (res == undefined) {
      return { status: 200, message: "post created succusefully " };
    }
    return res;
  } catch (error) {
    console.log("createPost err : ", error);
  }
};
export default CreatePostApi;
