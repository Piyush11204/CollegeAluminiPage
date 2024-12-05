import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext.jsx";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./Pages/Home/ScrollToTop";

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
