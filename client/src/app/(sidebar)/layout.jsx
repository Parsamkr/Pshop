import Sidebar from "@/components/shared/sideBar/SideBar";
import { Flex } from "@chakra-ui/react";

export default async function RootLayout({  children, modal }) {

  return (
    <Flex>
      <Sidebar />
      {modal}
      {children}
    </Flex>
  );
}
