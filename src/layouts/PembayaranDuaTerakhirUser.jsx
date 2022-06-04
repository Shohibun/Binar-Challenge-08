import React from "react";
import Navbar from "../components/NavbarUser";
import Jumbotron from "../components/JumbotronPembayaranDuaUser";
import Content from "../pages/PembayaranMetodeDuaTerakhirUser";
import Footer from "../components/Footer";

export default function PembayaranMetodeDuaTerakhirUser() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Content />
      <Footer />
    </>
  );
}
