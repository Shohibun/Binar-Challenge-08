import React from "react";
import Opacity from "../components/OpacityBlackUser";
import Navbar from "../components/NavbarUser";
import Jumbotron from "../components/JumbotronCariMobilUser";
import Footer from "../components/Footer";
import Content from "../pages/CariMobilUser";

export default function Layouts() {
    return (
        <>
        <Opacity />
        <Navbar />
        <Jumbotron />
        <Content />
        <Footer />
        </>
    )
}
