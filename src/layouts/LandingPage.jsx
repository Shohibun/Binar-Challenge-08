import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../pages/Jumbotron";
import Main from "../pages/Main";
import Feature from "../pages/Feature";
import Chart from "../pages/Chart";
import Testimonial from "../pages/Testimonial";
import Container from "../pages/Container";
import FAQ from "../pages/Faq";
import Footer from "../components/Footer";

export default function DashboardUser() {
    return (
        <>
            <Navbar/>
            <Jumbotron/>
            <Main/>
            <Feature/>
            <Chart />
            <Testimonial/>
            <Container/>
            <FAQ/>
            <Footer/>
        </>
    )
}
