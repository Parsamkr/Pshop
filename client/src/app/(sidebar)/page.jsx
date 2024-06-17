import { Flex } from "@chakra-ui/react";
import SideBar from "@/components/shared/sideBar/SideBar";
import Posts from "@/components/templates/posts/Posts";
import { ToastContainer } from "react-toastify";
import Link from "next/link";

export default async function HomePage() {
  return (
    <>
      <ToastContainer />
      <Flex dir="rtl">
        <Link href={"login"}> login </Link>
        <SideBar />
        <Posts />
      </Flex>
    </>
  );
}
