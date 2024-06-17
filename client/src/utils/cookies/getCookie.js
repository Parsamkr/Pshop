"use server";
import { cookies } from "next/headers";
const getCookie = async (name) => {
  const mycookie = cookies().get(name) ?? false;
  return mycookie;
};
export default getCookie;

