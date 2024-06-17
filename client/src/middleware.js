import { NextResponse } from "next/server";
import whoAmI from "./api/credentils/whoAmI";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  console.log("in the middleware ");
  const user = await whoAmI();
  console.log("user ", user?.status);
  if (user?.status != 200) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/createPost", "/createPost/:path*", "/myShop/:path*"],
};
