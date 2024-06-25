import { NextResponse } from "next/server";
import whoAmI from "./api/credentils/WhoAmI";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const user = await whoAmI();
  if (!user?._id) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/createPost", "/createPost/:path*", "/myShop/:path*"],
};
