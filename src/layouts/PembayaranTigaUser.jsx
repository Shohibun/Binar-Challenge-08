import React from "react";
import Navbar from "../components/NavbarUser";
import Jumbotron from "../components/JumbotronPembayaranTigaUser";
import Content from "../pages/PembayaranMetodeTigaUser";
import Footer from "../components/Footer";

export default function PembayaranTigaUser() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Content />
      <Footer />
    </>
  );
}
