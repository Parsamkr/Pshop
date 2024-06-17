"use server";

import { cookies } from "next/headers";

const setCookie = async (name, data) => {
  const cookieStore = cookies();
  cookieStore.set(name , data, {
    httpOnly: true,
    // secure: "production",
  });
};

export default setCookie