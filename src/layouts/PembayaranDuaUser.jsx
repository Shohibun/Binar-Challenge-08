import React from "react";
import Navbar from "../components/NavbarUser";
import Jumbotron from "../components/JumbotronPembayaranDuaUser";
import Content from "../pages/PembayaranMetodeDuaUser"
import Footer from "../components/Footer";

export default function PembayaranMetodeDuaUser() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Content />
      <Footer />
    </>
  );
}
