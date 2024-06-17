"use server";
import { cookies } from "next/headers";
const getAllCookies = async (name) => {
  const mycookie = cookies().getAll() ?? false;
  return mycookie;
};
export default getAllCookies;
