"use server";
import { cookies } from "next/headers";
const deleteCookie = async (name) => {
  const mycookie = cookies().delete(name);
  return mycookie;
};
export default deleteCookie;
