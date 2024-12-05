
import { Outlet } from "react-router-dom";
// import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.jsx";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";


function Layout() {
  return (
    <>
      <UserContextProvider>
      <Navbar />
      <Outlet />
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <Footer />
      </UserContextProvider>
    </>
  );
}

export default Layout;
