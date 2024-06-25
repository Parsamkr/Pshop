"use client";
import whoAmI from "@/api/credentils/WhoAmI";
import CreatePostApi from "@/api/posts/CreatePostApi";

const PostFormSubmit = async (data, e) => {
  try {
    const user = await whoAmI();
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("category", data.slugId);
    formData.append("userId", user._id);
    const location = data.location || {};
    formData.append("lat", location.lat);
    formData.append("lng", location.lng);
    const images = data.images || [];
    images.forEach((image) => formData.append("images", image));
    const response = await CreatePostApi(formData);
    console.log(response.status);
  } catch (error) {
    console.log("heres the error in onsubmit function : ", error);
  }
};

export default PostFormSubmit;
