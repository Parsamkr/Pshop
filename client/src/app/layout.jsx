import ReactQueryProvider from "./providers";
import Navbar from "../components/shared/navBar/Navbar";
import "./global.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import getAllCategories from "@/api/categories/Allcategories";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
config.autoAddCss = false;
export const metadata = {
  title: "Pshop",
  description: "hello and welcome to Pshop ",
};

export default async function RootLayout({ children }) {
  const catData = await getAllCategories(); // fetchin category data for navbar
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <ToastContainer />
          <Navbar catData={catData} />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
