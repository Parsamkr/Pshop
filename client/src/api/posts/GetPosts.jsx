"use server";
import api from "@/utils/config";

const GetPosts = async (id , search, category ) => {
  try {
    const params = {};
    console.log("id : ", id);
    if (search) params.search = search;
    if (category) params.category = category;
    const res = await api.get("post/" + (id ?? ""), { params });
    // console.log("res : ", res);
    return res;
  } catch (error) {
    console.error("Error fetching posts:", error);
    // Optionally, throw a custom error to propagate it upwards or display an error message to the user
    throw new Error("Failed to retrieve posts");
  }
};

export default GetPosts;
