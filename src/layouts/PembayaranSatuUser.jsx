import React from "react";
import Navbar from "../components/NavbarUser";
import Jumbotron from "../components/JumbotronPembayaranUser";
import Content from "../pages/PembayaranMetodeSatuUser";
import Footer from "../components/Footer";

export default function PembayaranSatuUser() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Content />
      <Footer />
    </>
  );
}
