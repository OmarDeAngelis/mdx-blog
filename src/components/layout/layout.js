import React from "react";
import Navbar from "./Navabar";
import { LayoutProvider } from "../../context/layout-context";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  return (
    <LayoutProvider>
      <Navbar />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </LayoutProvider>
  );
};

export default Layout;
