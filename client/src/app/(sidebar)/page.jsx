import { Flex } from "@chakra-ui/react";
import SideBar from "@/components/shared/sideBar/SideBar";

import { ToastContainer } from "react-toastify";
import AllPosts from "@/components/templates/allPosts/AllPosts";

export default async function HomePage() {
  return (
    <>
      <ToastContainer />
      <Flex dir="rtl">
        <SideBar />
        <AllPosts />
      </Flex>
    </>
  );
}
